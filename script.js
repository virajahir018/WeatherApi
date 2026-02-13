// // const searchInput = document.querySelector("input");
// // const btn = document.querySelector("button");
// // const ct = document.querySelector(".city");
// // const t = document.querySelector(".temp");

// // const Temp = {
// //     Amreli: 27,
// //     Rajkot: 28,
// //     Junagadh: 29
// // };

// // btn.addEventListener("click", (e) => {
// //     e.preventDefault();

// //     let input = searchInput.value;

// //     if (Temp[input]) {
// //         ct.innerText = input;
// //         t.innerText = Temp[input] + " °C";
// //     } else {
// //         ct.innerText = "City not found ❌";
// //         t.innerText = "-- °C";
// //     }
// // });

const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");

const API_KEY = "6a743be92b95875e9627fe1d5c2cc375";

button.addEventListener("click", () => {
    const cityName = input.value;

    if (cityName === "") {
        alert("Please enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === "404") {
                city.innerText = "City not found";
                temp.innerText = "-- °C";
                desc.innerText = "";
                return;
            }

            city.innerText = data.name;
            temp.innerText = `${Math.round(data.main.temp)} °C`;
            desc.innerText = data.weather[0].description;
        })
        .catch(() => {
            alert("Something went wrong");
        });
});

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        button.click();
    }
});
