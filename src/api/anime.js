export async function getAnime() {
  const response = await fetch("https://api.jikan.moe/v3/anime/269");

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();
  return data;
}
