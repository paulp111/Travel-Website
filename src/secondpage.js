import './styles/secondpage.css';

let confirmationShown = false;

// Error Function
function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

// Success Function
function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// Confirm Function
function showConfirmationMessage(email) {
    const contentDiv = document.querySelector("#content-msg");
    let existingMessage = contentDiv.querySelector(".confirmation-message");
    if (existingMessage) {
        contentDiv.removeChild(existingMessage);
    }

    let confirmationMessage = document.createElement("p");
    if (!confirmationShown) {
        confirmationShown = true;
        confirmationMessage.textContent = "An E-Mail has been sent to " + email;
    } else {
        confirmationMessage.textContent = "A confirmation e-mail has already been sent";
        confirmationMessage.classList.add("already-sent");
    }

    confirmationMessage.classList.add("confirmation-message");
    confirmationMessage.style.opacity = "0";

    contentDiv.appendChild(confirmationMessage);

    let opacity = 0;
    const fadeInInterval = setInterval(() => {
        opacity += 0.1;
        confirmationMessage.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeInInterval);
        }
    }, 100);

    setTimeout(() => {
        let opacity = 1;
        const fadeOutInterval = setInterval(() => {
            opacity -= 0.1;
            confirmationMessage.style.opacity = opacity;
            if (opacity <= 0) {
                clearInterval(fadeOutInterval);
                contentDiv.removeChild(confirmationMessage);
            }
        }, 100);
    }, 5000);
}

// Validate E-Mail Function
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Validate Search Function
function validateSearchInputs(email) {
    const country = document.getElementById('country');
    const time = document.getElementById('time');
    const emailInput = document.getElementById('email');
    const phone = document.getElementById('phone');
    const arrivalDate = document.getElementById('arrival-date');

    const countryValue = country.value.trim();
    const timeValue = time.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phone.value.trim();
    const arrivalDateValue = arrivalDate.value.trim();

    let isValid = true;

    if (countryValue === '') {
        setError(country, 'Country is required');
        isValid = false;
    } else {
        setSuccess(country);
    }

    if (timeValue === '') {
        setError(time, 'Arrival is required');
        isValid = false;
    } else if (!/^\d+$/.test(timeValue)) {
        setError(time, 'Arrival must contain only numbers');
        isValid = false;
    } else {
        setSuccess(time);
    }

    if (emailValue === '') {
        setError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(emailInput);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone is required');
        isValid = false;
    } else if (!/^\d+$/.test(phoneValue)) {
        setError(phone, 'Phone must contain only numbers');
        isValid = false;
    } else {
        setSuccess(phone);
    }

    if (arrivalDateValue === '') {
        setError(arrivalDate, 'Arrival date is required');
        isValid = false;
    } else {
        setSuccess(arrivalDate);
    }
    if (isValid) {
        showConfirmationMessage(email);
    }
}


// Function Header
function createHeader() {
    const header = document.createElement("header");

    const headerLeft = document.createElement("div");
    headerLeft.classList.add("header-left");

    const logoLink = document.createElement("a");
    logoLink.href = "index.html";

    const logoImg = document.createElement("img");
    logoImg.src = "../src/media/logo1.png";
    logoImg.alt = "Logo";
    logoImg.classList.add("logo");

    logoLink.appendChild(logoImg);
    headerLeft.appendChild(logoLink);

    const travelTextLink = document.createElement("a");
    travelTextLink.href = "index.html";

    const travelText = document.createElement("h1");
    travelText.textContent = "TRAVEL";
    travelText.classList.add("travel-text");

    travelTextLink.style.textDecoration = "none";

    travelTextLink.appendChild(travelText);
    headerLeft.appendChild(travelTextLink);

    // Header rechts
    const headerRight = document.createElement("nav");
    headerRight.classList.add("header-right");

    const ul = document.createElement("ul");

    const menuItems = ["FAQ", "Legal Disclosure", "Booking"];

    for (const menuItemText of menuItems) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = menuItemText;

        if (menuItemText === "Booking") {
            li.classList.add("framed-menu-item");
        }

        li.appendChild(a);
        ul.appendChild(li);
    }

    headerRight.appendChild(ul);

    header.appendChild(headerLeft);
    header.appendChild(headerRight);

    document.body.prepend(header);
}

//Funcion Main 
function createPage() {
    const contentDiv = document.querySelector("#content");

    const mainContentContainer = document.createElement("div");
    mainContentContainer.classList.add("main-content-container");

    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "Landscapes of mountains, coastline and rolling hills";
    paragraph1.classList.add("main-content-text", "small-text");

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "SOUTH AFRICA";
    paragraph2.classList.add("main-content-text", "large-text");

    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "At its heart lies the stunning, beautiful Cape Town";
    paragraph3.classList.add("main-content-text", "small-text");

    mainContentContainer.appendChild(paragraph1);
    mainContentContainer.appendChild(paragraph2);
    mainContentContainer.appendChild(paragraph3);

    contentDiv.appendChild(mainContentContainer);
}

