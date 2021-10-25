const validationEmailCheck = document.querySelector('#validation-EmailCheck')
const validationPasswordCheck = document.querySelector('#validation-PasswordCheck')
const submitBtn = document.querySelector('#submit-btn')


const validateEmail = (e) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid, errorMsg

    if (!e.value || e.value === '') {
        isValid = false
        errorMsg = 'Email is required.'
    }
    else if (!re.test(e.value)) {
        isValid = false
        errorMsg = 'Email is not valid.'
    }
    else {
        isValid = true
        errorMsg = ''
    }

    if (isValid) {
        validationEmailCheck.style.display = 'none'
        e.classList = 'form-control is-valid'
        submitBtn.disabled = false
    }
    else {
        validationEmailCheck.style.display = 'block'
        validationEmailCheck.textContent = errorMsg
        validationEmailCheck.classList = 'invalid-feedback'
        e.classList = 'form-control is-invalid'
        submitBtn.disabled = true
    }
}

const validatePassword = (e) => {
    let isValid, errorMsg

    if (!e.value || e.value === '') {
        isValid = false
        errorMsg = 'Password is required.'
    }
    else if (e.value.length < 3) {
        isValid = false
        errorMsg = 'Password must contain at least 3 characters.'
    }
    else if (!/\d+/.test(e.value)) {
        isValid = false
        errorMsg = 'Password must contain at least 1 number.'
    }
    else if (!/[a-zA-Z]/.test(e.value)) {
        isValid = false
        errorMsg = 'Password must contain at least 1 letter.'
    }
    else {
        isValid = true
        errorMsg = ''
    }

    if (isValid) {
        validationPasswordCheck.style.display = 'none'
        e.classList = 'form-control is-valid'
        submitBtn.disabled = false
    }
    else {
        validationPasswordCheck.style.display = 'block'
        validationPasswordCheck.textContent = errorMsg
        validationPasswordCheck.classList = 'invalid-feedback'
        e.classList = 'form-control is-invalid'
        submitBtn.disabled = true
    }
}