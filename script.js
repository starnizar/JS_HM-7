let Contact = function () {

    this.getName = function () {
        this.name = prompt('Введите ФИО')
        // verify
        this.getAge();
    },

    this.getAge = function () {
        this.age = prompt('Введите возраст')

        this.getPhone();
    },

    this.getPhone = function () {
        this.phone = prompt('Введите номер телефона')

        this.getMail();
    },

    this.getMail = function () {
        this.mail = prompt('Введите email')
    };
    this.getName()
}
function addContact () {
    Contacts.person = new Contact();
}

function contactsList () {
    alert(Contacts);
}

let Contacts = {

}