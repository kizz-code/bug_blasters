let utterance;
let voices = [];


function loadVoices() {
    voices = speechSynthesis.getVoices();
    if (!voices.length) {
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
        };
    }
}
loadVoices();

function getCurrentLanguage() {
    return document.documentElement.lang || 'en';
}

function getVoiceForLanguage(lang) {
    return (
        voices.find(v => v.lang.toLowerCase() === lang.toLowerCase()) ||
        voices.find(v => v.lang.toLowerCase().startsWith(lang.split('-')[0])) ||
        voices.find(v => v.name.toLowerCase().includes(lang.split('-')[0])) ||
        voices.find(v => v.lang.startsWith('en')) // fallback to English
    );
}

// function readWebsiteText() {
//     const elements = document.querySelectorAll('#readable');
//     let textContent = '';
//     elements.forEach(el => {
//         textContent += el.innerText + '\n';
//     });

//     const lang = getCurrentLanguage();
//     utterance = new SpeechSynthesisUtterance(textContent);
//     const voice = getVoiceForLanguage(lang);

//     if (voice) {
//         utterance.voice = voice;
//         console.log(`Using voice: ${voice.name} (${voice.lang})`);
//     } else {
//         console.warn("No matching voice found for language:", lang);
//     }

//     speechSynthesis.cancel();
//     speechSynthesis.speak(utterance);
// }

function readWebsiteText() {
    const lang = document.documentElement.lang || 'en';
    const elements = document.querySelectorAll('#readable');
    let textContent = '';
    elements.forEach(el => {
        textContent += el.innerText + '\n';
    });

    const allVoices = speechSynthesis.getVoices();

    console.log("Available voices:", allVoices.map(v => `${v.name} (${v.lang})`));

    
    const voice = allVoices.find(v =>
        v.lang.toLowerCase().includes(lang) ||
        v.name.toLowerCase().includes("hindi") ||
        v.lang.toLowerCase().startsWith(lang)
    );

    if (!voice) {
        alert("No Hindi voice found. Please check your browser or system settings.");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(textContent);
    utterance.voice = voice;

    console.log(`Selected voice: ${voice.name} (${voice.lang})`);
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}


function pauseSpeech() {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
    }
}

function resumeSpeech() {
    if (speechSynthesis.paused) {
        speechSynthesis.resume();
    }
}

function stopSpeech() {
    speechSynthesis.cancel();
}