const loadCountries =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountries(data));
}

const displayCountries = countries =>{
   console.log(countries[1]);
   const allCountriesHTML = countries.map(country=>getCountryHTML(country));
//    console.log(allCountriesHTML);
 const container = document.getElementById('countries');
 container.innerHTML = allCountriesHTML.join('');
}
// option 1 destructuring
// const getCountryHTML = country =>{
//   // option 1
//   const {name,flags} = country;
//     return`
//       <div class="country">
//         <h2>${name.common}</h2>
//         <img src ="${flags.png}">

//       </div>
//     `
// }

// option 2 destructuring
// const getCountryHTML = ({name,flags}) =>{
//   
//   const {name,flags} = country;
//     return`
//       <div class="country">
//         <h2>${name.common}</h2>
//         <img src ="${flags.png}">

//       </div>
//     `
// }

const getCountryHTML = ({name,flags,capital,area,continents,population,translations
}) =>{
  
    return`
      <div class="country">
        <h2>${name.common}</h2>
        <h3>Capital:${capital}</h3>
        <p>Area:${area}</p>
        
        <p>continent:${continents}</p>
        <p>population:${population}</p>
        <p>translations:${translations.ara.official}</p>


        <img src ="${flags.png}">

      </div>
    `
}

loadCountries();