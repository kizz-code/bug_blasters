const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.continuous = false;
recognition.lang = 'en-US'; // Default language
recognition.interimResults = false;
recognition.maxAlternatives = 1;

let speechButton;
let speechOutput;
let isListening = false;
let micPermissionGranted = false;


document.addEventListener('DOMContentLoaded', function() {
    setupSpeechInterface();
    setupEventListeners();
    updateLanguageForSpeech();
    requestMicrophonePermission();
});

// Request microphone 
function requestMicrophonePermission() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
           
            stream.getTracks().forEach(track => track.stop());
            micPermissionGranted = true;
            
            speechButton.classList.add('permission-granted');
            speechOutput.innerHTML = '<p>Voice assistant ready. Click the button and speak.</p>';
        })
        .catch(function(err) {
            console.error('Microphone permission denied:', err);
            speechOutput.innerHTML = '<p class="error">Microphone access denied. Voice assistant won\'t work.</p>';
        });
}


function setupSpeechInterface() {

    const speechContainer = document.createElement('div');
    speechContainer.className = 'speech-container';
    
    // button for speech input
    speechButton = document.createElement('button');
    speechButton.id = 'speech-btn';
    speechButton.innerHTML = '<img src="mic.png" alt="Microphone" width="20"> Voice Assistant';
    speechButton.className = 'speech-button';
    
    // displaying transcribed text
    speechOutput = document.createElement('div');
    speechOutput.id = 'speech-output';
    speechOutput.className = 'speech-output';
    speechOutput.innerHTML = '<p>Initializing voice assistant...</p>';

    speechContainer.appendChild(speechButton);
    speechContainer.appendChild(speechOutput);

    const navigationContainer = document.querySelector('.navigation-container');
    if (navigationContainer) {
        navigationContainer.parentNode.insertBefore(speechContainer, navigationContainer.nextSibling);
    }
}


function setupEventListeners() {

    speechButton.addEventListener('click', toggleSpeechRecognition);
    // language change
    const languageItems = document.querySelectorAll('.language-dropdown li');
    languageItems.forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            document.querySelector('.search-container').setAttribute('data-active-lang', lang);
            updateLanguageForSpeech();
        });
    });
    
    recognition.onresult = handleSpeechResult;

    recognition.onend = handleSpeechEnd;
    
    recognition.onerror = handleSpeechError;
}

function toggleSpeechRecognition() {
    if (!micPermissionGranted) {
        requestMicrophonePermission();
        return;
    }
    
    if (isListening) {
        recognition.stop();
        isListening = false;
        speechButton.innerHTML = '<img src="mic.png" alt="Microphone" width="20"> Voice Assistant';
        speechButton.classList.remove('listening');
    } else {
        recognition.start();
        isListening = true;
        speechButton.innerHTML = '<img src="mic-active.png" alt="Microphone Active" width="20"> Listening...';
        speechButton.classList.add('listening');
        speechOutput.innerHTML = '<p>Listening...</p>';
    }
}


function updateLanguageForSpeech() {ge
    const activeLanguage = document.querySelector('.search-container').getAttribute('data-active-lang') || 'en';
    
  
    const languageMap = {
        'en': 'en-US',    
        'hi': 'hi-IN',    
        'mr': 'mr-IN',    
        'gu': 'gu-IN'     
    };

    recognition.lang = languageMap[activeLanguage] || 'en-US';
    const langDisplay = {
        'en': 'English',
        'hi': 'हिन्दी',
        'mr': 'मराठी',
        'gu': 'ગુજરાતી'
    };
    
    speechOutput.innerHTML = `<p>${langDisplay[activeLanguage] || 'English'} voice assistant ready.</p>`;
}

function handleSpeechResult(event) {
    const transcript = event.results[0][0].transcript;
    const confidence = event.results[0][0].confidence;
    
    // Get current language
    const activeLanguage = document.querySelector('.search-container').getAttribute('data-active-lang') || 'en';
    
    if (activeLanguage === 'hi') {
        speechOutput.innerHTML = `<p>आपने कहा: "${transcript}"</p>`;
        speechOutput.style.fontFamily = "'Poppins', 'Noto Sans Devanagari', sans-serif";
    } else if (activeLanguage === 'mr') {
        speechOutput.innerHTML = `<p>आपण म्हणालात: "${transcript}"</p>`;
        speechOutput.style.fontFamily = "'Poppins', 'Noto Sans Devanagari', sans-serif";
    } else if (activeLanguage === 'gu') {
        speechOutput.innerHTML = `<p>તમે કહ્યું: "${transcript}"</p>`;
        speechOutput.style.fontFamily = "'Poppins', 'Noto Sans Gujarati', sans-serif";
    } else {
        // Default to English
        speechOutput.innerHTML = `<p>You said: "${transcript}"</p>`;
        speechOutput.style.fontFamily = "'Poppins', sans-serif";
    }
    
    processVoiceCommand(transcript, activeLanguage);
}


