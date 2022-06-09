console.log("HI!");

const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then(response => response.json())
    .then(data => console.log(data))
}

getCountryByName("Afghanistan");