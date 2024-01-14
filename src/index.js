
const searchBox = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

// Gdy Rest API da poprawną odpowiedć przenieść logike zapytań do osobnego pliku i wykonac export

let findCountry = ""
const baseUrl = "https://restcountries.com/v3.1"

searchBox.addEventListener("input", function() {
  findCountry = searchBox.value
  fetchCountries(findCountry)
})

function fetchCountries() {
  
  const apiUrl = `${baseUrl}/name/${findCountry}`

    fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json()
      })
      .then((data) => {

        if(data.length >= 10){
          console.log("Za dużo wyników");
          // alert("Too many matches found. Please enter a more specific name.")

        } else if ( data.length >= 2 && data.length < 10) {
          renderCountriesList(data)

        } else if (data.length === 1) {
          renderCountriesInfo(data)
        }


      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych:", error)

      })
  }

  function renderCountriesList(countries) {
    countryList.innerHTML = ""
    countryInfo.innerHTML = ""
    
    const marcup = countries.map((country) => {
        return `<li>
            <p><b>Country</b>: ${country.name.official}</p>
            <p><b>Capital</b>: ${country.capital}</p>
            <p><b>Population</b>: ${country.population}</p>
            <p><b>Flag</b>: ${country.flags.svg}</p>
            <p><img src=${country.flags.svg} width = 50px height = 50px></p>
            <p><b>Languages </b>: ${country.languages}</p>
        </li>`
    }).join("")
    countryList.insertAdjacentHTML("beforebegin", marcup)
}

function renderCountriesInfo(countries) {
  countryList.innerHTML = ""
  countryInfo.innerHTML = ""
  
  const marcup = countries.map((country) => {
      return `<li>
          <p><b>Country</b>: ${country.name.official}</p>
          <p><b>Capital</b>: ${country.capital}</p>
          <p><b>Population</b>: ${country.population}</p>
          <p><b>Flag</b>: ${country.flags.svg}</p>
          <p><b>Languages </b>: ${country.languages}</p>
      </li>`
  }).join("")
  countryList.insertAdjacentHTML("beforebegin", marcup)
}