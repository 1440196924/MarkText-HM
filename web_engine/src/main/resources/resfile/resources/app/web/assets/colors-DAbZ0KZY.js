function colors(specifier) {
  var n = specifier.length / 6 | 0, colors2 = new Array(n), i = 0;
  while (i < n) colors2[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors2;
}
export {
  colors as c
};
