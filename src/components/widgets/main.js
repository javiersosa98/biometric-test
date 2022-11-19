document.getElementById('contact-form').addEventListener('submit', sendEmail);

// Send Email Info
function sendEmail(e) {
  e.preventDefault();

  //   Get input Values
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  console.log(email, message);

  // (<HTMLFormElement>document.querySelector('.contact-form')).reset();

  console.log(typeof window.Email);

  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'jcarlos.sosagomez@gmail.com',
    Password: 'pkctvjpnsqoskvat',

    // SecureToken: '3fa6018a-b074-4d91-98e6-4274c07e6c41',
    To: 'jcarlos.sosagomez@gmail.com',
    From: `${email}`,
    Subject: `You have a new message`,
    Body: `${message}`,
  }).then((message) => alert('Mail sent successfully!'));

  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

// function submitForm(e) {
//   e.preventDefault();

//   //   Get input Values
//   let email = document.getElementById('email').value;
//   let message = document.getElementById('message').value;

//   // (<HTMLFormElement>document.querySelector('.contact-form')).reset();

//   document.getElementById('email').value = '';
//   document.getElementById('message').value = '';

//   sendEmail(email, message);
// }
