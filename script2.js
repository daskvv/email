function maskEmail(email){
    let sobaka = email.indexOf("@");
    let doSobaki = email.slice(1, sobaka-1);
    let stars = "";
    for (email; sobaka-2; sobaka--){
        stars += "*";
    };
    email = email.replace (doSobaki,stars);
    return email; 
};
console.log (maskEmail('sfd.ab@yandex.ru'));