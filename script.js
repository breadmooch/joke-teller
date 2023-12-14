const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// API key 15e3279510e84449a5f9dcb9864a58b9
//Passes Joke to VoiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
        key: '15e3279510e84449a5f9dcb9864a58b9',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

//Get Jokes From Joke API
async function getJokes() {
    let joke ='';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
       const response = await fetch(apiUrl);
       const data = await response.json();
       if (data.setup) {
         joke = `${data.setup} ... ${data.delivery}`;
       } else {
          joke = data.joke;
       }
       tellMe(joke);
    } catch (error) {
       // Catch Errors Here
       console.log('whoops', error)
    }
}

getJokes()