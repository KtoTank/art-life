function sendMail(){
    var params = {
      email: document.getElementById("email").value
    };
            const serviceId = "service_jug1fwd"
            const templateId = 'template_945d8oi'

            emailjs 
            .send(serviceId, templateId, params)
            .then(
                res => {
                    document.getElementById("email").value = "";
                    console.log(res);
                    alert("Сообщение отправлено успешно");
                }
            )
            .catch((err) => console.log(err));
    }

  function sendMailWithName(){
    var params = {
      email: document.getElementById("email").value ,
      name: document.getElementById("name").value ,
    };
            const serviceId = "service_jug1fwd"
            const templateId = 'template_945d8oi'

        emailjs 
        .send(serviceId, templateId, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                console.log(res);
                alert("Сообщение отправлено успешно");
            }
        )
        .catch((err) => console.log(err));
  }

