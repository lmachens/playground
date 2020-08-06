import "./card.css";
import { createElement } from "../utils/elements";

export function createCard(props) {
  const title = createElement("h3", {
    innerText: props.title,
  });
  const image = createElement("img", {
    src: props.imgSrc,
  });
  const body = createElement("p", {
    innerText: props.body,
  });

  const card = createElement(
    "div",
    {
      className: "card",
    },
    [title, image, body]
  );

  return card;
}
