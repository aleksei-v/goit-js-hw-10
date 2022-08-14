import getRefs from './get-refs';
const refs = getRefs();

export default renders = {
    renderMarkupList(list) {
        const markup = list
            .map(
                ({
                    flags: { svg },
                    name: { official },
                }) => `<div class="fetched-country">
                <div class="fetched-country__wrapper">
            <img class="fetched-country__image" src="${svg}" alt="${official} width="20px" height="20px">
            <h2 class="fetched-country__name">${official}</h2></div>
            </div>`)
            .join('');
        return (refs.countryList.innerHTML = markup);
    },
    renderCountryInfo(list) {
        const markup = list
            .map(
                ({
                    flags: { svg },
                    name: { official },
                    capital,
                    population,
                    languages,
                }) => `<div class="fetched-country">
        <div class="fetched-country__wrapper">
        <img class="fetched-country__image" src="${svg}" alt="${official} width="20px" height="20px">
        <h2 class="fetched-country__name">${official}</h2>
        </div>
        <p class="fetched-country__capital">Capital: ${capital}</p>
        <p class="fetched-country__population">Population: ${population}</p>
        <p class="country-info___text">Languages: ${Object.values(languages)}</p></li>
        </div>`)
            .join('');
        return (refs.countryList.innerHTML = markup);
    },
}