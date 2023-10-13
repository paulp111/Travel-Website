import './styles/styles.css';

function createHeader() {
  const header = document.createElement("header");

  //Logo und Text TRAVEL
  const headerLeft = document.createElement("div");
  headerLeft.classList.add("header-left");

  const logoImg = document.createElement("img");
  logoImg.src = "../src/media/logo1.png";
  logoImg.alt = "Logo";
  logoImg.classList.add("logo");

  const travelText = document.createElement("h1");
  travelText.textContent = "TRAVEL";
  travelText.classList.add("travel-text");

  headerLeft.appendChild(logoImg);
  headerLeft.appendChild(travelText);

  // Header rechts (Menü)
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

// FOOTER
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


//Funcion Main 
function createPage() {
  const contentDiv = document.querySelector("#content");

  const mainContentContainer = document.createElement("div");
  mainContentContainer.classList.add("main-content-container");

  const paragraph1 = document.createElement("p");
  paragraph1.textContent = "Your next vacation ...";
  paragraph1.classList.add("main-content-text", "small-text");

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = "Explore The World";
  paragraph2.classList.add("main-content-text", "large-text");

  const paragraph3 = document.createElement("p");
  paragraph3.textContent = "... just one click away";
  paragraph3.classList.add("main-content-text", "small-text");

  mainContentContainer.appendChild(paragraph1);
  mainContentContainer.appendChild(paragraph2);
  mainContentContainer.appendChild(paragraph3);

  contentDiv.appendChild(mainContentContainer);
}
// See Hotels Button
function createButton() {
  const button = document.createElement("button");
  button.textContent = "See Hotels";
  button.classList.add("button");

  document.body.appendChild(button);

  button.addEventListener("click", function () {
    window.location.href = "secondpage.html";
  });
}

//Create
document.addEventListener("DOMContentLoaded", function () {
  createButton();
  createHeader();
  createPage();
  createFooter();
});

