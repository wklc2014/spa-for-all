module.exports = function createDOM(id) {
  let dom = document.getElementById(id);
  if (!dom) {
    dom = document.createElement('div');
    dom.id = id;
    document.appendChild(dom);
  }
  return dom;
}