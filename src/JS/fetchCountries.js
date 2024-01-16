
const baseUrl = "https://restcountries.com/v3.1/name/"
const fields = "?fields=name,capital,population,flag,languages"

export function fetchCountries(name) {
    
  
    return fetch(`${baseUrl}${name}${fields}`)
    .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      });
  }





















