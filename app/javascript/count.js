function count() {
  const articleText  = document.getElementById("article_text");
  articleText.addEventListener("keyup", () => {
    const charNum  = document.getElementById("char_num");
    countVal = articleText.value.length
    charNum.innerHTML = `${countVal}文字`
  })
}
window.addEventListener("load", count);