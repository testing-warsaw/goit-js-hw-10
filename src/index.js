
const searchBox = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")



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
        renderCountries(data)
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych:", error)

      })
  }

  function renderCountries(countries) {
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