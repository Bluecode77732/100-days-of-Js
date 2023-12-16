const fromText = document.querySelector('.from-text');
const toText = document.querySelector('.to-text');
const exchangeIcon = document.querySelector('.exchange');
const selectTag = document.querySelectorAll("select");
const icons = document.querySelector('.row i');
const translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) => {
    for(let country_code in langs) {
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "de-DE" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${langs[country_code]}</option>`;
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
    // Need to check more of 'setAttribute' examples 
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        //What is this 'matches' meaning?
        data.matches.forEach(data => {
            if(data.id === 0) { //The 'id' from html data attribute?
                toText.value = data.translation; //Where is the 'translation' at in 'data'?
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });
}); 

icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        if(!fromText.value || !toText.value) return;
        if(target.classList.contains("fa-copy")) {
            if(target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let utterance;
            if(target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;    //the 'lang' property comes after when the 'SpeechSynthesisUtterance' been contained in.
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});
    