document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dugme").addEventListener('click', (e) => {
        e.preventDefault(); 
        let ime = document.getElementById('firstName').value.trim();
        let prezime = document.getElementById('LastName').value.trim();
        let emailAddress = document.getElementById('emailAddress').value.trim();
        let message = document.getElementById('message').value.trim();
        document.getElementById('errorMessageName').innerHTML = '';
        document.getElementById('errorMessageLastNme').innerHTML = '';
        document.getElementById('errorMessageEmail').innerHTML = '';
        document.getElementById('errorMessageText').innerHTML = '';
        let valid = true;
        if (ime === '') {
            document.getElementById('errorMessageName').innerHTML = 'This field is mandatory!<br>';
            valid = false;
        }
        if (prezime === '') {
            document.getElementById('errorMessageLastNme').innerHTML = 'This field is mandatory!<br>';
            valid = false;
        }
        if (emailAddress === '') {
            document.getElementById('errorMessageEmail').innerHTML = 'This field is mandatory!<br>';
            valid = false;
        }
        if (message === '') {
            document.getElementById('errorMessageText').innerHTML = 'This field is mandatory!<br>';
            valid = false;
        }

        if (valid) {
            alert("Message sent successfully!");
            // ovde bi kasnije išlo eventualno slanje poruke preko backenda
        }
    });
});
