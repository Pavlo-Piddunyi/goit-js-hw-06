const form = document.querySelector('.login-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {};

    formData.forEach((value, key) => {
        userData[key] = value;
    });

    if (!userData.email || !userData.password) {
        alert('Увага! Поля для вводу повинні бути заповнені');
        return;
    }

    console.log(userData);
    event.target.reset();
});