const xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=> {
    console.log(xhr.response)
})

xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
xhr.send(); // aschrons code 
//xhr.response // will be undefiended at first since it travels acrros the internet to get the response. 