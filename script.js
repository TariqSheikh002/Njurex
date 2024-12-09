// Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
// Cursor End



// MENU
document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    
    toggler.addEventListener('click', function () {
        if (this.textContent.trim() === 'MENU') {
            this.textContent = 'CLOSE';
        } else {
            this.textContent = 'MENU';
        }
    });
});

// MENU END



// LINE COLOR 
const hoverTargets = document.querySelectorAll('.hover-target');

hoverTargets.forEach(target => {
    const sectionId = target.getAttribute('data-target');
    const bendElement = document.getElementById(`bend${sectionId.charAt(sectionId.length - 1)}`); 

    target.addEventListener('mouseenter', () => {

        target.style.background ='linear-gradient(to right,#1c732c,#64ab2f,#4b9533)'; 
        target.style.webkitBackgroundClip = 'text'; 
        target.style.color = 'transparent'; 

      
        if (bendElement) {
            bendElement.style.borderColor = '#1c732c'; 
            bendElement.style.transition = 'border-color 0.3s'; 
        }
    });

   
    target.addEventListener('mouseleave', () => {
   
        target.style.background = ''; 
        target.style.webkitBackgroundClip = '';
        target.style.color = ''; 

        if (bendElement) {
            bendElement.style.borderColor = '';
        }
    });
});

// LINE COLOR END



// H1
var sentences = ["Innovating Workplace Safety through Artificial Intelligence."];
var currentSentence = 0;
var currentSentenceChar = 0;
var intervalValue;
var textElement = document.querySelector("#text");
var myCursor = document.querySelector("#cursor");

function TypingEffect() {
    var text = sentences[currentSentence].substring(0, currentSentenceChar + 1);
    textElement.innerHTML = text;
    currentSentenceChar++;
    
    if (text === sentences[currentSentence]) {
        clearInterval(intervalValue);
        setTimeout(function () {
            intervalValue = setInterval(DeletingEffect, 60);
        }, 1300); 
    }
}

function DeletingEffect() {
    var text = sentences[currentSentence].substring(0, currentSentenceChar - 1);
    textElement.innerHTML = text;
    currentSentenceChar--;
    
    if (text === '') {
        clearInterval(intervalValue);
        if (currentSentence === sentences.length - 1) {
            currentSentence = 0;
        } else {
            currentSentence++;
        }
        
        currentSentenceChar = 0;
        
        setTimeout(function () {
            myCursor.style.display = 'inline-block';
            intervalValue = setInterval(TypingEffect, 50);
        }, 100);
    }
}

intervalValue = setInterval(TypingEffect, 100);
// H1 End

// H4 Hover CHANGE
let lastHoveredId = null; 

function showSection1() {
    const section1 = document.getElementById('section1');
    const videoSection = document.getElementById('section1-right-video-section');

    if (section1) {
        section1.style.display = 'block'; 
    }

    if (videoSection) {
        videoSection.style.display = 'block';
    }
}

document.querySelectorAll('.hover-target').forEach(item => {
    item.addEventListener('click', event => {
        event.stopPropagation(); 
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        const videoSection = document.getElementById('section1-right-video-section');
        if (videoSection) {
            videoSection.style.display = 'none';
        }

        const targetId = item.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetId === 'section1') {
            showSection1();
        } else {
            targetSection.style.display = 'block';
        }

        lastHoveredId = targetId; 
    });
});
document.addEventListener('click', event => {
    if (!event.target.closest('.hover-target')) {
        if (lastHoveredId) {
            const lastHoveredSection = document.getElementById(lastHoveredId);
            if (lastHoveredSection) {
                lastHoveredSection.style.display = 'block';
            }

            const videoSection = document.getElementById('section1-right-video-section');
            videoSection.style.display = 'none'; 
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    showSection1();

    document.querySelectorAll('.content-section').forEach(section => {
        if (section.id !== 'section1') {
            section.style.display = 'none';
        }
    });
});

// H4 Hover CHANGE END

// Slider VERTICAL IMAGE
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider img');

const firstImageClone = sliderImages[0].cloneNode(true);
sliderContainer.appendChild(firstImageClone);

const totalHeight = sliderImages.length * 50;
sliderContainer.style.height = `${totalHeight}px`;

// Slider VERTICAL IMAGE END

// faq visible
document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('#bspecial-all-container-left h5, #bspecial-all-container-mid h5');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        headers.forEach(header => {
            const rect = header.getBoundingClientRect();

            if (rect.top < windowHeight && rect.bottom >= 0) {
                header.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); 
});
// faq visible end

// MAP
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('global-map-container');
    const circles = document.querySelectorAll('.circle');

    const handleScroll = () => {
        const rect = mapContainer.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            mapContainer.classList.add('visible'); 
            circles.forEach(circle => {
                circle.style.visibility = 'visible';
            });
            
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);
});

