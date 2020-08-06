import "./global.css";
import { createToggleButton } from "./components/toggleButton.js";
import { createTitle } from "./components/title.js";
import { createElement } from "./utils/elements";
import { getAnime } from "./api/anime";
import { createCard } from "./components/card";

const title = createTitle();
const toggleButton = createToggleButton();

const fetchButton = createElement("button", {
  innerHTML: "FETCH IT",
});

fetchButton.addEventListener("click", async () => {
  const anime = await getAnime();
  const card = createCard({
    title: anime.title,
    imgSrc: anime.image_url,
    body: anime.synopsis,
  });
  document.body.append(card);
  console.log(anime);
});

document.body.append(title);
document.body.append(toggleButton);
document.body.append(fetchButton);
