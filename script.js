// 確認前端是否從後端獲取資料
async function fetchWallets() {
  try {
    const response = await axios.get("http://localhost:3333/wallets");
    const wallets = response.data;

    const tableBody = document.querySelector("#walletsTable tbody");
    tableBody.innerHTML = "";  // 清空現有資料

    wallets.forEach(wallet => {
      const row = document.createElement("tr");
      const walletCell = document.createElement("td");
      const allowanceCell = document.createElement("td");
      const trxBalanceCell = document.createElement("td");

      walletCell.textContent = wallet.address;
      allowanceCell.textContent = "待查詢"; // 這邊會寫入授權額度
      trxBalanceCell.textContent = "待查詢"; // 這邊會寫入TRX餘額

      row.appendChild(walletCell);
      row.appendChild(allowanceCell);
      row.appendChild(trxBalanceCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Failed to fetch wallet data", error);
  }
}

// 點擊按鈕觸發刷新
document.getElementById("refreshButton").addEventListener("click", fetchWallets);

// 頁面加載時自動執行一次查詢
fetchWallets();
