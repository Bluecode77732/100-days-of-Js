const textarea = document.querySelector("textarea"),
      voiceList = document.querySelector("select"),
      speechBtn = document.querySelector("button");

let synth = speechSynthesis, isSpeakig = true;



function voices() {
    for(let voice of synth.getVoices()) {
        let selected = voice.name === "Google US English" ? "Selected" : "";
        let option = `<option value="${voice.name}" ${selected}> ${voice.name} (${voice.lang})</option>`
    }
}