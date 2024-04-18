const wrapper = document.querySelector(".wrapper");
const form = document.querySelector("form");
const fileInp = document.querySelector("input");
const infoText = document.querySelector("p");
const closeBtn = document.querySelector(".close");
const copyBtn = document.querySelector(".copy");

// Fetch Data from the Application Program Interface

function fetchReq(file, formData) {
    infoText.innerText = "Scanning QR Code...";
    fetch("http://api.qrserver.com/v1/create-qr-code/", {
        method: "POST",
        body: formData,
    })
        .then(res => res.json())
        .then(result => {
            result = result[0].symbol[0].data;
            infoText.innerText = result
                ? "Upload QR Code To Scan"
                : " Couldn't Scan QR Code";
            if (!result) 
            return;

            document.querySelector("textarea").innerText = result;
            form.querySelector("img").src = URL.createObjectURL(file);
            wrapper.classList.add("active");
        })
        .catch(() => {
            infoText.innerText = "Couldn't Scan QR Code...";
        });
}

// Send QR Code file with Request To API

fileInp.addEventListener("change", async e => {
    let file = e.target.files[0];
    if(!file) return;
    let formData = new FormData();
    formData.append('file', file);
    fetchReq(file, formData)
});

// Copy text to clipboard

copyBtn.addEventListener("click", () => {
    let txt = document.querySelector("textarea").textContent;
    navigator.clipboard.writeText(txt);
});

// When user click on 'form' perform 'fileInp' Eventlistener function

form.addEventListener("click", () => {
    fileInp.click()
});

closeBtn.addEventListener("click", () => wrapper.classList.remove("active"));
