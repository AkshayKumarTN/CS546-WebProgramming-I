/* 
All of the functionality will be done in this client-side JS file.  
You will make client - side AJAX requests to the API and use jQuery to target and create elements on the page.

1. Page load: When the page loads, you will query the Marvel to get the list of 100 characters (Look up using the limit url parameter, by default, the character list returns 20 characters, you would include a limit URL parameter to return 100 characters from the end point and not the default of 20) using an AJAX request.  Once the AJAX request returns the data, you will then create list items of links for each character that is returned using jQuery or the DOM API. The link text will be the name of the Character, and the href attribute will be set to the url for that Character from the Marvel API.  For example, Spider-man's ID is 1011054, So the URL, the value would be: https://gateway.marvel.com:443/v1/public/characters/1011054 Links to an external site.  For the link, you will need to call a function on the click event of the link (do not forget to preventDefault() for the default behavior for the link as the default behavior of a link is that it wants to load something (similar to how the default behavior of a form submission is to send that form data somewhere)

You will then append each list item to the characterList UL element and then show the characterList element (make sure you hide the characterDetails element).  

Endpoint to be used: https://gateway.marvel.com/v1/public/characters Links to an external site. (Remember, you need to use the limit URL parameter to return 100 characters from the API by default)

2. Search Form Submission: If there is no value for the search_term input when the form is submitted, you should not continue and instead should inform them of an error somehow. (don't forget to take into account if they just submit the form with a bunch of spaces as the value!)  If there is a value, you will first empty the list item elements in the characterList element (because there will be elements from the initial characterList still there, they are just hidden),  then query the API for that search_term using an AJAX request. Once the AJAX request returns the data, you will then create list items of links for each Character that is returned for the search term using jQuery or the DOM API.  The link text will be the name of the Character, and the href attribute will be set to the url for that Character from the Marvel API.  For example, Spider-man's ID is 1011054, So the URL, the value would be: https://gateway.marvel.com:443/v1/public/characters/1011054 Links to an external site.  For the link, you will need to call a function on the click event of the link (do not forget to preventDefault() for the default behavior for the link as the default behavior of a link is that it wants to load something (similar to how the default behavior of a form submission is to send that form data somewhere)

You will then append each list item to the characterList UL element and then show the characterList element (make sure you hide the characterDetails element).  

Endpoint to be used: https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=SEARCH_TERM_HERE Links to an external site. 

3.  Link Clicked: For the link, you will need to call a function on the click event of the link and not the default link behavior (do not forget to use preventDefault()).    When the link to a character is clicked, it will hide the characterList element, it will then empty the characterDetails  element (just in case there was Character data previously loaded into the characterDetails element). It will then make an AJAX request to the URL and fetch the data for that Character (that was the href in your link).  You will parse through the Character data returned from the AJAX request. You will create the following elements using jQuery or the DOM API:  An h1 with the character name,  an img which the src is set to the value read from thumbnail.path in the data which is a URL to an image for the character.  NOTE: The path in the data is NOT the full image path. You will need to concatenate "/portrait_uncanny.jpg" to the end of the image path in the data (see HTML example below). Please see the documentation on images.  You will have a p element that contains the character  description, a h2 that's content says "Comics"  and a ul  for the list of comics. You only need to display the comic name  as the list items: li  You will then show the characterDetails  element.  

NOTE: Not all Characters have ALL data displayed on the characterDetails  element, which will cause your application to not work correctly when a character link is clicked if it doesn't have all the needed data needed for the characterDetails element.  You will be required to check each field needed for the characaterDetails element.  If there is no value for a field, you will show "N/A" instead of that field's value on the characterDetails element.  

Endpoint to be used: https://gateway.marvel.com:443/v1/public/characters/:id Links to an external site.  (this is read from the href attribute of the link)


*/


