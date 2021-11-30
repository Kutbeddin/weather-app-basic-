const url = "https://api.openweathermap.org/data/2.5/";
const key = "28e499766affe5265898560c433a8bd3"


const setQuery = (e)=>{
    if(e.keyCode=="13"){
        
        getResult(searchbar.value)
      

    }

}

//*async metodu

// const getResult = async (cityName)=>{
//     let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
//     const response = await fetch(query);
//     const data = await response.json();
//     displayResult(data);


// }


//*Aixos metodu
//!HTML de tanımlama unutulmamalı!!  

const  getResult = async (cityName) =>  {

const query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
const response = await axios.get(query)
.then(response =>response.data).then(data=>displayResult(data))//  1.yol
// const {data} = response// 2.yol
// displayResult(data)
// displayResult(response.data)//3.yol

 }

 //*then metodu


// const getResult = (cityName)=>{
//     let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
//     fetch(query)
//     .then(weather=>{
//         return weather.json()
//     })
//     .then(displayResult)
   
// }


const displayResult =(result)=>{
    const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${result.weather[0].icon}.svg`
    // const iconElement = document.createElement("div")
    const innerİcon =  `<img class="city-icon" src="${iconUrl}"></img>`
    const icon = document.querySelector(".icon")
    icon.innerHTML = innerİcon

    let city = document.querySelector(".city")
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector(".temp")
    temp.innerText = `${Math.round(result.main.temp)}"C`
    let desc = document.querySelector(".desc")
    desc.innerText = result.weather[0].description


    let minmax = document.querySelector(".minmax")
    minmax.innerText = `${Math.round(result.main.temp_min)}"C/${Math.round(result.main.temp_max)}"C`
    
}

const searchbar = document.getElementById("searchBar")
searchbar.addEventListener("keypress", setQuery)