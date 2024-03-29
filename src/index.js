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
        <div class="country">
        <p class="name"><img src="${country.flags.svg}" width="64px" height="32px"><span>${country.name.official}</span></p>
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

    <div class="country">
        <p class="name"><img src="${country.flags.svg}" width="64px" height="32px"><span>${country.name.official}</span></p>
        
        <p class="capital"><b>Capital</b>: <span>${country.capital}</span></p>  
        <p class="population"><b>Population</b>: <span>${country.population}</span></p>  
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





















