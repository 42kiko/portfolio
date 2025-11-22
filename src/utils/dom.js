// Kleinere DOM-Utilities für sauberes Rendern
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "dataset") Object.assign(node.dataset, v);
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v !== undefined && v !== null) node.setAttribute(k, v);
  });
  children.flat().forEach((c) => {
    if (c == null) return;
    if (typeof c === "string") node.insertAdjacentHTML("beforeend", c);
    else node.appendChild(c);
  });
  return node;
}

export const clear = (node) => (node.innerHTML = "");
