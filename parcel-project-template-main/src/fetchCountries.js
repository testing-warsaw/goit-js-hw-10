
// const searchBox = document.querySelector("#search-box")
// const countryList = document.querySelector(".country-list")
// const countryInfo = document.querySelector(".country-info")

// const baseUrl = "https://restcountries.com"

// const countryName = searchBox.addEventListener("input", function(readInput){
//     console.log(readInput.target.value)
//     fetchCountries();
// })


// function fetchCountries(countryName) {
//     return fetch(`${baseUrl}/v3.1/name/${countryName}`)
//     // return fetch(`${baseUrlTest}`)
//     .then(
//       (response) => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       }
//     );
//   }

//   function renderCountries(countryName) {
//     const marcup = countries.map((country) => {
//         return `<li>
//             <p><b>Name</b>: ${country.official}</p>
//             <p><b>Capital</b>: ${country.capital}</p>
//             <p><b>Population</b>: ${country.population}</p>
//             <p><b>Flag</b>: ${country.flags.svg}</p>
//             <p><b>Languages </b>: ${country.languages}</p>
//         </li>`
//     }).join("")
//     countryList.insertAdjacentHTML("beforebegin", marcup)
// }