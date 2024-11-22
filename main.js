// DOM Elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsSection = document.getElementById("results-section");


const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// Fetch data from API
const fetchWordData = async (word) => {
  try {
    const response = await fetch(`${API_URL}${word}`);
    if (!response.ok) {
      throw new Error(renderResults());
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Render data to the DOM
const renderResults = (wordData) => {
  resultsSection.innerHTML = ""; // Clear previous results

  wordData && wordData.length > 0
  ? wordData.forEach((entry) => {
    const word = entry.word;
    const phonetic = entry.phonetic || "Not available";
    let audio_;
    for (const { audio } of  entry.phonetics) {
        if(audio !==''){
                audio_ = audio
        }
    }

    // console.log(audio_)
    
    const sourceURL = entry.sourceUrls;
    const meanings = entry.meanings.map((meaning) => `
      <div>
        
        <div class="partOfSpeech">
       <h4>${meaning.partOfSpeech}</h4>
       
        <div class="line"></div>
       </div>
        <p class="meaning">Meaning</p>
        <ul>
          ${meaning.definitions
            .map((definition) => `<li>${definition.definition}</li>`)
            .join("")}
        </ul>
      </div>
    `).join("");

    resultsSection.innerHTML += `
      <div class="result">
      <div class="play">
       <h2>${word}</h2>
        <svg id='play' xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
      </div>
       
        <p> ${phonetic}</p>
        <div>${meanings}</div>
        <h5>Source <a target ="_blank" href="${sourceURL}">${sourceURL}</a> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg></h5>
      </div>
    `;

    const play = document.getElementById("play")

    play.addEventListener('click',()=>{
       const playAudio =  new Audio(audio_)

       playAudio.play()
    })
  }): (resultsSection.innerHTML += `
        <section class="error-message">
        <h1><img src="./assets/images/😕.png"></h1>
        <h2>No Definitions Found</h2>
        <p id="err-message">Sorry pal, we couldn't find the definitions for the word you were looking for. 
        You can try the search again at a later time or head to the web instead.</p>
        </section>
    `);
};

// Handle search button click
const handleSearch = async () => {
  const word = searchInput.value.trim();

  if (!word) {
    alert("Please enter a word.");
    return;
  }

  try {
    resultsSection.innerHTML = "<p>Loading...</p>";
    const wordData = await fetchWordData(word);
    renderResults(wordData);
  } catch (error) {
    resultsSection.innerHTML = `<p> ${renderResults(wordData)}</p>`;
  }
};

// Add event listener
searchButton.addEventListener("click", handleSearch);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

  // Handle background mode
const moon = document.getElementById('moon')
// const moonIcon = document.getElementsById('moon-icon')
const toggleBackground = document.getElementById('checkbox') 

toggleBackground.addEventListener('click', ()=>{
    let background = document.body;
    background.classList.toggle('dark-mode')
    moon.style.color = '#A445ED'
    moon.style.f = '#A445ED'
})