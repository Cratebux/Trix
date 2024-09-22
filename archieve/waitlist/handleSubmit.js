// Handle form submission
let form = document.querySelector('.form');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modalClose');

form.addEventListener('submit', (e) => {
  e.preventDefault();
    uploadData();
    });

    modalClose.addEventListener('click', () => {
      modal.close();
        setTimeout(() => {
            window.location.href = '/waitlist/vote.html';
              }, 2000);
              });

async function uploadData() {
    try {
        const nameInput = document.querySelector('#email');
        const phoneInput = document.querySelector('#phone');
        const userPreferenceSelect = document.querySelector('#user_preference');

        const formdata = new FormData();
        formdata.append("email", nameInput.value);
        formdata.append("phone", phoneInput.value);
        formdata.append("info", userPreferenceSelect.value);

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        const response = await fetch("https://app.trix.com.ng/api/waitlist", requestOptions);
        const result = await response.json();

        if (response.ok) {
            console.log(result);
            modal.showModal();
        } else {
            alert("Error uploading data: " + result);
        }
    } catch (error) {
        console.error("Error uploading data:", error);
        alert("An unexpected error occurred. Please try again later.");
    }
}