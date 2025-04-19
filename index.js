document.querySelectorAll('.language-dropdown li').forEach(item => {
    item.addEventListener('click', function () {
        const selectedLang = this.getAttribute('data-lang');
        document.documentElement.lang = selectedLang; // update HTML lang attribute

        
        console.log("Language switched to:", selectedLang);
    });
});


document.addEventListener('DOMContentLoaded', function() {
        // Language ko translate kerne ke liye 
        const translations = {
            en: {
                navHome: 'Home',
                navDashboard: 'Dashboard',
                navContact: 'Contact',
                welcomeText1: 'Namaste, welcome to FarmMitra',
                welcomeText2: 'Empowering Farmers with AI-Driven Insights – Smart Solutions for a Sustainable Future',
                tryNow: 'Try Now',
                featuresHeading: 'WHAT WE OFFER',
                featuresSubheading: 'Being a part of KisanMitra, this is what you get from us:',
                features: [
                    {
                        title: 'Voice-based Assistance',
                        description: 'Get expert farming advice through easy voice commands.'
                    },
                    {
                        title: 'Pest Management',
                        description: 'Detect and prevent crop diseases with AI-powered analysis.'
                    },
                    {
                        title: 'IOT Sensor',
                        description: 'Monitor soil, weather, and crop health in real time.'
                    },
                    {
                        title: 'Market & schemes',
                        description: 'Stay updated on government schemes and find the best market rates.'
                    },
                    {
                        title: 'Community Forum',
                        description: 'Connect with fellow farmers to share knowledge and experiences.'
                    },
                    {
                        title: 'Resource Library',
                        description: 'Explore a vast collection of guides, tutorials, and best practices.'
                    }
                ],
                testimonialsHeading: 'What Farmers Say',
                testimonials: [
                    'KisanMitra has transformed my farming approach with its AI-driven insights.',
                    'The voice assistant helps me get information instantly, even with limited literacy.',
                    'Market rates and government scheme information is a game-changer for me.'
                ],
                loginButtons: ['Login', 'Sign Up'],
                signupForm: {
                    fullName: 'Full Name',
                    phoneNumber: 'Phone Number',
                    password: 'Password',
                    confirmPassword: 'Confirm Password'
                },
                howItWorksHeading: 'How KisanMitra Works',
                howItWorksSteps: [
                    {
                        title: 'Register',
                        description: 'Create your free account and customize your farm profile'
                    },
                    {
                        title: 'Connect',
                        description: 'Link your farm details and preferred languages'
                    },
                    {
                        title: 'Explore',
                        description: 'Access AI-powered insights, voice assistance, and community resources'
                    },
                    {
                        title: 'Grow',
                        description: 'Implement recommendations and track your farm\'s progress'
                    }
                ],
                ctaHeading: 'Ready to Transform Your Farming Journey?',
                ctaSubheading: 'Join thousands of farmers leveraging AI to boost productivity and sustainability',
                ctaButtons: ['Start Free Trial', 'Learn More'],
                footerQuickLinks: ['Home', 'Dashboard', 'Community Forum', 'Resource Library'],
                footerServices: ['Voice Assistance', 'Pest Management', 'Market Rates', 'IoT Sensors'],
                footerSupport: ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'],
                footerConnectWithUs: 'Connect With Us',
                footerCopyright: '© 2025 KisanMitra. All Rights Reserved.'
            },
            hi: {
                navHome: 'होम',
                navDashboard: 'डैशबोर्ड',
                navContact: 'संपर्क',
                welcomeText1: 'नमस्ते, किसान मित्र में आपका स्वागत है',
                welcomeText2: 'कृषि में AI-संचालित अंतर्दृष्टि के साथ किसानों को सशक्त बनाएं – एक टिकाऊ भविष्य के लिए स्मार्ट समाधान',
                tryNow: 'अभी प्रयास करें',
                featuresHeading: 'हम क्या प्रदान करते हैं',
                featuresSubheading: 'किसान मित्र का हिस्सा बनकर, आपको यह मिलता है:',
                features: [
                    {
                        title: 'वॉइस-आधारित सहायता',
                        description: 'आसान वॉइस कमांड के माध्यम से विशेषज्ञ कृषि सलाह प्राप्त करें।'
                    },
                    {
                        title: 'कीट प्रबंधन',
                        description: 'AI-संचालित विश्लेषण के साथ फसल के रोगों का पता लगाएं और रोकें।'
                    },
                    {
                        title: 'IoT सेंसर',
                        description: 'मिट्टी, मौसम और फसल के स्वास्थ्य की वास्तविक समय में निगरानी करें।'
                    },
                    {
                        title: 'बाजार और योजनाएं',
                        description: 'सरकारी योजनाओं और सर्वोत्तम बाजार दरों से अपडेट रहें।'
                    },
                    {
                        title: 'समुदाय मंच',
                        description: 'ज्ञान और अनुभव साझा करने के लिए अन्य किसानों से जुड़ें।'
                    },
                    {
                        title: 'संसाधन पुस्तकालय',
                        description: 'गाइड, ट्यूटोरियल और सर्वोत्तम प्रथाओं का विशाल संग्रह खोजें।'
                    }
                ],
                testimonialsHeading: 'किसानों की कहानियां',
                testimonials: [
                    'किसान मित्र ने अपनी AI-संचालित अंतर्दृष्टि के साथ मेरी खेती के दृष्टिकोण को बदल दिया है।',
                    'वॉइस सहायक मुझे तुरंत जानकारी प्राप्त करने में मदद करता है, भले ही मेरी साक्षरता सीमित हो।',
                    'बाजार दरें और सरकारी योजना की जानकारी मेरे लिए एक बड़ा बदलाव है।'
                ],
                loginButtons: ['लॉगिन', 'साइन अप'],
                signupForm: {
                    fullName: 'पूरा नाम',
                    phoneNumber: 'फोन नंबर',
                    password: 'पासवर्ड',
                    confirmPassword: 'पासवर्ड की पुष्टि करें'
                },
                howItWorksHeading: 'किसान मित्र कैसे काम करता है',
                howItWorksSteps: [
                    {
                        title: 'पंजीकरण',
                        description: 'अपना नि:शुल्क खाता बनाएं और अपनी खेत की प्रोफ़ाइल को अनुकूलित करें'
                    },
                    {
                        title: 'कनेक्ट करें',
                        description: 'अपने खेत के विवरण और पसंदीदा भाषाओं को जोड़ें'
                    },
                    {
                        title: 'खोजें',
                        description: 'AI-संचालित अंतर्दृष्टि, वॉइस सहायता और समुदाय के संसाधनों तक पहुंच प्राप्त करें'
                    },
                    {
                        title: 'बढ़ें',
                        description: 'सिफारिशों को लागू करें और अपनी खेत की प्रगति का पता लगाएं'
                    }
                ],
                ctaHeading: 'अपनी कृषि यात्रा को बदलने के लिए तैयार हैं?',
                ctaSubheading: 'उन हजारों किसानों में शामिल हों जो उत्पादकता और स्थिरता बढ़ाने के लिए AI का लाभ उठा रहे हैं',
                ctaButtons: ['मुफ्त ट्रायल शुरू करें', 'अधिक जानें'],
                footerQuickLinks: ['होम', 'डैशबोर्ड', 'समुदाय मंच', 'संसाधन पुस्तकालय'],
                footerServices: ['वॉइस सहायता', 'कीट प्रबंधन', 'बाजार दरें', 'IoT सेंसर'],
                footerSupport: ['हमसे संपर्क करें', 'अक्सर पूछे जाने वाले प्रश्न', 'गोपनीयता नीति', 'सेवा की शर्तें'],
                footerConnectWithUs: 'हमसे जुड़ें',
                footerCopyright: '© 2025 किसान मित्र. सभी अधिकार सुरक्षित.'
            }
        };

        function translatePage(language) {
            
            document.documentElement.setAttribute('lang', language);
          
            const lang = translations[language];
            if (!lang) {
              console.warn(`Translations not available for language: ${language}`);
              return;
            }
          
            
            const setText = (selector, text) => {
              const el = document.querySelector(selector);
              if (el) el.textContent = text;
              else console.warn(`Missing element for selector: ${selector}`);
            };
          
            const setTextAll = (selector, values) => {
              const elements = document.querySelectorAll(selector);
              values.forEach((text, index) => {
                if (elements[index]) elements[index].textContent = text;
                else console.warn(`Missing element at index ${index} for selector: ${selector}`);
              });
            };
          
            // Navbar
            setText('.nav-items.home', lang.navHome);
            const navItems = document.querySelectorAll('.nav-items');
            if (navItems.length >= 3) {
              navItems[1].textContent = lang.navDashboard;
              navItems[2].textContent = lang.navContact;
            }
          
            // Login buttons
            setTextAll('.button-group button', lang.loginButtons);
          
            // Hero text
            setText('.text1', lang.welcomeText1);
            setText('.text2', lang.welcomeText2);
            setText('.namaste button', lang.tryNow);
          
            // Features
            setText('.features-section h2', lang.featuresHeading);
            setText('.features-section .heading-desc', lang.featuresSubheading);
          
            const featureTitles = document.querySelectorAll('.main');
            const featureDescs = document.querySelectorAll('.main-desc');
            lang.features.forEach((feature, index) => {
              if (featureTitles[index]) featureTitles[index].textContent = feature.title;
              if (featureDescs[index]) featureDescs[index].textContent = feature.description;
            });
          
            // Testimonials
            setText('.testimonials h2', lang.testimonialsHeading);
            setTextAll('.testimonial p', lang.testimonials);
          
            // How it works
            setText('.how-it-works h2', lang.howItWorksHeading);
            const stepTitles = document.querySelectorAll('.step h3');
            const stepDescriptions = document.querySelectorAll('.step p');
            lang.howItWorksSteps.forEach((step, index) => {
              if (stepTitles[index]) stepTitles[index].textContent = step.title;
              if (stepDescriptions[index]) stepDescriptions[index].textContent = step.description;
            });
          
            // CTA section
            setText('.cta-section h2', lang.ctaHeading);
            setText('.cta-section p', lang.ctaSubheading);
            setTextAll('.cta-buttons button', lang.ctaButtons);
          
            // Footer links
            const footerColumns = document.querySelectorAll('.footer-column');
            if (footerColumns.length >= 3) {
              setTextAll('.footer-column:nth-child(1) li', lang.footerQuickLinks);
              setTextAll('.footer-column:nth-child(2) li', lang.footerServices);
              setTextAll('.footer-column:nth-child(3) li', lang.footerSupport);
            }
          
            setText('.footer-social h4', lang.footerConnectWithUs);
            setText('.footer-bottom p', lang.footerCopyright);
          }
          
        const languageSelector = document.querySelector('.language-selector');
        const searchContainer = languageSelector.querySelector('.search-container');
        const searchIconSpan = languageSelector.querySelector('.search-icon');
        const languageDropdown = languageSelector.querySelector('.language-dropdown');
        const languageOptions = languageDropdown.querySelectorAll('li');

        function toggleDropdown() {
            languageDropdown.classList.toggle('show');
        }

        searchContainer.addEventListener('click', toggleDropdown);
        searchIconSpan.addEventListener('click', toggleDropdown);

    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLanguage = option.textContent;
            const languageCode = option.getAttribute('data-lang');
            
            searchContainer.value = selectedLanguage;
            
            languageDropdown.classList.remove('show');

            document.documentElement.setAttribute('lang', languageCode);
            
            translatePage(languageCode);
        });
    });


        document.addEventListener('click', (event) => {
            if (!languageSelector.contains(event.target)) {
                languageDropdown.classList.remove('show');
            }
        });

        const testimonialContainer = document.querySelector('.testimonial-container');
        const testimonials = document.querySelectorAll('.testimonial');
        
        const wrapper = document.createElement('div');
        wrapper.classList.add('testimonial-wrapper');
        
        testimonials.forEach(testimonial => {
            wrapper.appendChild(testimonial);
        });
        
        testimonialContainer.innerHTML = '';
        testimonialContainer.appendChild(wrapper);
        
        const navContainer = document.createElement('div');
        navContainer.classList.add('testimonial-navigation');
        
        testimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('nav-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => changeTestimonial(index));
            navContainer.appendChild(dot);
        });
        
        testimonialContainer.appendChild(navContainer);

        let currentIndex = 0;
        const totalTestimonials = testimonials.length;

        function changeTestimonial(index) {
            currentIndex = index;
            updateTestimonialView();
        }

        function updateTestimonialView() {
            const wrapper = document.querySelector('.testimonial-wrapper');
            const dots = document.querySelectorAll('.nav-dot');
            
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            updateTestimonialView();
        }

        function prevTestimonial() {
            currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
            updateTestimonialView();
        }

        let autoSlideInterval;
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextTestimonial, 5000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        startAutoSlide();

        testimonialContainer.addEventListener('mouseenter', stopAutoSlide);
        testimonialContainer.addEventListener('mouseleave', startAutoSlide);

        let touchStartX = 0;
        let touchEndX = 0;

        testimonialContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        testimonialContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchStartX - touchEndX > 50) {
                nextTestimonial();
            } else if (touchEndX - touchStartX > 50) {
                prevTestimonial();
            }
        }

            const loginBtn = document.getElementById('login-btn');
            const signupBtn = document.getElementById('signup-btn');
            const loginSignupModal = document.getElementById('login-signup-modal');
            const formContainer = document.querySelector('.form_container');
            const formClose = document.querySelector('.form_close');
            const signupLink = document.getElementById('signup-link');
            const loginLink = document.getElementById('login-link');
        
            loginBtn.addEventListener('click', () => {
                loginSignupModal.classList.add('show');
                formContainer.classList.remove('active'); 
            });
        
            signupBtn.addEventListener('click', () => {
                loginSignupModal.classList.add('show');
                formContainer.classList.add('active'); 
            });
        
            formClose.addEventListener('click', () => {
                loginSignupModal.classList.remove('show');
            });
        
            signupLink.addEventListener('click', (e) => {
                e.preventDefault();
                formContainer.classList.add('active');
            });
        
            loginLink.addEventListener('click', (e) => {
                e.preventDefault();
                formContainer.classList.remove('active');
            });
        
            const pwShowHide = document.querySelectorAll('.pw_hide');
            pwShowHide.forEach(toggleBtn => {
                toggleBtn.addEventListener('click', () => {
                    let pwFields = toggleBtn.closest('.input_box').querySelector('input[type="password"]');
                    
                    if (pwFields.type === 'password') {
                        pwFields.type = 'text';
                        toggleBtn.classList.replace('uil-eye-slash', 'uil-eye');
                    } else {
                        pwFields.type = 'password';
                        toggleBtn.classList.replace('uil-eye', 'uil-eye-slash');
                    }
                });
            });
        
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
        
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Login form submitted');
            });
        
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Signup form submitted');
            });
        
        });


        class AIContextAssistant {
            constructor() {
                this.sectionContexts = {
                    home: {
                        description: {
                            en: 'Landing page introducing MittiMitra\'s core mission',
                            hi: 'मित्तिमित्र के मूल मिशन को परिचित कराने वाला लैंडिंग पेज'
                        },
                        keywords: {
                            en: ['farmers', 'AI', 'agriculture', 'technology', 'empowerment'],
                            hi: ['किसान', 'कृत्रिम बुद्धिमत्ता', 'कृषि', 'प्रौद्योगिकी', 'सशक्तिकरण']
                        }
                    },
                    features: {
                        description: {
                            en: 'Detailed breakdown of services offered',
                            hi: 'प्रदान की जाने वाली सेवाओं का विस्तृत विवरण'
                        },
                        services: {
                            en: [
                                'Voice-based Assistance',
                                'Pest Management',
                                'IoT Sensor',
                                'Market & Schemes',
                                'Community Forum',
                                'Resource Library'
                            ],
                            hi: [
                                'वॉइस-आधारित सहायता',
                                'कीट प्रबंधन',
                                'IoT सेंसर',
                                'बाजार और योजनाएं',
                                'समुदाय मंच',
                                'संसाधन पुस्तकालय'
                            ]
                        }
                    },
                    howItWorks: {
                        description: {
                            en: 'Step-by-step guide to using MittiMitra',
                            hi: 'मित्तिमित्र का उपयोग करने का चरण-दर-चरण मार्गदर्शक'
                        },
                        steps: {
                            en: ['Register', 'Connect', 'Explore', 'Grow'],
                            hi: ['पंजीकरण', 'जोड़ें', 'अन्वेषण', 'विकास']
                        }
                    },
                    navigation: {
                        en: {
                            home: 'Home',
                            features: 'Features',
                            howItWorks: 'How It Works',
                            contact: 'Contact'
                        },
                        hi: {
                            home: 'होम',
                            features: 'सुविधाएं',
                            howItWorks: 'कैसे काम करता है',
                            contact: 'संपर्क'
                        }
                    }
                };
        
                this.currentLanguage = 'en';
        
                this.initializeContextUnderstanding();
            }
        
            initializeContextUnderstanding() {
                this.createAIAssistantUI();
                
                this.setupEventListeners();
            }
        
            createAIAssistantUI() {
                const aiAssistantContainer = document.createElement('div');
                aiAssistantContainer.id = 'ai-assistant-container';
                aiAssistantContainer.innerHTML = `
                    <div id="ai-assistant-icon">
                        <img src="ai-assistant-icon.png" alt="AI Assistant">
                    </div>
                    <div id="ai-assistant-dialog" class="hidden">
                        <div id="ai-assistant-header">
                            <h3>MittiMitra AI Assistant</h3>
                            <button id="close-ai-assistant">×</button>
                        </div>
                        <div id="ai-assistant-messages">
                            <div class="ai-welcome-message">
                                Hi! I'm your AI context assistant. Ask me anything about MittiMitra.
                            </div>
                            <div id="typing-indicator" class="hidden">
                                <div class="typing-dot"></div>
                                <div class="typing-dot"></div>
                                <div class="typing-dot"></div>
                            </div>
                        </div>
                        <div id="ai-assistant-input-container">
                            <input type="text" id="ai-assistant-input" placeholder="Ask about MittiMitra...">
                            <button id="send-ai-query">Send</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(aiAssistantContainer);
        
                const styles = `
                    #ai-assistant-container {
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        z-index: 1000;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                    }
                    #ai-assistant-icon {
                        cursor: pointer;
                        margin-top: auto;
                    }
                    #ai-assistant-icon img {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    }
                    #ai-assistant-dialog {
                        width: 350px;
                        background: #f5f5dc;
                        border-radius: 10px;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                        margin-bottom: 10px;
                        transition: all 0.3s ease;
                        opacity: 0;
                        visibility: hidden;
                        position: absolute;
                        bottom: 100%;
                        right: 0;
                    }
                    #ai-assistant-dialog.show {
                        opacity: 1;
                        visibility: visible;
                    }
                    #ai-assistant-header {
                        background: #2e8b57;
                        color: white;
                        padding: 10px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                    }
                    #ai-assistant-messages {
                        height: 300px;
                        overflow-y: auto;
                        padding: 15px;
                        background: #f0fff0;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                    .ai-message {
                        margin-bottom: 10px;
                        padding: 10px;
                        border-radius: 8px;
                        max-width: 85%;
                        opacity: 0;
                        transform: translateY(20px);
                        transition: opacity 0.3s ease, transform 0.3s ease;
                    }
                    .ai-user-message {
                        background-color: #98fb98;
                        color: #333;
                        align-self: flex-end;
                        margin-left: auto;
                        text-align: right;
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .ai-ai-message {
                        background-color: #3cb371;
                        color: white;
                        align-self: flex-start;
                        margin-right: auto;
                        text-align: left;
                        opacity: 1;
                        transform: translateY(0);
                    }
                    #typing-indicator {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        bottom: 10px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    #typing-indicator.hidden {
                        display: none;
                    }
                    .typing-dot {
                        width: 8px;
                        height: 8px;
                        background-color: #2e8b57;
                        border-radius: 50%;
                        margin: 0 4px;
                        animation: typing-animation 1.4s infinite ease-in-out;
                        opacity: 0.7;
                    }
                    .typing-dot:nth-child(2) {
                        animation-delay: 0.2s;
                    }
                    .typing-dot:nth-child(3) {
                        animation-delay: 0.4s;
                    }
                    @keyframes typing-animation {
                        0%, 100% { opacity: 0.3; transform: translateY(0); }
                        50% { opacity: 1; transform: translateY(-5px); }
                    }
                    #ai-assistant-input-container {
                        display: flex;
                        padding: 10px;
                        border-top: 1px solid #90ee90;
                        background: #f5f5dc;
                    }
                    #ai-assistant-input {
                        flex-grow: 1;
                        padding: 8px;
                        border: 1px solid #2e8b57;
                        border-radius: 4px;
                        background: white;
                    }
                    #send-ai-query {
                        margin-left: 10px;
                        background: #2e8b57;
                        color: white;
                        border: none;
                        padding: 8px 15px;
                        border-radius: 4px;
                        transition: background 0.3s ease;
                    }
                    #send-ai-query:hover {
                        background: #3cb371;
                    }
                `;
                const styleElement = document.createElement('style');
                styleElement.textContent = styles;
                document.head.appendChild(styleElement);
            }
        
            setupEventListeners() {
                const aiAssistantIcon = document.getElementById('ai-assistant-icon');
                const aiAssistantDialog = document.getElementById('ai-assistant-dialog');
                const closeButton = document.getElementById('close-ai-assistant');
                const sendQueryButton = document.getElementById('send-ai-query');
                const queryInput = document.getElementById('ai-assistant-input');
        
                aiAssistantIcon.addEventListener('click', () => {
                    aiAssistantDialog.classList.toggle('show');
                });
        
                closeButton.addEventListener('click', () => {
                    aiAssistantDialog.classList.remove('show');
                });
        
                sendQueryButton.addEventListener('click', () => this.processQuery());
                queryInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.processQuery();
                });
            }
        
            processQuery() {
                const queryInput = document.getElementById('ai-assistant-input');
                const query = queryInput.value.trim();
        
                if (!query) return;
        
                if (query.toLowerCase().startsWith('change language to ')) {
                    this.changeLanguage(query);
                    return;
                }
        
                this.addMessage('user', query);
        
                this.showTypingIndicator();
        
                setTimeout(() => {
                    const response = this.generateResponse(query);
        
                    this.hideTypingIndicator();
        
                    this.addMessage('ai', response);
        
                    queryInput.value = '';
                }, 1000);
            }
        
            showTypingIndicator() {
                const typingIndicator = document.getElementById('typing-indicator');
                typingIndicator.classList.remove('hidden');
            }
        
            hideTypingIndicator() {
                const typingIndicator = document.getElementById('typing-indicator');
                typingIndicator.classList.add('hidden');
            }
        
            changeLanguage(query) {
                const languageMap = {
                    'english': 'en',
                    'hindi': 'hi'
                };
        
                const languageName = query.toLowerCase().replace('change language to ', '').trim();
                const languageCode = languageMap[languageName];
        
                if (languageCode) {
                
                    this.currentLanguage = languageCode;
        
                    this.updateAIAssistantLanguage(languageCode);
        
                    this.updateSiteLanguage(languageCode);
        
                    const responseMessage = languageCode === 'en' 
                        ? `Language changed to English. The entire site is now in English.`
                        : `भाषा हिंदी में बदल दी गई है। पूरी साइट अब हिंदी में है।`;
        
                    this.addMessage('ai', responseMessage);
                } else {
                    const errorMessage = this.currentLanguage === 'en'
                        ? `Sorry, I don't recognize that language. Please say 'Change language to English' or 'Change language to Hindi'.`
                        : `क्षमा करें, मैं उस भाषा को नहीं पहचानता। कृपया कहें 'Change language to English' या 'Change language to Hindi'।`;
        
                    this.addMessage('ai', errorMessage);
                }
            }
            
            
            updateAIAssistantLanguage(languageCode) {
                
                const welcomeMessage = languageCode === 'en' 
                    ? "Hi! I'm your AI context assistant. Ask me anything about MittiMitra."
                    : "नमस्ते! मैं आपका एआई संदर्भ सहायक हूँ। मित्तिमित्र के बारे में कुछ भी पूछिए।";
        
                const inputPlaceholder = languageCode === 'en' 
                    ? "Ask about MittiMitra..."
                    : "मित्तिमित्र के बारे में पूछें...";
        
                const welcomeMessageElement = document.querySelector('.ai-welcome-message');
                const inputElement = document.getElementById('ai-assistant-input');
                const sendButton = document.getElementById('send-ai-query');
        
                welcomeMessageElement.textContent = welcomeMessage;
                inputElement.placeholder = inputPlaceholder;
                sendButton.textContent = languageCode === 'en' ? 'Send' : 'भेजें';
            }
        
            updateSiteLanguage(languageCode) {

                document.documentElement.setAttribute('lang', languageCode);
                
                const navItems = this.sectionContexts.navigation[languageCode];
                const navElements = document.querySelectorAll('[data-nav-key]');
                
                navElements.forEach(element => {
                    const navKey = element.getAttribute('data-nav-key');
                    if (navItems[navKey]) {
                        element.textContent = navItems[navKey];
                    }
                });
        
                
                document.title = languageCode === 'en' 
                    ? 'MittiMitra - AI-Powered Agricultural Support' 
                    : 'मित्तिमित्र - एआई-संचालित कृषि सहायता';
        
                const metaDescription = document.querySelector('meta[name="description"]');
                if (metaDescription) {
                    metaDescription.setAttribute('content', 
                        languageCode === 'en'
                            ? 'MittiMitra provides AI-powered solutions for farmers to enhance agricultural productivity and support.'
                            : 'मित्तिमित्र किसानों के लिए कृषि उत्पादकता और समर्थन बढ़ाने के लिए एआई-संचालित समाधान प्रदान करता है।'
                    );
                }
            }
        
            addMessage(type, message) {
                const messagesContainer = document.getElementById('ai-assistant-messages');
                const messageElement = document.createElement('div');
                messageElement.classList.add('ai-message', `ai-${type}-message`);
                messageElement.textContent = message;
                
                
                setTimeout(() => {
                    messageElement.style.opacity = '1';
                    messageElement.style.transform = 'translateY(0)';
                }, 10);
        
                messagesContainer.appendChild(messageElement);
                
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        
            generateResponse(query) {
                
                query = query.toLowerCase();
        
                
                const lang = this.currentLanguage;
        
                if (query.includes('feature') || query.includes('service')) {
                    return this.generateFeaturesResponse();
                }
        
                if (query.includes('how') && (query.includes('work') || query.includes('use'))) {
                    return this.generateHowItWorksResponse();
                }
        
                if (query.includes('mission') || query.includes('goal')) {
                    return this.generateMissionResponse();
                }
        
                if (query.includes('help') || query.includes('assist')) {
                    return this.generateGeneralAssistanceResponse();
                }
                        
                return lang === 'en' 
                    ? "I can help you understand MittiMitra's features, how it works, or its mission. Could you be more specific?"
                    : "मैं आपको मित्तिमित्र की सुविधाओं, इसके कार्य करने के तरीके या इसके मिशन को समझने में मदद कर सकता हूँ। क्या आप अधिक विशिष्ट हो सकते हैं?";
            }
        
            generateFeaturesResponse() {
                const lang = this.currentLanguage;
                const features = this.sectionContexts.features.services[lang];
                
                return lang === 'en' 
                    ? `MittiMitra offers six key services to support farmers:
        1. ${features[0]}: Get expert farming advice through voice commands
        2. ${features[1]}: AI-powered crop disease detection
        3. ${features[2]}: Real-time monitoring of soil, weather, and crop health
        4. ${features[3]}: Updates on government schemes and market rates
        5. ${features[4]}: Connect with fellow farmers in our community forum
        6. ${features[5]}: Access a comprehensive library of agricultural resources`
                    : `मित्तिमित्र किसानों की सहायता के लिए छह प्रमुख सेवाएं प्रदान करता है:
        1. ${features[0]}: वॉइस कमांड के माध्यम से विशेषज्ञ कृषि सलाह प्राप्त करें
        2. ${features[1]}: एआई-संचालित फसल रोग पहचान
        3. ${features[2]}: मिट्टी, मौसम और फसल स्वास्थ्य का रीयल-टाइम निगरानी
        4. ${features[3]}: सरकारी योजनाओं और बाजार दरों पर अपडेट
        5. ${features[4]}: अपने समुदाय के अन्य किसानों से जुड़ें
        6. ${features[5]}: कृषि संसाधनों की व्यापक पुस्तकालय तक पहुंच`;
            }
        
            generateHowItWorksResponse() {
                const lang = this.currentLanguage;
                const steps = this.sectionContexts.howItWorks.steps[lang];
                
                return lang === 'en'
                    ? `Using MittiMitra is simple and involves four key steps:
        1. ${steps[0]}: Create a free account and set up your farm profile
        2. ${steps[1]}: Link your farm details and language preferences
        3. ${steps[2]}: Access AI insights, voice assistance, and community resources
        4. ${steps[3]}: Implement recommendations and track your farm's progress`
                    : `मित्तिमित्र का उपयोग करना आसान है और इसमें चार प्रमुख चरण शामिल हैं:
        1. ${steps[0]}: एक मुफ्त खाता बनाएं और अपनी फार्म प्रोफाइल सेट करें
        2. ${steps[1]}: अपने फार्म के विवरण और भाषा वरीयताएं लिंक करें
        3. ${steps[2]}: एआई अंतर्दृष्टि, वॉइस सहायता और समुदाय के संसाधनों तक पहुंच
        4. ${steps[3]}: सिफारिशों को लागू करें और अपनी फार्म की प्रगति को ट्रैक करें`;
            }
        
            generateMissionResponse() {
                return this.currentLanguage === 'en'
                    ? "MittiMitra's mission is to empower farmers through cutting-edge AI technology. We aim to provide smart, sustainable solutions that enhance agricultural productivity, offer real-time insights, and create a supportive community for farmers across India."
                    : "मित्तिमित्र का मिशन अत्याधुनिक एआई प्रौद्योगिकी के माध्यम से किसानों को सशक्त बनाना है। हमारा लक्ष्य स्मार्ट, टिकाऊ समाधान प्रदान करना है जो कृषि उत्पादकता को बढ़ाते हैं, रीयल-टाइम अंतर्दृष्टि प्रदान करते हैं और पूरे भारत में किसानों के लिए एक सहायक समुदाय बनाते हैं।";
            }
        
            generateGeneralAssistanceResponse() {
                return this.currentLanguage === 'en'
                    ? "I'm here to help you understand MittiMitra! I can provide information about our features, explain how our platform works, or help you navigate our services. What would you like to know?"
                    : "मैं आपको मित्तिमित्र को समझने में मदद करने के लिए यहां हूँ! मैं हमारी सुविधाओं के बारे में जानकारी प्रदान कर सकता हूँ, हमारे प्लेटफॉर्म के काम करने का तरीका समझा सकता हूँ या हमारी सेवाओं में नेविगेट करने में मदद कर सकता हूँ। आप क्या जानना चाहेंगे?";
            }
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            window.aiContextAssistant = new AIContextAssistant();
        });


        document.getElementById('contact-link').addEventListener('click', function () {
            document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
        });