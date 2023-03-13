const genres = document.getElementById("genres");

const selectItem = genres.options.selectedIndex;
alert(genres.options[selectItem].textContent);
const newOpt = new Option("Классика", "classic", false, true);
genres.append(newOpt);
