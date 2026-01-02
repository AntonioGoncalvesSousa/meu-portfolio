'use strict';

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); })

//Activating Modal-testimonial

const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}

//Activating modal-testimonial
for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

        testimonialsModalFunc();
    })
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

//Activating Modal-projects

const projectsItem = document.querySelectorAll('[data-filter-item]');
const modalProjectsContainer = document.querySelector('[data-modal-container-projects]');
const modalProjectsCloseBtn = document.querySelector('[data-modal-close-btn-projects]');
const overlayProjects = document.querySelector('[data-overlay-projects]');

const modalProjectsImg = document.querySelector('[data-modal-projects-img]');
const modalProjectsTitle = document.querySelector('[data-modal-projects-title]');
const modalProjectsText = document.querySelector('[data-modal-projects-text]');
const modalProjectsLink = document.querySelector('[data-modal-projects-link]');

// Function to toggle modal-projects

const projectsModalFunc = function () {
    modalProjectsContainer.classList.toggle('active');
    overlayProjects.classList.toggle('active');
}

//Activating modal-projects
for (let i = 0; i < projectsItem.length; i++) {
    projectsItem[i].addEventListener('click', function () {
        modalProjectsImg.src = this.querySelector('[data-projects-img]').src;
        modalProjectsImg.alt = this.querySelector('[data-projects-img]').alt;
        modalProjectsTitle.innerHTML = this.querySelector('[data-projects-title]').innerHTML;
        modalProjectsText.innerHTML = this.querySelector('[data-projects-desc]').innerHTML;
        modalProjectsLink.href = this.querySelector('[data-projects-link]').href;

        projectsModalFunc();
    })
}

//Activating close button in modal-projects
modalProjectsCloseBtn.addEventListener('click', projectsModalFunc);
overlayProjects.addEventListener('click', projectsModalFunc);

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () { elementToggleFunc(this); });

for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

//Enabling filter button for larger screens 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener('click', function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;

    })
}

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else {
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation 

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {
        navigationLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        for (let j = 0; j < pages.length; j++) {
            if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
                pages[j].classList.add('active');
            } else {
                pages[j].classList.remove('active');
            }
        }

        window.scrollTo(0, 0);
    });
}

// Activating Modal-email

const modalEmailContainer = document.querySelector('[data-modal-email-container]');
const modalEmailCloseBtn = document.querySelector('[data-modal-close-btn-email]');
const overlayEmail = document.querySelector('[data-overlay-email]');

// Function to toggle modal-email

const modalEmailFunc = function () {
    modalEmailContainer.classList.toggle('active');
    overlayEmail.classList.toggle('active');
}

// Getting experience time

const experienceElement = document.querySelector('[data-experience]');

const calculateExperience = function () {
    const startDate = new Date(2024, 0, 10); // 10 de Janeiro de 2024
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    // Ajusta se o dia atual é menor que o dia de início
    if (today.getDate() < startDate.getDate()) {
        months--;
    }

    // Ajusta se os meses ficaram negativos
    if (months < 0) {
        years--;
        months += 12;
    }

    // Formata o texto
    let text = '';
    if (years > 0) {
        text += years + (years === 1 ? ' ano' : ' anos');
    }
    if (months > 0) {
        if (text) text += ' e ';
        text += months + (months === 1 ? ' mês' : ' meses');
    }
    if (!text) {
        text = 'Menos de 1 mês';
    }

    return text;
}

if (experienceElement) {
    experienceElement.textContent = calculateExperience();
}
