function maskEmail(email){
    let sobaka = email.indexOf('@');
    let doSobaki = email.slice(0,sobaka);
    let posleSobaki = email.slice(sobaka);
    let pervaiaBukva = doSobaki.slice(0,1);
    let poslednaiaBukva = doSobaki.slice(-1);
    let stars = '*'.repeat(doSobaki.length-2);
    return pervaiaBukva + stars + poslednaiaBukva + posleSobaki;
}
console.log(maskEmail('sfb.ab@yandex.ru'));