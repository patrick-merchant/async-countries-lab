console.log("HI!");

const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
        const item = data[0];
        printCountry(item);
    })
}

const printCountry = (item) => {
    const newCountry = document.createElement("p");
    const br = document.createElement("br")

    const countryName = document.createTextNode(item.name);
    const countryPopulation = document.createTextNode(item.population);

    newCountry.appendChild(countryName);
    newCountry.appendChild(br);
    newCountry.appendChild(countryPopulation);

    const currentSect = document.getElementById("sect");
    currentSect.appendChild(newCountry);
}

const getAllCountries = () => {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            fetch(`https://restcountries.com/v2/all`)
            .then(response => response.json())
            .then(data => {
            data.forEach(printCountry);
            document.getElementById("progress").replaceWith("Data loaded!");
            resolve();
        })
        }, 2000)
    })
}

document.getElementById("btn").onclick = function() {
    document.getElementById("sect").innerHTML = "";
    getCountryByName(document.getElementById("searchTerm").value);
};






async function progress() {
    await document.getElementById("progress").append("Data loading...")
    await window.addEventListener("load", getAllCountries)
    await getCountryByName("Afghanistan")
    // await document.getElementById("progress").replaceWith("Data loaded!");
}

progress();