function processVoiceCommand(command, language) {
 
    const commandPatterns = {
        'en': {
            crop: ['crop recommendation', 'recommend crop', 'which crop', 'suggest crop'],
            pest: ['pest', 'disease', 'infection', 'plant disease'],
            login: ['login', 'sign in', 'log in'],
            signup: ['sign up', 'register', 'create account'],
            home: ['home', 'homepage', 'main page'],
            dashboard: ['dashboard', 'my account', 'my dashboard']
        },
        'hi': {
            crop: ['फसल की सिफारिश', 'फसल सुझाएं', 'कौन सी फसल', 'फसल बताएं'],
            pest: ['कीट', 'बीमारी', 'रोग', 'पौधे की बीमारी', 'फसल की बीमारी'],
            login: ['लॉगिन', 'साइन इन', 'प्रवेश'],
            signup: ['साइन अप', 'रजिस्टर', 'पंजीकरण', 'खाता बनाएं'],
            home: ['होम', 'मुख्य पृष्ठ', 'होम पेज'],
            dashboard: ['डैशबोर्ड', 'मेरा खाता', 'मेरा डैशबोर्ड']
        },
        'mr': {
            crop: ['पिक शिफारस', 'पीक सुचवा', 'कोणते पीक', 'पीक सांगा'],
            pest: ['कीटक', 'रोग', 'पीक रोग', 'वनस्पती रोग'],
            login: ['लॉगिन', 'साइन इन', 'प्रवेश करा'],
            signup: ['साइन अप', 'नोंदणी करा', 'खाते तयार करा'],
            home: ['होम', 'मुख्य पृष्ठ', 'होम पेज'],
            dashboard: ['डॅशबोर्ड', 'माझे खाते', 'माझा डॅशबोर्ड']
        },
        'gu': {
            crop: ['પાક ભલામણ', 'પાક સૂચવો', 'કયો પાક', 'પાક જણાવો'],
            pest: ['જીવાત', 'રોગ', 'પાક રોગ', 'છોડ રોગ'],
            login: ['લોગિન', 'સાઇન ઇન', 'પ્રવેશ'],
            signup: ['સાઇન અપ', 'રજિસ્ટર', 'ખાતું બનાવો'],
            home: ['હોમ', 'મુખ્ય પૃષ્ઠ', 'હોમ પેજ'],
            dashboard: ['ડેશબોર્ડ', 'મારું ખાતું', 'મારો ડેશબોર્ડ']
        }
    };
    
    command = command.toLowerCase();
    const patterns = commandPatterns[language] || commandPatterns['en'];
    let commandType = null;
    
    for (const [type, patternList] of Object.entries(patterns)) {
        if (patternList.some(pattern => command.includes(pattern))) {
            commandType = type;
            break;
        }
    }
    
    const responses = {
        'en': {
            crop: 'Navigating to crop recommendations...',
            pest: 'Navigating to pest detection...',
            login: 'Opening login form...',
            signup: 'Opening signup form...',
            home: 'Navigating to home page...',
            dashboard: 'Navigating to dashboard...',
            unknown: 'Processing your query. How can I assist you with farming?'
        },
        'hi': {
            crop: 'फसल अनुशंसा पृष्ठ पर जा रहे हैं...',
            pest: 'कीट पहचान पृष्ठ पर जा रहे हैं...',
            login: 'लॉगिन फॉर्म खोल रहे हैं...',
            signup: 'साइन अप फॉर्म खोल रहे हैं...',
            home: 'मुख्य पृष्ठ पर जा रहे हैं...',
            dashboard: 'डैशबोर्ड पर जा रहे हैं...',
            unknown: 'आपके प्रश्न पर कार्य कर रहे हैं। कृषि में मैं आपकी कैसे सहायता कर सकता हूँ?'
        },
        'mr': {
            crop: 'पीक शिफारस पृष्ठावर नेव्हिगेट करत आहे...',
            pest: 'कीटक ओळख पृष्ठावर नेव्हिगेट करत आहे...',
            login: 'लॉगिन फॉर्म उघडत आहे...',
            signup: 'साइन अप फॉर्म उघडत आहे...',
            home: 'मुख्य पृष्ठावर नेव्हिगेट करत आहे...',
            dashboard: 'डॅशबोर्डवर नेव्हिगेट करत आहे...',
            unknown: 'आपल्या प्रश्नावर प्रक्रिया करत आहे. शेतीमध्ये मी आपली कशी मदत करू शकतो?'
        },
        'gu': {
            crop: 'પાક ભલામણ પૃષ્ઠ પર નેવિગેટ કરી રહ્યાં છીએ...',
            pest: 'જીવાત ઓળખ પૃષ્ઠ પર નેવિગેટ કરી રહ્યાં છીએ...',
            login: 'લોગિન ફોર્મ ખોલી રહ્યાં છીએ...',
            signup: 'સાઇન અપ ફોર્મ ખોલી રહ્યાં છીએ...',
            home: 'મુખ્ય પૃષ્ઠ પર નેવિગેટ કરી રહ્યાં છીએ...',
            dashboard: 'ડેશબોર્ડ પર નેવિગેટ કરી રહ્યાં છીએ...',
            unknown: 'તમારા પ્રશ્ન પર પ્રક્રિયા કરી રહ્યાં છીએ. ખેતીમાં હું તમને કેવી રીતે મદદ કરી શકું?'
        }
    };
    
    // language-specific responses ke liye,wapas to English
    const langResponses = responses[language] || responses['en'];
    
    if (commandType === 'crop') {
        window.location.href = 'crop_recommendation/templates/index.html';
    } 
    else if (commandType === 'pest') {
        window.location.href = 'crop_recommendation/templates/index.html';
    }
    else if (commandType === 'login') {
        document.getElementById('login-btn').click();
    }
    else if (commandType === 'signup') {
        document.getElementById('signup-btn').click();
    }
    else if (commandType === 'home') {
        appendResponse(langResponses.home);
    }
    else if (commandType === 'dashboard') {
        appendResponse(langResponses.dashboard);
    }
    else {
        appendResponse(langResponses.unknown);
    }
}