// MAP END

// ALL h6
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.all-h6'); 

    const typewriterEffect = (element, text) => {
        element.textContent = ''; 
        let index = 0; 

        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); 
            }
        };

        type(); 
    };

    const handleScroll = () => {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();

            if (rect.top < window.innerHeight && rect.bottom > 0 && element.style.opacity === '0') {
                element.style.opacity = '1';
                typewriterEffect(element, element.textContent); 
                element.style.opacity = '1'; 
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
});

// All H6 End

// Vertical Slider
document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const images = Array.from(sliderContainer.getElementsByTagName('img'));
    
    // Clone the images for continuous scrolling
    images.forEach(image => {
        const clone = image.cloneNode(true);
        sliderContainer.appendChild(clone);
    });

    // Adjust container height based on the number of images
    const totalImages = images.length * 2; // Original + clones
    sliderContainer.style.height = `${totalImages * images[0].height}px`;

    let sliderHeight = sliderContainer.offsetHeight;
    let currentOffset = 0;

    function animateSlider() {
        currentOffset -= 1; // Move up by 1 pixel
        
        // Reset position if the topmost image is completely out of view
        if (Math.abs(currentOffset) >= sliderHeight / 2) {
            currentOffset = 0; // Reset to 0 to loop seamlessly
        }

        // Set the new offset to the container
        sliderContainer.style.transform = `translateY(${currentOffset}px)`;
        
        // Continuously call the animation function
        requestAnimationFrame(animateSlider);
    }
    
    animateSlider();
});

// VERTICAL SLIDER END


// EHS HEROES LARGE SCREEN 
const ehsLargeCardSlider = document.querySelector('.card-slider');
const ehsLargeCards = document.querySelectorAll('.ehs-card');
const ehsLargeNextArrow = document.querySelector('.next-arrow');

let ehsLargeCurrentIndex = 0;
const ehsLargeTotalCards = ehsLargeCards.length;
const cloneCount = 50;  
let isUpdating = false;

const allCards = Array.from(ehsLargeCards); 

function cloneCards() {
    for (let i = 0; i < cloneCount; i++) {
        ehsLargeCards.forEach(card => {
            const clone = card.cloneNode(true);
            ehsLargeCardSlider.appendChild(clone);
            clone.addEventListener('click', handleCardClick);
            allCards.push(clone); 
        });
    }
}

function ehsLargeUpdateCardDisplay() {
    const ehsLargeCardNameDisplay = document.getElementById('card-name-display');
    const ehsLargeEhsName = document.getElementById('ehs-name');
    const ehsLargeEhsDescription = document.getElementById('ehs-description');

    const currentCard = allCards[ehsLargeCurrentIndex % allCards.length]; 
    ehsLargeCardNameDisplay.textContent = currentCard.dataset.name;
    ehsLargeEhsName.textContent = currentCard.querySelector('.card-name').textContent;
    ehsLargeEhsDescription.textContent = currentCard.dataset.description;

    const ehsLargeOffset = -ehsLargeCurrentIndex * (currentCard.offsetWidth + 10);
    ehsLargeCardSlider.style.transform = `translateX(${ehsLargeOffset}px)`;
}

function ehsLargeShowNextCard() {
    if (isUpdating) return; 
    isUpdating = true;

    ehsLargeCurrentIndex++;
    ehsLargeUpdateCardDisplay();
    setTimeout(() => {
        isUpdating = false;
    }, 300);
}

function handleCardClick(event) {
    const card = event.currentTarget; 
    ehsLargeCurrentIndex = allCards.indexOf(card);
    ehsLargeUpdateCardDisplay(); 

    const clone = card.cloneNode(true);
    ehsLargeCardSlider.appendChild(clone);
    clone.addEventListener('click', handleCardClick);
    allCards.push(clone); 
}

ehsLargeCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

cloneCards();
ehsLargeUpdateCardDisplay();
ehsLargeNextArrow.addEventListener('click', ehsLargeShowNextCard);

// EHS HEROES END LARGE SCREEN

// EHS HEROES SMALL SCREEN
const ehsSmallCards = [
    {
        title: "Wasili Gusko",
        upperTitle: "Swire Coca-Cola",
        description: "In just six months of implementation, we’ve experienced significant improvements in our operational efficiency and safety culture.",
        image: "man.png"
    },
    {
        title: "Hans Jhon",
        upperTitle: "IcyWind",
        description: "Our commitment to ensuring safe work environments is significantly enhanced by our key ally.",
        image: "man3.png"
    },
    {
        title: "Allan Parsalle",
        upperTitle: "Griggles",
        description: "Our dedication to safe work environments is bolstered by our trusted partner.",
        image: "man2.png"
    },
    {
        title: "Chris Turnor",
        upperTitle: "Amazon",
        description: "We are proud to have a vital partner in our mission to create safe work environments.",
        image: "man4.png"
    },
    {
        title: "Seth Rollin",
        upperTitle: "Hutamaki",
        description: "Our commitment to providing a safe workplace is strengthened by our essential partner.",
        image: "man5.png"
    },
];

const cardContainer = document.getElementById("small-ehs-card-container");
const titleElement = document.getElementById("card-title");
const descriptionElement = document.getElementById("card-description");
const titleSpanElement = document.getElementById("card-title-span"); // New span element
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let ehsSmallCurrentIndex = 0;

// Create cards by repeating the original set 3 times
function initializeCards() {
    for (let i = 0; i < 3; i++) {
        ehsSmallCards.forEach(cardData => {
            const card = createCard(cardData);
            cardContainer.appendChild(card);
            if (i !== 0) {
                card.style.transform = `translateX(100%)`;
            }
        });
    }
}

function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add("ehs-small-card");
    card.innerHTML = `<img src="${cardData.image}" alt="${cardData.title}"><h3>${cardData.title}</h3>`;
    return card;
}

function updateCards() {
    const cards = document.querySelectorAll('.ehs-small-card');
    const cardWidth = 250; 
    const cardMargin = 10; 
    const totalWidth = cardWidth + cardMargin * 2; 

    cards.forEach((card, index) => {
        card.style.transition = "transform 0.5s ease";
        card.style.transform = `translateX(${(index - ehsSmallCurrentIndex) * totalWidth}px)`;
    });

    const actualIndex = ehsSmallCurrentIndex % ehsSmallCards.length;
    titleElement.textContent = ehsSmallCards[actualIndex].upperTitle;
    descriptionElement.textContent = ehsSmallCards[actualIndex].description;
    titleSpanElement.textContent = ehsSmallCards[actualIndex].title; // Update span with title
}

// Button event listeners
prevButton.addEventListener("click", () => {
    ehsSmallCurrentIndex = (ehsSmallCurrentIndex - 1 + ehsSmallCards.length * 3) % (ehsSmallCards.length * 3);
    updateCards();
});

nextButton.addEventListener("click", () => {
    ehsSmallCurrentIndex = (ehsSmallCurrentIndex + 1) % (ehsSmallCards.length * 3);
    updateCards();
});

// Initialize and update cards
initializeCards();
updateCards();

// EHS HEROES END SMALL SCREEN



// SPECIAL FAQ
document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.special-faq-question');

    function toggleFAQ(event) {
        const clickedQuestion = event.currentTarget;
        const answer = clickedQuestion.nextElementSibling;

        clickedQuestion.classList.toggle('active');

        if (answer.classList.contains('expanded')) {
            answer.classList.remove('expanded');
        } else {
            document.querySelectorAll('.special-faq-answer').forEach(a => {
                if (a !== answer) {
                    a.classList.remove('expanded');
                    a.previousElementSibling.classList.remove('active');
                }
            });

            answer.classList.add('expanded');
        }
    }

    faqQuestions.forEach(question => {
        question.addEventListener('click', toggleFAQ);
    });
});
// SPECIAL FAQ PORTION END



