const showAddSongTable = () => {
  const table = document.querySelector(".table");
  table.classList.add("open");
  const hideSong = document.querySelector(".hideSong");
  hideSong.classList.add("open");
};
const hideAddSongTable = () => {
  const table = document.querySelector(".table");
  table.classList.remove("open");
  const hideSong = document.querySelector(".hideSong");
  hideSong.classList.remove("open");
};