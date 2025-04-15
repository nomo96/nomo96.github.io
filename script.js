document.getElementById("more-btn").addEventListener("click", function() {
  const moreInfo = document.getElementById("more-info");
  if (moreInfo.classList.contains("hidden")) {
    moreInfo.classList.remove("hidden");
    this.textContent = "閉じる";
  } else {
    moreInfo.classList.add("hidden");
    this.textContent = "もっと見る";
  }
});