// SPECIAL FAQ COLOR
document.querySelectorAll('.special-faq-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('active'); 
    });

    item.addEventListener('mouseleave', () => {
    });

    item.addEventListener('focus', () => {
        item.classList.add('active');
    });

    item.addEventListener('blur', () => {
        item.classList.remove('active'); 
    });
});

// SPECIAL FAQ COLOR EMD



// BSPECIAL SLIDE
const slides = document.querySelectorAll('.bslide');
const textBox = document.getElementById('bspecial-img-text-box');
const textItems = document.querySelectorAll('#bspecial-all-container-left h5, #bspecial-all-container-mid h5');
let currentIndex = 0;

function changeSlide(index) {
    const currentSlide = slides[currentIndex].querySelector('img');
    currentSlide.classList.add('blur');
    textBox.classList.add('fade-out');

    setTimeout(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = index;
        slides[currentIndex].classList.add('active');

        const newSlide = slides[currentIndex].querySelector('img');
        newSlide.classList.remove('blur');

        const newText = textItems[index].getAttribute('data-text');
        textBox.innerText = newText;
        textBox.classList.remove('fade-out');
    }, 500); // Match this duration to your CSS transition duration
}

function initializeSlides() {
    slides[0].classList.add('active');
    textBox.innerText = textItems[0].getAttribute('data-text');
}

textItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const index = item.getAttribute('data-index');
        changeSlide(index);
    });
});

initializeSlides();
// BSPECIAL SLIDE END



// NEWS AND PRESS LINK
// const newsCardContainers = document.querySelectorAll('.news-card-container');

// newsCardContainers.forEach(container => {
//     const link = container.getAttribute('data-link');
//     container.addEventListener('click', function() {
//         window.open(link, '_blank'); 
//     });
//     container.style.cursor = 'pointer';
// });

// NEWS AND PRESS LINK END




// OUR PRODUCT
const productItems = document.querySelectorAll('#ourProduct-bottom-left-top-li');

const rightImg1 = document.getElementById('right-img-1');
const rightImg2 = document.getElementById('right-img-2');

function updateImages(item) {
    const images = item.getAttribute('data-images').split(',');
    const imageUrl1 = images[0].trim(); 
    const imageUrl2 = images[1].trim(); 
    
    rightImg1.style.filter = 'blur(8px)';
    rightImg2.style.filter = 'blur(8px)';
    
    setTimeout(() => {
        rightImg1.src = imageUrl1;
        rightImg2.src = imageUrl2;
        rightImg1.style.filter = 'blur(0)';
        rightImg2.style.filter = 'blur(0)';
    }, 500); 
}

if (productItems.length > 0) {
    updateImages(productItems[0]); 
}

productItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        updateImages(item); 
    });
});
// OUR PRODUCT END




// OUR PRODUCT ACCORDIANS
document.querySelectorAll('.ourProduct-accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');

        const accordionContent = button.nextElementSibling;

        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
});

// OUR PRODUCT ACCORDIANS END




// CHAT  IN WHATSAPP

function openWhatsAppChat() {
    const phoneNumber = '+92032963506'; 
    const message = 'Hi, Thanks for Contacting Us.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

document.getElementById('sticky-message-box').addEventListener('click', openWhatsAppChat);
document.getElementById('last-footer-top-left').addEventListener('click', openWhatsAppChat);

// CHAT  IN WHATSAPP END





// Counting Number
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counting-number');

    function startCounting(element, targetNumber) {
        let currentNumber = 0;
        const interval = 50; 
        const step = targetNumber / (2000 / interval); 

        const counter = setInterval(() => {
            currentNumber += step;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(counter);
            }
            
            if (targetNumber % 1 !== 0) {
                element.textContent = currentNumber.toFixed(1);
            } else {
                element.textContent = Math.round(currentNumber); x
            }
        }, interval);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const targetNumber = parseFloat(element.getAttribute('data-target'));
                startCounting(element, targetNumber);
                observer.unobserve(element); 
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// Counting Number End





// Cookies Bar
document.getElementById('cookie-settings').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('cookie-bar').classList.toggle('hidden');
});
document.getElementById('accept').addEventListener('click', function() {
    document.getElementById('cookie-bar').classList.add('hidden');
});
document.getElementById('decline').addEventListener('click', function() {
    document.getElementById('cookie-bar').classList.add('hidden');
});
/* COOKIES BAR End  */



