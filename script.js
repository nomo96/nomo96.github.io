// ページ読み込み時にフェードイン
window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  container.style.opacity = 0;
  container.style.transform = "translateY(30px)";
  setTimeout(() => {
    container.style.transition = "opacity 1s ease, transform 1s ease";
    container.style.opacity = 1;
    container.style.transform = "translateY(0)";
  }, 100);
});

// 「もっと見る」スライド切り替え
document.getElementById("more-btn").addEventListener("click", function () {
  const moreInfo = document.getElementById("more-info");
  if (moreInfo.classList.contains("visible")) {
    moreInfo.style.maxHeight = "0px";
    this.textContent = "もっと見る";
    moreInfo.classList.remove("visible");
  } else {
    moreInfo.style.maxHeight = moreInfo.scrollHeight + "px";
    this.textContent = "閉じる";
    moreInfo.classList.add("visible");
  }
});
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
}

header {
  background-color: #007acc;
  color: white;
  padding: 20px;
  text-align: center;
}

main {
  padding: 20px;
}

section {
  margin-bottom: 30px;
}

footer {
  background-color: #ddd;
  text-align: center;
  padding: 10px;
}

button {
  padding: 8px 12px;
  background-color: #007acc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #005f99;
}
