import "./CSS/style.css"
import debounce from "lodash.debounce";
import Notiflix from "notiflix";

import { fetchCountries } from "./JS/fetchCountries.js";


const dataSearch = document.querySelector("#search-box")
const dataList = document.querySelector(".country-list")
const dataInfo = document.querySelector(".country-info")

let countryName = ""

dataSearch.addEventListener("input", debounce(countryFinder, 300))

function countryFinder() {
    countryName = dataSearch.value.trim()
    if(countryName === "") {
        clearAll()
    return
         
    }
    fetchCountries(countryName)
    .then(dataCountryName => {
        if(dataCountryName.length > 10){
            alertToManyMatches()

        } else if (dataCountryName.length >= 2 && dataCountryName.length < 10) {
            countryDataList(dataCountryName)

        } else if (dataCountryName.length === 1) {
            clearAll()
            countryDataInfo(dataCountryName[0])
        }   
    }).catch(alertWrongCountryName)
    
}

function countryDataList(countries) {
    clearAll()
    
    const countryNameList = countries.map((country) => {
        return `
        <div class="country-info">
        <p><img src="${country.flags.svg}" width="50px" height="40px"></p>
        <h2>${country.name.official}</h2>
        </div>
       `

    }).join("")
    dataList.insertAdjacentHTML("beforeend", countryNameList)
    
}

function countryDataInfo(country) {
    clearAll()

    const arrayLanguages = []
    
    for(const language in country.languages) {
        arrayLanguages.push(country.languages[language])
    }
    const arrayLanguagesInfo = arrayLanguages.join(", ")
    
    const singleCountryInfo = `

    <div class="country-info">
        <p"><img src="${country.flags.svg}" width="50px" height="40px"></p>
        <h2>${country.name.official}</h2>
        <p><b>Capital</b>: ${country.capital}</p>  
        <p><b>Population</b>: ${country.population}</p>  
        <p><b>Languages </b>: ${arrayLanguagesInfo}</p>  
    
    
    </div>
    `
    
    dataInfo.insertAdjacentHTML("afterbegin", singleCountryInfo )
}

function clearAll() {
    dataList.innerHTML = ""
    dataInfo.innerHTML = ""
}

function alertToManyMatches() {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
}

function alertWrongCountryName() {
    Notiflix.Notify.warning("Oops, there is no country with that name")
}





















