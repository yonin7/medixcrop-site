/*DOM Elements */
const newTopSectionText = document.querySelector(".top-section-text");
const grid = document.querySelector(".grid");
const gridCell = document.querySelector(".grid-cell");
const seperatorX = document.querySelector(".seperator-x_container");
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const readMoreBtn = document.querySelector(".read-more-btn");
/* Consts */
//? Data consts
const mainGridData = [
  {
    icon: "/assets/icon-eye.svg",
    alt: "Medical-Eligibility-Icon",
    title: "Medical Eligibility",
    text: `Pertains to the review of medical policy definitions such as chronic, cosmetic or experimental. These definitions are constantly changing and often unclear. Applying them to a spcific claim requires medical expertise and a deep understanding of the patient's condition. Preforming this check is an essential part of the Medix claims review`,
  },
  {
    icon: "/assets/icon-doc.svg",
    alt: "Medical-Validity-Icon",
    title: "Medical Validity",
    text: `Ensures that proposed treatment is in fact recognised as a valid option for the patient's diagnosis and condition. Our physicians assess each claim and apply to it experience, expertise and internationally recognised treatment guidelines.`,
  },
  {
    icon: "/assets/icon-dc.svg",
    alt: "Medical-Necessity-Icon",
    title: "Medical Necessity",
    text: `Includes assessing whether or not a valid treatment is necessary given the patient's individual situation. As with validity, international guidelines are applied as well as specialist expertise and experience`,
  },
  {
    icon: "/assets/icon-clock.svg",
    alt: "Length-of-Stay-Management-Icon",
    title: "Length of Stay Management",
    text: `Our necessity and validity review applies to specific treatments and inpatient stay alike. Through this method, we are able to strike an optimal balance, keeping the patient admitted while required, and discharging immediately thereafter in order to prevent`,
  },
];

const menuLinks = [
  "Home",
  "Not Just Eligibility",
  "The Components",
  "Why MedixCrop?",
  "Contact US",
];

const sectionParagraph = `New and innoative treatment options are constantly being introduced into the medical field as a result of rigorous medical research and rapid technological advance .
The abundance of options complicates achieving quality medical care due to the difficulty of sifting througth the slew of available treatments.
The often result in the prescription of unnecessary treatments and procedures either due to a lack of available information or by succumbing to financial considerations.`;

const mobileScreenSizeY = 675;
const mobileScreenSizeX = 420;
newTopSectionText.innerText = sectionParagraph;

/* Functions */

//! this function creates the seperator line between grid elements.
const xSeperatorPrinter = () => {
  const seperatorXCont = document.createElement("div");
  const seperatorXEl = document.createElement("div");
  const seperatorXLogo = document.createElement("div");
  const seperatorXPic = document.createElement("img");
  seperatorXCont.classList.add("cell-seperator-x_container");
  seperatorXEl.classList.add("seperator-x");
  seperatorXLogo.classList.add("sep-logo_container");
  seperatorXPic.src = "/assets/sep-logo.svg";

  seperatorXLogo.appendChild(seperatorXPic);
  seperatorXCont.appendChild(seperatorXEl);
  seperatorXCont.appendChild(seperatorXLogo);
  return seperatorXCont;
};

//! this function creates the grid's elements at main section.
const gridPrinter = () => {
  return mainGridData.forEach((cell) => {
    const newDiv = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h4");
    const parh = document.createElement("p");

    newDiv.classList.add("grid-cell");
    image.src = cell.icon;
    image.alt = cell.alt;
    title.classList.add("grid-title");
    title.innerText = cell.title;
    parh.classList.add("grid-text");
    parh.innerText = cell.text;

    newDiv.appendChild(image);
    newDiv.appendChild(title);
    newDiv.appendChild(parh);
    const seperatorEl = xSeperatorPrinter();
    newDiv.appendChild(seperatorEl);
    grid.appendChild(newDiv);
  });
};

//! this function creates the list items for the navbar.
const menuList = () => {
  const menuEl = document.querySelector(".menu");
  menuLinks.forEach((item) => {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.classList.add("nav-link");
    link.innerText = item;
    link.href = "#";
    li.appendChild(link);
    menuEl.appendChild(li);
  });
};

//! this function cut and adjust the top section's paragraph text to mobile.
const topSectionParagraphText = () => {
  if (
    window.innerWidth < mobileScreenSizeX ||
    window.innerHeight < mobileScreenSizeY
  ) {
    newTopSectionText.innerText = sectionParagraph.split(".")[0];
  } else {
    newTopSectionText.innerText = sectionParagraph;
  }
};

/* Event Listeners */

let screenSize = window.addEventListener("resize", function (event) {
  const newTopSectionTextPrinter = () => {
    if (
      event.target.screen.width < mobileScreenSizeX ||
      event.target.screen.height < mobileScreenSizeY
    ) {
      newTopSectionText.innerText = sectionParagraph.split(".")[0];
    } else {
      newTopSectionText.innerText = sectionParagraph;
    }
  };
  newTopSectionTextPrinter();
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

/* Functions Calls */

menuList();
gridPrinter();
topSectionParagraphText();
