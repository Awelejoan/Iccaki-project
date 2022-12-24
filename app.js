
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
    loader.style.display = 'none'
})

const name = document.getElementById('name');
const email = document.getElementById('email');
const comment = document.getElementById('textarea');
const phone = document.getElementById('phone');
const Form = document.getElementById('Form');
const message = document.querySelector('.message')

Form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (name.value === '' || email.value === '' || comment.value === '' || phone.value === '') {
        message.innerHTML = 'Fields cannot be empty'
        message.style.color = 'red'
        message.style.textAlign = 'center';
        message.style.fontSize = '20px'
        setTimeout(function () {
            message.style.display='none'}, 4000)
    }
    else if (phone.value.length <= 9) {
        message.innerHTML = 'Enter a valid phone number';
        message.style.color = 'red'
        message.style.textAlign = 'center';
        message.style.fontSize = '20px'
        setTimeout(function () {
            message.style.display='none'}, 4000)
    }
    else if (name.value.length <= 2) {
        message.innerHTML = 'Name too short';
        message.style.color = 'red'
        message.style.textAlign = 'center';
        message.style.fontSize = '20px'
        setTimeout(function () {
            message.style.display='none'}, 4000)
    } 
    else {
        message.innerHTML = 'Successful'
        message.style.color = 'green'
        message.style.textAlign = 'center';
        message.style.fontSize = '20px'
        setTimeout(function () {
            message.style.display='none'}, 5000)

    }

})