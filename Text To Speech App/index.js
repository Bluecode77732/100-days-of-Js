const textarea = document.querySelector("textarea"),
      voiceList = document.querySelector("select"),
      speechBtn = document.querySelector("button");

let synth = speechSynthesis, isSpeakig = true;

voices();

function voices() {
    for(let voice of synth.getVoices()) {
        let selected = voice.name === "Google US English" ? "Selected" : "";
        let option = `<option value="${voice.name}" ${selected}> ${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text) 
    for(let voice of synth.getVoices()) {
        if(voice.name === voiceList.value) {
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}

speechBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(textarea.value !== "") {
        //Cheecks if not speaking, Speak Textarea Text
        if(!synth.speaking) {
            textToSpeech(textarea.value);
        }
        //If text was long, Add Resume and Pause Functions.
        if(textarea.value.length > 80) {
            setInterval(() => {
                if(!synth.speaking && !isSpeakig) {
                    isSpeakig = true;
                    speechBtn.innerText = "Convert To Speech";
                } else { }
            }, 500);
            if(isSpeakig) {
                synth.resume();
                isSpeakig = false;
                speechBtn.innerText = "Pause Speech";
            } else {
                synth.pause();
                isSpeakig = true;
                speechBtn.innerText = "Resume Speech";
            }
        } else {
            speechBtn.innerText = "Convert To Speech";
        }
    }
});