function appendResponse(message) {
    const currentContent = speechOutput.innerHTML;
    speechOutput.innerHTML = `${currentContent}<p>${message}</p>`;
}

// speech recognition ke events ke liye
function handleSpeechEnd() {
    isListening = false;
    speechButton.innerHTML = '<img src="mic.png" alt="Microphone" width="20"> Voice Assistant';
    speechButton.classList.remove('listening');
}

// for speech recognition errors
function handleSpeechError(event) {
    let errorMessage = '';
    switch(event.error) {
        case 'no-speech':
            errorMessage = 'No speech was detected. Please try again.';
            break;
        case 'aborted':
            errorMessage = 'Speech recognition was aborted.';
            break;
        case 'audio-capture':
            errorMessage = 'No microphone was found. Ensure that a microphone is installed.';
            break;
        case 'not-allowed':
            errorMessage = 'Microphone permission is needed for the voice assistant.';
            micPermissionGranted = false;
            break;
        case 'service-not-allowed':
            errorMessage = 'Speech recognition service not allowed.';
            break;
        default:
            errorMessage = 'An error occurred with the speech recognition.';
            break;
    }
    
    speechOutput.innerHTML = `<p class="error">${errorMessage}</p>`;
    isListening = false;
    speechButton.innerHTML = '<img src="mic.png" alt="Microphone" width="20"> Voice Assistant';
    speechButton.classList.remove('listening');
}

const speechStyle = document.createElement('style');
speechStyle.textContent = `
/* Import Google Fonts for Indian languages */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600&family=Noto+Sans+Gujarati:wght@400;500;600&display=swap');

.speech-container {
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    background: #f9f9f9;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.speech-button {
    background: #4070f4;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.speech-button:hover {
    background: #265df2;
}

.speech-button.permission-granted::after {
    content: "✓";
    margin-left: 5px;
    color: #4CAF50;
}

.speech-button.listening {
    background: #f44242;
    animation: pulse 1.5s infinite;
}

.speech-output {
    margin-top: 15px;
    padding: 10px;
    background: white;
    border-radius: 5px;
    min-height: 50px;
    border: 1px solid #e0e0e0;
    line-height: 1.4;
}

.speech-output p {
    margin-bottom: 8px;
}

.speech-output .error {
    color: #f44336;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(244, 66, 66, 0.7);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(244, 66, 66, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(244, 66, 66, 0);
    }
}

/* Make it responsive */
@media (max-width: 768px) {
    .speech-container {
        max-width: 90%;
        margin: 15px auto;
    }
}
`;
document.head.appendChild(speechStyle);