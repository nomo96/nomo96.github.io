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

