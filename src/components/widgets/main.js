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

  var Email = {
    send: function (a) {
      return new Promise(function (n, e) {
        (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = 'Send');
        var t = JSON.stringify(a);
        Email.ajaxPost('https://smtpjs.com/v3/smtpjs.aspx?', t, function (e) {
          n(e);
        });
      });
    },
    ajaxPost: function (e, n, t) {
      var a = Email.createCORSRequest('POST', e);
      a.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
        (a.onload = function () {
          var e = a.responseText;
          null != t && t(e);
        }),
        a.send(n);
    },
    ajax: function (e, n) {
      var t = Email.createCORSRequest('GET', e);
      (t.onload = function () {
        var e = t.responseText;
        null != n && n(e);
      }),
        t.send();
    },
    createCORSRequest: function (e, n) {
      var t = new XMLHttpRequest();
      return (
        'withCredentials' in t
          ? t.open(e, n, !0)
          : 'undefined' != typeof XDomainRequest
          ? (t = new XDomainRequest()).open(e, n)
          : (t = null),
        t
      );
    },
  };

  Email.send({
    // Host: 'smtp.elasticemail.com',
    // Username: 'jsosa@globaluy.com',
    // Password: 'Javiviso1583',

    SecureToken: 'c17b5ee4-0e47-4812-816f-c83b7ebd073c',
    To: 'jcarlos.sosagomez@gmail.com',
    From: 'jcarlos.sosagomez@gmail.com',
    Subject: `You have a new message`,
    Body: `Sender: ${email} <br> Message: ${message}`,
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

// SMTP Elastic email password: 5F31796581FF4B644AEBADF068773C874B29
