!function(){var n=document.querySelector("#search-box"),t=document.querySelector(".country-list"),o=document.querySelector(".country-info"),c="",e="https://restcountries.com/v3.1";n.addEventListener("input",(function(){var a;c=n.value,a="".concat(e,"/name/").concat(c),fetch(a).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){!function(n){t.innerHTML="",o.innerHTML="";var c=n.map((function(n){return"<li>\n            <p><b>Country</b>: ".concat(n.name.official,"</p>\n            <p><b>Capital</b>: ").concat(n.capital,"</p>\n            <p><b>Population</b>: ").concat(n.population,"</p>\n            <p><b>Flag</b>: ").concat(n.flags.svg,"</p>\n            <p><b>Languages </b>: ").concat(n.languages,"</p>\n        </li>")})).join("");t.insertAdjacentHTML("beforebegin",c)}(n)})).catch((function(n){console.error("Błąd podczas pobierania danych:",n)}))}))}();
//# sourceMappingURL=index.59030000.js.map
