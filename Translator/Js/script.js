const fromText = document.querySelector('.from-text');
const toText = document.querySelector('.to-text');
const exchangeIcon = document.querySelector('.exchange');
const selectTag = document.querySelectorAll("select");
const icons = document.querySelector('.row i');
const translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) => {
    for(let country_code in countries) {
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "de-DE" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

/* I don't understand this logic */
exchangeIcon.addEventListener("click", () => {
    let tempText = fromText.value, 
        tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
    if(!text) return;
    /* Need more 'setAttribute' examples */
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        //What is this matches meaning?
        data.matches.forEach(data => {
            if(data.id === 0) {
                toText.value = data.translationl;
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });
}); 

