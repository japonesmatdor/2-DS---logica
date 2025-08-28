document.getElementById('contactForm').addEventListener('submit', function (event){EventTarget.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key)=> {
        data[key] = value;
    }); 

    console.log(data);

    fetch('https://script.google.com/macros/s/AKfycbzzIeLoGek1mrdsLCGfzudwh1P6N3fPsd3I-wXOw7zvRzuUiFnOVYAYIV73vk9Qu0ce/exec', {
        method: 'POST',
        body: new  URLSearchParams(data)
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.result === 'succes'){
            alert ('Dados enviados com sucesso!');
            event.target.reset();
        }else if (responseData.result === 'rror'&& responseData.message === 'Email already exists'){
            alert('Erro: O email já existe.');
        } else {
            alert('Erro ao enviar os dados.');
        }
    })
    .catch(erro => console.error('Error:', error));
});
