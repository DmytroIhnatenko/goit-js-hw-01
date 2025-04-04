function getElementWidth(content, padding, border) {
  const parseContent = Number.parseFloat(content);
  const parsePadding = Number.parseFloat(padding);
  const parseBorder = Number.parseFloat(border);

  const parse = parseContent + parsePadding * 2 + parseBorder * 2;
  return parse;
}
getElementWidth();
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
