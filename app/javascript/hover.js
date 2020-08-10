function hover() {
  const articles = document.querySelectorAll(".article")
  articles.forEach((article) => {
    article.addEventListener('mouseover', () => {
      article.setAttribute("style", "background-color:#F1940B;");
    })
    article.addEventListener('mouseout', () => {
      article.removeAttribute("style", "background-color:#FFFFFF;");
    })
  })
}
window.addEventListener("load", hover);
// 非同期で投稿した分にも適用したい場合は以下を使用する
// setInterval(hover, 1000);