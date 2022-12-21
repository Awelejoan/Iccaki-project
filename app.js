const NavBar = document.querySelector('.nav-bar')
const Btn = document.querySelector('.fa-navicon')
Btn.addEventListener('click', function () {
    NavBar.classList.toggle('.active')
})

const toTop = document.querySelector('.to-top');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                toTop.classList.add('active');
            } else {
                toTop.classList.remove('active')
            }
        })
const loader = document.getElementById('preloader')
window.addEventListener('load', function () {
    loader.style.display ='none'
})