// FOOTER EMAIL 

document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value.trim();
    const gmailDomain = '@gmail.com';
    
    if (emailValue) {
        if (emailValue.endsWith(gmailDomain)) {
            alert('Email submitted: ' + emailValue);
            emailInput.value = ''; 
        } else {
            alert('Please enter a valid email address ending with ' + gmailDomain);
        }
    } else {
        alert('Please enter a valid email address.');
    }
});

document.getElementById('email-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        document.getElementById('email-form').dispatchEvent(new Event('submit'));
    }
});
const footerIcon = document.querySelector('#footer-mid1-mid::after'); 
document.querySelector('#footer-mid1-mid').addEventListener('click', function(e) {

    if (e.target === this) {
        document.getElementById('email-form').dispatchEvent(new Event('submit'));
    }
});

// FOOTER EMAIL END



// Animated Heading
document.addEventListener('scroll', function() {
    const heading = document.querySelector('.animated-heading');
    const headingPosition = heading.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (headingPosition < windowHeight) {
        heading.classList.add('visible');
    }
});
// Animated Heading End





// Bspecial  Animation 

window.addEventListener('load', function() {
    const headings = document.querySelectorAll('#bspecial-all-container h5');

    const options = {
        root: null, 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const heading = entry.target;
                heading.style.opacity = '0'; 
                heading.style.transform = 'translateX(-100%)'; 
                heading.style.transition = 'none';
                
         
                setTimeout(() => {
                    heading.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; 
                    heading.style.opacity = '1'; 
                    heading.style.transform = 'translateX(0)';
                }, index * 100); 

   
                observer.unobserve(heading);
            }
        });
    }, options);


    headings.forEach((heading) => {
        observer.observe(heading);
    });
});

// Bspecial  Animation 






// RESOURCE
function resourceToggleDropdown() {
    var resourceDropdownMenu = document.getElementById('resource-dropdown-menu');
    if (resourceDropdownMenu.style.display === 'block') {
        resourceCloseDropdown();
    } else {
        resourceDropdownMenu.style.display = 'block'; 
    }
}
function resourceCloseDropdown() {
    var resourceDropdownMenu = document.getElementById('resource-dropdown-menu');
    resourceDropdownMenu.style.display = 'none'; 
}
document.addEventListener('click', function(event) {
    var resourceDropdownMenu = document.getElementById('resource-dropdown-menu');
    var resourceDropdownToggle = document.getElementById('resource-nav-item');
    if (resourceDropdownMenu && resourceDropdownToggle && 
        !resourceDropdownMenu.contains(event.target) && 
        !resourceDropdownToggle.contains(event.target)) {
        resourceCloseDropdown(); 
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        resourceCloseDropdown();
    }
});
// RESOURCE LINE 
const resourceH6Elements = document.querySelectorAll('#resource-product-dropdown-mid .resource-hoverable');
const resourceAnimatedLine = document.getElementById('resource-line');
const resourceDropdownContainer = document.getElementById('resource-product-dropdown-mid');
let lastHoveredResourceH6 = null; 
function resourceMoveLineToH6(h6) {
    const resourceH6Rect = h6.getBoundingClientRect(); 
    const resourceContainerRect = resourceDropdownContainer.getBoundingClientRect(); 
    const resourceH6Top = resourceH6Rect.top - resourceContainerRect.top;
    resourceAnimatedLine.style.height = `330px`; 
    resourceAnimatedLine.style.transform = `translateY(${resourceH6Top}px)`; 
}
if (resourceH6Elements.length > 0) {
    lastHoveredResourceH6 = resourceH6Elements[0];
    resourceMoveLineToH6(lastHoveredResourceH6);
}
resourceH6Elements.forEach(h6 => {
    h6.addEventListener('mouseenter', function() {
        if (lastHoveredResourceH6 !== this) { 
            lastHoveredResourceH6 = this; 
            resourceMoveLineToH6(this); 
        }
    });
});
resourceDropdownContainer.addEventListener('mouseleave', function() {
    if (lastHoveredResourceH6) {
        resourceMoveLineToH6(lastHoveredResourceH6); 
    } else {
        resourceAnimatedLine.style.height = '0px'; 
        resourceAnimatedLine.style.transform = `translateY(0px)`; 
    }
});
// RESOURCE IMAGE
const resourceImages = {
    "resource-product-dropdown-content1": "resource-nav1.png",
    "resource-product-dropdown-content2": "resource-nav2.png",
};
const resourceProductImage = document.getElementById('resource-product-image');
if (resourceProductImage) {
    resourceProductImage.style.backgroundImage = `url(${resourceImages["resource-product-dropdown-content1"]})`;
}
const resourceHoverableElements = document.querySelectorAll('.resource-hoverable');
resourceHoverableElements.forEach(element => {
    element.addEventListener('mouseover', function() {
        const resourceImageId = this.id; 
        const resourceImagePath = resourceImages[resourceImageId]; 
        if (resourceImagePath) {
            resourceProductImage.style.backgroundImage = `url(${resourceImagePath})`; 
        }
    });
});
document.addEventListener('click', function(event) {
    var resourceDropdownMenu = document.getElementById('resource-dropdown-menu');
    var resourceLink = document.getElementById('resource-first-nav-item');
    if (!resourceDropdownMenu.contains(event.target) && !resourceLink.contains(event.target)) {
        resourceDropdownMenu.style.display = 'none';
    }
});
// RESOURCE DROP DOWN END



