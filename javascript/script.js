const homeBtnEl = document.getElementById('home-btn');
const workBtnEl = document.getElementById("work-btn");
const aboutBtnEl = document.getElementById('about-btn');
const contactBtnEl = document.getElementById('contact-btn');

const homeSectionEl = document.getElementById("home-section");
const workSectionEl = document.getElementById("work-section");
const aboutSectionEl = document.getElementById("about-section");
const contactSectionEl = document.getElementById("contact-section");


homeBtnEl.addEventListener('click',()=>{
workSectionEl.classList.add('display-none');
aboutSectionEl.classList.add('display-none');
contactSectionEl.classList.add('display-none');
homeSectionEl.classList.toggle('display-none');

});

workBtnEl.addEventListener('click',()=>{
    homeSectionEl.classList.add('display-none');
    aboutSectionEl.classList.add('display-none');
    contactSectionEl.classList.add('display-none');
    workSectionEl.classList.toggle('display-none');
    
    });
    aboutBtnEl.addEventListener('click',()=>{
        workSectionEl.classList.add('display-none');
        homeSectionEl.classList.add('display-none');
        contactSectionEl.classList.add('display-none');
        aboutSectionEl.classList.toggle('display-none');
        
        });
        contactBtnEl.addEventListener('click',()=>{
            workSectionEl.classList.add('display-none');
            aboutSectionEl.classList.add('display-none');
            homeSectionEl.classList.add('display-none');
            contactSectionEl.classList.toggle('display-none');
            
            });