//NavBar Stuff
const animation = document.querySelector('.animation');

let lastClickedSection = localStorage.getItem('lastClickedSection');

if (lastClickedSection !== 'Home') {
    lastClickedSection = 'Home';
  }

const sectionWidth = 16; 

document.addEventListener("DOMContentLoaded", function () {
  const sectionPositions = {
    "Home": 0,
    "About": 1,
    "Services": 2,
    "Gallery": 3,
    "Reviews": 4,
    "Contact" : 5,
  };

  const sectionWidth = 12; // Adjust this value according to your layout
  const animation = document.querySelector(".animation");
  let lastClickedSection = localStorage.getItem('lastClickedSection') || 'Home';

  const navLinks = document.querySelectorAll('nav li');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const section = link.textContent.trim();
      lastClickedSection = section;
      localStorage.setItem('lastClickedSection', lastClickedSection);
      const position = sectionPositions[section] * sectionWidth;
      animation.style.width = `${sectionWidth}vw`;
      animation.style.left = `${position}vw`;
    });

    link.addEventListener('mouseenter', () => {
      const section = link.textContent.trim();
      const position = sectionPositions[section] * sectionWidth;
      animation.style.width = `${sectionWidth}vw`;
      animation.style.left = `${position}vw`;
    });

    link.addEventListener('mouseleave', () => {
      animation.style.left = `${sectionPositions[lastClickedSection] * sectionWidth}vw`;
    });
  });
  
 


  const defaultSection = lastClickedSection || 'Home';
  const defaultPosition = sectionPositions[defaultSection] * sectionWidth;

  animation.style.width = `${sectionWidth}vw`;
  animation.style.left = `${defaultPosition}vw`;
});
//NavBar Stuff ends here
//scroll shit
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

const getActiveSection = () => {
  let activeSection = 'Home'; // Default to 'Home' if none are in the viewport
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      activeSection = section.getAttribute('id');
    }
  }
  return activeSection;
};

window.onscroll = () => {
  const activeSection = getActiveSection();
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector('nav a[href*=' + activeSection + ']').classList.add('active');

  // Move the animation div to the right section within the ul
  const position = Array.from(navLinks).indexOf(document.querySelector('nav a[href*=' + activeSection + ']')) * 12;
  animation.style.left = `${position}vw`; // Adjust this based on your layout
};

// Initial setup
window.onload = () => {
  const defaultSection = window.scrollY === 0 ? 'Home' : getActiveSection();
  document.querySelector('nav a[href*=' + defaultSection + ']').classList.add('active'); // Set the default section to 'active'
  window.onscroll(); // Trigger scroll event handler on page load
};
//Background Nav Shinanigans 
const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });
  //gallery

  //gallery end
  //contact section
  const textarea = document.getElementById ('textarea');
   textarea.style.resize = 'none';
  //contact section end