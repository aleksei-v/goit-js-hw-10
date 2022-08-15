import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import API from './fetchCountries';
import getRefs from './get-refs';
import { renderMarkupList, renderCountryInfo } from './renders';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

function searchCountryByName() {
    const countryName = refs.searchBox.value.trim();

    if (countryName === '') {
        clearMarkup();
        return;
    }
    API.fetchCountries(countryName)
        .then(showCountryOutput)
        .catch(() => {
            clearMarkup();
            Notify.failure("Oops, there is no country with that name");
        });
}


refs.searchBox.addEventListener('input', debounce(searchCountryByName, DEBOUNCE_DELAY));

function clearMarkup() {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
}
function showCountryOutput(countries) {
    if (countries.length > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.");
        return;
    }
    if (!countries.length) {
        clearMarkup();
    }
    if (countries.length === 1) {
        renderCountryInfo(countries);
    } else {
        renderMarkupList(countries);
    }
}

