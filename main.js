const container = document.querySelector(".container");
async function getData() {
  const data = await fetch(
    "https://www.omdbapi.com/?apikey=b6003d8a&s=All"
  ).then((res) => res.json());
  console.log(data);
  data.Search.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h2>${movie.Title}</h2>
      <p>${movie.Year}</p>
    `;
    container.append(card);
  });
}
getData();
