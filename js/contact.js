const form = document.querySelector ("#contact_form");

const fullName = document.querySelector ("#name");
const fullNameError = document.querySelector ("#name_error");

const email = document.querySelector("#email");
const emailError = document.querySelector ("#email_error");

const topic = document.querySelector ("#topic");
const topicError = document.querySelector ("#topic_error");

const message = document.querySelector ("#message");
const messageError = document.querySelector ("#message_error");

const emailCriteria = /\S+@\S+\.\S+/;
const patternMatches = emailCriteria.test(email);
   

function validateForm () {
    event.preventDefault();

function checkLength (value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
};

function validateEmail (email) {
    const emailCriteria = /\S+@\S+\.\S+/;
    const patternMatches = emailCriteria.test(email);
    return patternMatches;
}
    
if (checkLength(fullName.value, 4) === true) {
    fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

if (checkLength(topic.value, 14) === true) {
    topicError.style.display = "none";
    } else {
        topicError.style.display = "block";
    }

if (checkLength(message.value, 24) === true) {
    messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}
    
form.addEventListener("submit", validateForm)


