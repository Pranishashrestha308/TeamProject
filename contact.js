let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login');
let closeLoginFormBtn = document.querySelector('#close-login-btn');
let menuBar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav');

let videoBtn = document.querySelectorAll('.vd-btn');
let mainVideo = document.querySelector('#vdo'); 

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
});

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    navbar.classList.remove('active');
});

closeLoginFormBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.vdo .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        mainVideo.src = src; 
        mainVideo.play(); 
    });
});

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
   
};


window.addEventListener('resize', () => {
    if (loginForm.classList.contains('active') || searchBar.classList.contains('active') || navbar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});


if (loginForm.classList.contains('active') || searchBar.classList.contains('active') || navbar.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
}