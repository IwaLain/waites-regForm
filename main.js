const submitBtn = document.querySelector('#submit-btn')
const form = document.querySelector('form')

const emailField = document.querySelector('#email-field')
const passwordField = document.querySelector('#password-field')

const validationEmailCheck = document.querySelector('#validation-EmailCheck')
const validationPasswordCheck = document.querySelector('#validation-PasswordCheck')


const isEmail = (str) => {
    const value = str.trim()
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!value || value === '') {
        return 'Email is required.'
    }
    else if (!re.test(value)) {
        return 'Email is not valid.'
    }
    else {
        return ''
    }
}

const isPassword = (str) => {
    const value = str.trim()

    if (!value || value === '') {
        return'Password is required.'
    }
    else if (value.length < 3) {
        return 'Password must contain at least 3 characters.'
    }
    else if (!/\d+/.test(value)) {
        return 'Password must contain at least 1 number.'
    }
    else if (!/[a-zA-Z]/.test(value)) {
        return 'Password must contain at least 1 letter.'
    }
    else {
        return ''
    }
}

const validate = (e) => {
    let errorMsg

    switch (e.id) {
        case 'email-field':
            errorMsg = isEmail(e.value)

            if (!errorMsg) {
                validationEmailCheck.style.display = 'none'
                e.classList = 'form-control is-valid'
                submitBtn.disabled = false
                return true
            }
            else {
                validationEmailCheck.style.display = 'block'
                validationEmailCheck.textContent = errorMsg
                validationEmailCheck.classList = 'invalid-feedback'
                e.classList = 'form-control is-invalid'
                submitBtn.disabled = true
                return false
            }
        case 'password-field':
            errorMsg = isPassword(e.value)

            if (!errorMsg) {
                validationPasswordCheck.style.display = 'none'
                e.classList = 'form-control is-valid'
                submitBtn.disabled = false
                return true
            }
            else {
                validationPasswordCheck.style.display = 'block'
                validationPasswordCheck.textContent = errorMsg
                validationPasswordCheck.classList = 'invalid-feedback'
                e.classList = 'form-control is-invalid'
                submitBtn.disabled = true
                return false
            }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (form.id === 'reg-form') {
        if(validate(emailField) && validate(passwordField)) {
            /* requests here */
        }
        else {
            submitBtn.disabled = true
        }
    }
    else if (form.id === 'passwordReset-form') {
        if(validate(emailField)) {
            /* requests here */
        }
        else {
            submitBtn.disabled = true
        }
    }
})
