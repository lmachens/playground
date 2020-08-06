import { createElement } from "../utils/elements.js";

export function createTitle() {
  const title = createElement("h1", { innerHTML: "Playground9000" });
  return title;
}
