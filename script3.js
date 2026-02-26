function maskEmail(email){
    return email.replace(email.slice(1, email.indexOf('@')-1), "*".repeat(email.indexOf('@')-2));
};
console.log(maskEmail('sfb.ab@yandex.ru'));