//Footer
function createFooter() {
    var ul = document.createElement('ul');
    ul.style.position = 'absolute';
    ul.style.top = '50%';
    ul.style.left = '50%';
    ul.style.transform = 'translate(-50%, -50%)';
    ul.style.margin = '0';
    ul.style.padding = '0';
    ul.style.display = 'flex';

    // Social Media Classes
    var socialNetworks = [
        { class: 'facebook', iconClass: 'fa fa-facebook' },
        { class: 'twitter', iconClass: 'fa fa-twitter' },
        { class: 'instagram', iconClass: 'fa fa-instagram' },
        { class: 'google', iconClass: 'fa fa-google-plus' }
    ];

    socialNetworks.forEach(function (network) {
        var li = document.createElement('li');
        li.style.listStyle = 'none';

        var a = document.createElement('a');
        a.className = network.class;
        a.href = '#';
        a.style.display = 'block';
        a.style.position = 'relative';
        a.style.width = '70px';
        a.style.height = '70px';
        a.style.lineHeight = '70px';
        a.style.fontSize = '40px';
        a.style.textAlign = 'center';
        a.style.textDecoration = 'none';
        a.style.color = '#242526';
        a.style.margin = '0 20px';
        a.style.transition = '.5s';
        ul.style.top = '94%';
        ul.style.left = '50%';
        ul.style.transform = 'translate(-50%, -50%)';

        a.addEventListener('mouseenter', function () {
            a.style.color = getHoverColor(network.class);
        });

        a.addEventListener('mouseleave', function () {
            a.style.color = '#242526';
        });

        var i = document.createElement('i');
        i.className = network.iconClass;
        i.setAttribute('aria-hidden', 'true');
        a.appendChild(i);

        li.appendChild(a);
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

function getHoverColor(className) {
    switch (className) {
        case 'facebook':
            return '#3b5998';
        case 'twitter':
            return '#1da1f2';
        case 'instagram':
            return '#c32aa3';
        case 'google':
            return '#dd4b39';
        default:
            return '#242526';
    }
}


// Create
document.addEventListener("DOMContentLoaded", function () {
    createHeader();
    createPage();
    createFooter();

    const searchForm = document.getElementById('search-menu');
    searchForm.addEventListener('submit', e => {
        e.preventDefault();
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value;
        validateSearchInputs(emailValue);
    });

    // Hintergrundbild und Video Button
    const background = document.getElementById("hero-background");
    const video = document.getElementById("hero-video");

    const playButton = document.createElement("button");
    playButton.textContent = "▶";
    playButton.className = "playButton";
    document.body.appendChild(playButton);

    playButton.addEventListener("click", function () {
        video.style.opacity = "1";
        video.style.display = "block";
        video.play();
        background.style.display = "none";
        playButton.style.display = "none";
        switchButton.style.display = "none";  // Button verstecken
    });
    video.addEventListener("play", function () {
        playButton.style.display = "none";
        switchButton.style.display = "none";
    });

    video.addEventListener("ended", function () {
        video.style.opacity = "0";

        setTimeout(function () {
            video.style.display = "none";
            const heroBackground1 = document.getElementById("hero-background1");
            heroBackground1.style.display = "block";
            heroBackground1.style.opacity = "0";

            setTimeout(function () {
                heroBackground1.style.transition = "opacity 0.5s ease-in-out";
                heroBackground1.style.opacity = "1";
                playButton.style.display = "block";
                switchButton.style.display = "block";  //Button anzeigen
            }, 50);
        }, 500);
    });



    //pic button
    const switchButton = document.createElement('button');
    switchButton.textContent = '➔';
    switchButton.className = "switchBackgroundButton";
    document.body.appendChild(switchButton);

    switchButton.addEventListener('click', switchBackground);


    // Bg change
    setInterval(() => {
        if (video.style.display !== "block") {
            switchBackground();
        }
    }, 5000);

});

const backgroundImages = [
    '../src/media/cape-town.png',
    '../src/media/capetown1.jpg',
    '../src/media/capetow4.jpg'
];

let currentBackgroundIndex = 0;
const backgroundElement1 = document.getElementById("hero-background1");
const backgroundElement2 = document.getElementById("hero-background2");
let usingFirstBackground = true;

function setBackground() {
    if (usingFirstBackground) {
        backgroundElement2.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;
    } else {
        backgroundElement1.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;
    }
}

function switchBackground() {
    if (usingFirstBackground) {
        backgroundElement2.style.opacity = '1';
        backgroundElement1.style.opacity = '0';
    } else {
        backgroundElement1.style.opacity = '1';
        backgroundElement2.style.opacity = '0';
    }
    usingFirstBackground = !usingFirstBackground;
    setTimeout(() => {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
        setBackground();
    }, 500);
}

setBackground();
