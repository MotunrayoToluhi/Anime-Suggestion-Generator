// Display an alert for when the webpage loads
window.alert("Having trouble finding the perfect anime to watch? Look no further!");

//Initialise variables to track user selected genres
let Action = false;
let Fantasy = false;
let Comedy = false;

// Define an array of anime titles and their matching genres
const anime = [
  { title: "Psycho Pass", genres: ["Action"] },
  { title: "Code Geass", genres: ["Action"] },
  { title: "Full Metal Alchemist: Brotherhood", genres: ["Action", "Fantasy"] },
  { title: "Hunter x Hunter", genres: ["Action", "Fantasy"] },
  { title: "Demon Slayer", genres: ["Action", "Fantasy"] },
  { title: "Tower of God", genres: ["Action", "Fantasy"] },
  { title: "One Punch Man", genres: ["Action", "Comedy"] },
  { title: "Mob Psycho 100", genres: ["Action", "Comedy"] },
  { title: "Assassination Classroom", genres: ["Action", "Comedy"] },
  { title: "Wonder Egg Priority", genres: ["Fantasy"] },
  { title: "Ranking of Kings", genres: ["Fantasy"] },
  { title: "The Devil is a Part-timer", genres: ["Fantasy", "Comedy"] },
  { title: "Amagi Brilliant Park", genres: ["Fantasy", "Comedy"] },
  { title: "Kamisama Kiss", genres: ["Fantasy", "Comedy"] },
  { title: "Love is War", genres: ["Comedy"] },
  { title: "Asobi Asobase", genres: ["Comedy"] },
  { title: "Blood Lad", genres: ["Action", "Fantasy", "Comedy"] },
  { title: "Black Clover", genres: ["Action", "Fantasy", "Comedy"] },
  { title: "Soul Eater", genres: ["Action", "Fantasy", "Comedy"] },
];

//Add an event listener to the generate button
document.getElementById("generateButton").addEventListener("click", function() {
 //Create new array to store selecteed genres
  const selectedGenres = [];
  //Check if checkboxes for specific genres are sellected and adding them to selectedGenres array
  if (document.getElementById("actionCheckbox").checked) {
    selectedGenres.push("Action");
  }
   if (document.getElementById("fantasyCheckbox").checked) {
    selectedGenres.push("Fantasy");
  }
   if (document.getElementById("comedyCheckbox").checked) {
    selectedGenres.push("Comedy");
  }
  //Function filters anime by selected genres
  function filterAnimeByGenres(selectedGenres) {
    return anime.filter((show) => {
      return selectedGenres.every((genre) => show.genres.includes(genre));
    })
  }
  //Define a list of anime that match selected genres
  const filterdAnime = filterAnimeByGenres(selectedGenres);

  //Function to select one random anime from the filtered list
  function getRandomAnime(filterdAnime){
    const randomIndex = Math.floor(Math.random()* filterdAnime.length);
    return filterdAnime[randomIndex];
  }

  //Get random anime based on user selected genres
  const randomAnime = getRandomAnime(filterdAnime);

  //Function to display the random anime title
  function displayRandomAnime(result){
    const resultDiv = document.getElementById("result"); resultDiv.textContent = result.title;
  }
  //Dispaly random anime title
   displayRandomAnime(randomAnime);

});