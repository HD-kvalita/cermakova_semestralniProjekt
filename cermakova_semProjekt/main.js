const api = {
    key: "feae696c18be2bd806fb81d79b42d5fe",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

getResults();

function getResults() {
    fetch(`${api.baseurl}weather?q=${"Antarctica"}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}



function save() {
    var firstPOST = document.getElementById("first-name").value;
    var lastPOST = document.getElementById("last-name").value;
    var mailPOST = document.getElementById("eml").value;
    var textPOST = document.getElementById("textarea").value;

    localStorage.setItem("first-name", firstPOST);
    localStorage.setItem("last-name", lastPOST);
    localStorage.setItem("mail", mailPOST);
    localStorage.setItem("text", textPOST);
}

function load() {
    document.getElementById("first-name").value = localStorage.getItem("first-name");
    document.getElementById("last-name").value = localStorage.getItem("last-name");
    document.getElementById("eml").value = localStorage.getItem("mail");
    document.getElementById("textarea").value = localStorage.getItem("text");
}