const n=document.querySelector("#search-box"),e=document.querySelector(".country-list"),t=document.querySelector(".country-info");let o="";n.addEventListener("input",(function(){o=n.value,fetch(`https://restcountries.com/v3.1/name/${o}`).then((n=>{if(!n.ok)throw new Error(n.status);return n.json()})).then((n=>{n.length>=10?console.log("Za dużo wyników"):n.length>=2&&n.length<10?function(n){e.innerHTML="",t.innerHTML="";const o=n.map((n=>`<li>\n            <p><b>Country</b>: ${n.name.official}</p>\n            <p><b>Capital</b>: ${n.capital}</p>\n            <p><b>Population</b>: ${n.population}</p>\n            \n            <p><img src=${n.flags.svg} width = 50px height = 40px></p>\n            <p><b>Languages </b>: ${n.languages}</p>\n        </li>`)).join("");e.insertAdjacentHTML("beforebegin",o)}(n):1===n.length&&function(n){e.innerHTML="",t.innerHTML="";const o=n.map((n=>`<li>\n          <p><b>Country</b>: ${n.name.official}</p>\n          <p><b>Capital</b>: ${n.capital}</p>\n          <p><b>Population</b>: ${n.population}</p>\n          <p><b>Flag</b>: ${n.flags.svg}</p>\n          <p><b>Languages </b>: ${n.languages}</p>\n      </li>`)).join("");e.insertAdjacentHTML("beforebegin",o)}(n)})).catch((n=>{console.error("Błąd podczas pobierania danych:",n)}))}));
//# sourceMappingURL=index.c184b221.js.map
