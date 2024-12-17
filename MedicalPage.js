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

    "resource-product-dropdown-content1": "blog1.png",
    "resource-product-dropdown-content2": "blog2.png",
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




// Li Active State
document.querySelectorAll('#medical-card-second-container-left ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('#medical-card-second-container-left ul li').forEach(li => {
            li.classList.remove('active');
        });
        this.classList.add('active');
    });
    item.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('hover');
        }
    });
    item.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.classList.remove('hover');
        }
    });
});




// CARD Load More
document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.querySelector('#medical-card-second-container-right button');
    const hiddenCardContainer = document.querySelector('#hidden-card-container');
    loadMoreButton.addEventListener('click', () => {
        hiddenCardContainer.style.display = 'block';
        loadMoreButton.style.display = 'none'; 
    });
});



// Card Filteration
document.addEventListener('DOMContentLoaded', function () {
    const filterItems = document.querySelectorAll('#medical-card-second-container-left li');
    const cards = document.querySelectorAll('#medical-card-containment');
    filterItems.forEach(item => {
        item.addEventListener('click', function () {
            const selectedCategory = this.textContent.toLowerCase();
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none'; 
                }
            });
        });
    });
});














window.onload = function() {
    const letters = document.querySelectorAll('#medical-header-main-container h1 span');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = 1; // Fade in
            letter.style.transform = 'translateX(0)'; // Move to original position
        }, index * 100); // Stagger each letter's animation
    });
};



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


// Back To Top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("backtotop-main-container").style.display = "block";
    } else {
        document.getElementById("backtotop-main-container").style.display = "none";
    }
};
document.getElementById("back-to-top-btn").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
// Back To Top