function buildMarvelAPIUrl(marvelParameter, marvelCharacterId) {
    const publickey = '122c8b876052c4846a5454f62350c9d5';
    const privatekey = '3a02a124e2ba2ba99adc8b72a28201af1533843b';
    const ts = new Date().getTime();
    const stringToHash = ts + privatekey + publickey;
    const hash = CryptoJS.MD5(stringToHash).toString();;
    if (marvelParameter) {
        const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
        return baseUrl + '?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash + '&nameStartsWith=' + marvelParameter;
    }
    else if (marvelCharacterId) {
        const baseUrl = 'https://gateway.marvel.com/v1/public/characters/';
        return baseUrl + marvelCharacterId + '?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
    }
    else {
        const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
        return baseUrl + '?limit=100&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
    }
}


function showHomeLink(show) {
    if (show) {
        $('#homeLink').show();
    } else {
        $('#homeLink').hide();
    }
}
function showCharacterSearchForm(show) {
    $('#searchForm').prop('hidden', !show);
}

function GetAllCharacters() {
    showCharacterSearchForm(true);
    showHomeLink(false);
    const marvelAPI = buildMarvelAPIUrl(null, null);
    fetch(`${marvelAPI}`)
        .then(res => res.json())
        .then(data => {
            $('#characterList').empty().prop('hidden', false);
            $('#characterDetails').prop('hidden', true);

            data.data.results.forEach(char => {
                const li = $('<li>');
                const a = $('<a>').attr('href', '#').text(char.name).click(() => {
                    GetCharacterById(char.id);
                });
                li.append(a);
                $('#characterList').append(li);
            });
        });
}

function GetCharacterById(marvelCharacterId) {
    const marvelAPI = buildMarvelAPIUrl(null, marvelCharacterId);
    fetch(`${marvelAPI}`)
        .then(res => res.json())
        .then(data => {
            const char = data.data.results[0];
            let comicsList = '';
            char.comics.items.forEach(comic => {
                comicsList += `<li>${comic.name}</li>`;
            });
            $('#characterDetails').html(`
                <h1>${char.name}</h1>
                <img src="${char.thumbnail.path}/portrait_uncanny.jpg" alt="${char.name}">
                <p>${char.description || 'No description available.'}</p>
                <h2>Comics</h2>
                <ul>
                    ${comicsList}
                </ul>
            `).prop('hidden', false);

            $('#characterList').prop('hidden', true);
            showHomeLink(true);
            showCharacterSearchForm(false);
        });
}


function inputStringCheck(str, fieldName) {
    if (str == null || str === 'undefined') return `Error: ${fieldName} field need to have valid values)`;
    if (typeof str !== 'string') return `Error: ${fieldName} Input type is not a String.`;
    if (!str.trim().length > 0) return `Error: ${fieldName} Input String is Empty`;
    if (str.trim().includes('  ')) return `Error: ${fieldName} Input is Invalid - multiple consecutive spaces are not allowed.`;
    return null;
}

function searchCharactersByName() {
    const charactersName = $('#search_term').val().trim();
    let errorCheck = inputStringCheck(charactersName, 'character name');
    if (errorCheck != null) {
        $('#error').text(errorCheck).show();
        return;
    }
    else {
        $('#error').text('').hide();
        const marvelAPI = buildMarvelAPIUrl(charactersName, null);
        fetch(`${marvelAPI}`)
            .then(res => res.json())
            .then(data => {
                $('#characterList').empty().prop('hidden', false);
                $('#characterDetails').prop('hidden', true);
                showHomeLink(true);
                if (data.data.count === 0) {
                    $('#characterList').append('<li>No results found.</li>');
                } else {
                    data.data.results.forEach(char => {
                        const li = $('<li>');
                        const a = $('<a>').attr('href', '#').text(char.name).click(() => {
                            GetCharacterById(char.id);
                        });
                        li.append(a);
                        $('#characterList').append(li);
                    });
                }
            });
    }
}

$(document).ready(() => {
    GetAllCharacters();
    $('#homeLink').click((e) => {
        e.preventDefault();
        location.reload();
    });
    $('#searchForm').submit((e) => {
        e.preventDefault();
        searchCharactersByName();
    });
});