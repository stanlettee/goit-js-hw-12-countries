import debounce from 'lodash.debounce';
const input = document.querySelector('#input')
const div = document.querySelector('#countryDiv')

let countries = []

fetch("https://restcountries.com/v3.1/all")
.then((res) => {return res.json()})
.then((data) => countries = data)

fetch("https://restcountries.com/v3.1/all")
.then((res) => {return res.json()})
.then((data) => console.log(data))

function countryFunction(array, inputValue){
    let countryName;
    let objectName;
    let html;
    let dependense;
    for (let i = 0; i < array.length; i++){
        if (array[i].name.common.toLowerCase() === inputValue.toLowerCase()){
            countryName = array[i].name.common
            objectName = array[i]
            if (objectName.independent === true){
                dependense = 'Independent country'
            } else {
                dependense = 'Dependent country'
            }
            const currencyCode = Object.keys(objectName.currencies || {})[0];
            const currency = objectName.currencies?.[currencyCode] || {};
            const languageValues = Object.values(objectName.languages);
            html =  `
                <h2 class='countryName'>Name of the country: ${countryName}</h2>
                <p>Oficial name: ${objectName.name.official}</p>
                <p>Area: ${objectName.area}km²</p>
                <p>Capital city: ${objectName.capital || 'No capital'}</p>
                <p>Continent: ${objectName.continents}</p>
                <p>Population: ${objectName.population} people</p>
                <p>Languages: ${languageValues}</p>
                <p>Borders: ${objectName.borders || 'No borders'}</p>
                <p>Dependense: ${dependense}</p>
                <div>
                    <p>Currency code: ${currencyCode}</p>
                    <p>Currency symbol: ${currency.symbol || 'N/A'}</p>
                    <p>Currency name: ${currency.name || 'N/A'}</p>
                </div>
                <img src='${objectName.flags.png}' alt="Flag of ${countryName}">
                <p>Car side: ${objectName.car.side}</p>
                <p>Region: ${objectName.region}</p>
                <p>Subregion: ${objectName.subregion}</p>
                <p>Timezones: ${objectName.timezones}</p>
                <p>Status: ${objectName.status}</p>
                <p>Start of a week: ${objectName.startOfWeek}</p>
                <p class='maps'>${countryName} on a map: ${objectName.maps.googleMaps}</p>`
                break
        }     
    }
    return html;
}

input.addEventListener('input', debounce((e) => {
    const inputText = e.target.value.trim()
    if (inputText.length > 0){
        if (countryFunction(countries, inputText) === undefined){
            div.innerHTML = 'Country that you entered is undefined. Try again'
        } else {
            div.innerHTML = countryFunction(countries, inputText)
        }
    } else {
        div.innerHTML = 'Enter a country';
    }
}, 500))