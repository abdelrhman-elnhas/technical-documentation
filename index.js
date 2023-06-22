function copy(content) {
  const copyTxt = content.nextSibling.nextSibling.innerText;
  // console.log(content.nextSibling.nextSibling.innerText);
  const txtArea = document.createElement("textarea");
  txtArea.textContent = copyTxt;
  document.body.append(txtArea);
  txtArea.select();
  document.execCommand("copy");
  txtArea.remove();
}
