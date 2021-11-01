const API_KEY = '6EVXQKlf1K0Cy8SdRuun42FTzj8Wm1Hn';
const container = document.body.querySelector('#gifs-container')
const queryArray = [];
let isWorking = false;

const getGifUrl = (q) => `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${API_KEY}`;
const apiCall = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.data)
        return result.data;
    } catch (e) {
        rej(e);
        return new Error(`Error ${e.status}`);
    };
};

function callApiWithDelay(queryArray) {
    isWorking = true;
    const nextQuery = queryArray.shift();

    if(nextQuery) {
        const cached = localStorage.getItem(nextQuery);

        return new Promise(resolve => {
            setTimeout(() => {
                cached ? resolve(JSON.parse(cached)) : resolve(apiCall(getGifUrl(nextQuery)));
            },500);
        }).then((response) => {
            displayGifs(response);
            localStorage.setItem(nextQuery, JSON.stringify(response));
            callApiWithDelay(queryArray)
        });
    } else {
        isWorking = false;
        return Promise.resolve();
    }
};

function displayGifs(gifArray) {
    container.innerHTML = "";
    gifArray.forEach(g => {
        const img = document.createElement("img");
        img.src = g.images.downsized.url;
        container.appendChild(img);
    });
};

function inputData(e) {
    const searchQuery = e.target.value;
    queryArray.push(searchQuery);

    if(!isWorking) callApiWithDelay(queryArray);
};