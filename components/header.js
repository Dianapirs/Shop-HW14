
export default class Header {
    constructor (){

    }
    create() {
        const header = document.createElement('header');
        header.classList.add('header');
        const element = document.querySelector('.app');
        element.appendChild(header);
    }

    draw() {
        const logoWrapper = document.createElement('div');
        logoWrapper.classList.add('logo-wrapper');
        const header = document.querySelector('.header');
        header.appendChild(logoWrapper);
        const logoImg = new Image(200, 100);
        logoImg.src = './../img/logo.png';
        logoWrapper.appendChild(logoImg);
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        const contacts = document.createElement('strong');
        contacts.innerText = 'Our contacts: 80291234567, 80331234567';
        contactInfo.appendChild(contacts);
        header.appendChild(contactInfo);
    }

    init() {
        this.create();
        this.draw();
    }
}