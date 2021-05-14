let button = document.querySelector('.button');
let inputValue = document.querySelector('.search-box');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let hum = document.querySelector('.hum');


button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=567e0083642b41542d964f14aecd2f43')
        .then(response => response.json())
        .then(data => {
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            let humValue = data['main']['humidity'];
            let descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = Math.floor(tempValue - 273.15);
            hum.innerHTML = humValue;
            desc.innerHTML = descValue;

        })

        .catch(err => ("geen geldige invoer"))

})

