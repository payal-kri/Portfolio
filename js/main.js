/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHOW DROPDOWN ===============*/
const showDropdown = (dropdownId) => {
   const dropdown = document.getElementById(dropdownId)

   dropdown.addEventListener('click', () => {
      /* Show dropdown */
      dropdown.classList.toggle('show-dropdown')
   })
}
showDropdown('dropdown')

// contact section

// const form = document.querySelector("form");

// function sendEmail(){
//    Email.send({
//       Host : "smtp.mailendo.com",
//       Username : "diwakarkr6207867481@gmail.com",
//       Password : "925BCB04A8D6A905FD97F3CA4C644FBBF488",
//       To : 'diwakarkr6207867481@gmail.com',
//       From : "diwakarkr6207867481@gmail.com",
//       Subject : "This is the subject",
//       Body : "And this is the body"
//   }).then(
//     message => alert(message)
//   );
// }

// form.addEventListener("submit", (e)=>{
//    e.preventDefault();

//    sendEmail();
// })