// Industry Href
function updateNavLink() {
    const navLink = document.getElementById('industry-first-nav-item');
    if (window.innerWidth < 992) {
        navLink.href = "#specialization-second-container"; 
    } else {
        navLink.href = "#b-special-second-container"; 
    }
}

updateNavLink();

window.addEventListener('resize', updateNavLink);
// Industry Href End

// Enterprise Section images
const enterprise_images = [
    "Figma.png", "Flutter.png", "Dart.png", "MySQL.png", "Python.png", "MongoDB.png", 
    "Js.png", "React.png", "Angular.png", "Nodejs.png", "Rails.png", "PHP.png", 
    "Swift.png", "Kotlin.png", "Java.png", "Typescript.png", "Tensorflow.png", 
    "Docker.png", "Redis.png", "GraphQL.png", "PostgreSQL.png", "Firebase.png", 
    "Jupiter-notebook.png", "Sass.png"
];

let enterprise_currentIndex = 0;

const enterprise_imgContainer = document.getElementById("enterprise-img-container");

function enterprise_showImages() {
    // Clear current images
    enterprise_imgContainer.innerHTML = "";

    // Get the next 6 images to display
    const enterprise_imagesToShow = enterprise_images.slice(enterprise_currentIndex, enterprise_currentIndex + 6);

    // Create img elements and add them to the container
    enterprise_imagesToShow.forEach(src => {
        const enterprise_img = document.createElement("img");
        enterprise_img.src = src;  // Correct variable name
        enterprise_img.alt = "";    // Provide a meaningful alt attribute
        enterprise_imgContainer.appendChild(enterprise_img);  // Correct variable name
    });

    // Update the current index
    enterprise_currentIndex += 6;

    // Loop back to the start if we've reached the end of the array
    if (enterprise_currentIndex >= enterprise_images.length) {
        enterprise_currentIndex = 0;
    }
}

// Initial display
enterprise_showImages(); // Corrected function call

// Set an interval to change images every 3 seconds (3000 milliseconds)
setInterval(() => {
    enterprise_showImages(); // Corrected function call
}, 2000);



// CALENDLY
document.addEventListener('DOMContentLoaded', function() {
    const calendlyIcon = document.getElementById('calendly-icon-container');
    const calendlyPopup = document.getElementById('calendly-popup');
    const closeButton = document.getElementById('close-popup');
    calendlyIcon.addEventListener('click', function() {
        calendlyPopup.style.display = 'flex';
    });
    closeButton.addEventListener('click', function() {
        calendlyPopup.style.display = 'none';
    });
    calendlyPopup.addEventListener('click', function(event) {
        if (event.target === calendlyPopup) {
            calendlyPopup.style.display = 'none';
        }
    });
});
// CAlendly End