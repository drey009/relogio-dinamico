function clock(){
    const clockElement = document.querySelector('.clock');
    const currentTime = new Date();
    const hours = 20;
    // const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hoursFormat = hours.toString().padStart(2, '0');
    const minutesFormat = minutes.toString().padStart(2, '0');
    const secondsFormat = seconds.toString().padStart(2, '0');
    clockElement.textContent = `${hoursFormat}:${minutesFormat}:${secondsFormat}`;

    // const frase = document.querySelector('.frase');
    // dia = new Array('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado');
    // mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')

    // hoje = new Date()
    // frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`
    var img = document.querySelector('#myImg');
    
    if (hours >= 0 && hours < 5){
        document.body.style.backgroundImage = 'url(images/00am.jfif)';
        img.src = "images/bixinho.png";
    }
    else if (hours >= 5 && hours < 8){
        document.body.style.backgroundImage = 'url(images/5am.jfif)';
        img.src = "images/bixinho.png";


    }
    else if (hours >= 8 && hours < 10){
        document.body.style.backgroundImage = 'url(images/8am.png)';
        img.src = "images/bixinho.png";


    }
    else if (hours >= 10 && hours < 12){
        document.body.style.backgroundImage = 'url(images/12pm.jfif)';
        img.src = "images/bixinho.png";


    }
    else if (hours >= 12 && hours < 15){
        document.body.style.backgroundImage = 'url(images/15pm.jfif)';
        img.src = "images/bixinho2.png";

    }
    else if (hours >= 15 && hours < 17){
        document.body.style.backgroundImage = 'url(images/17pm.jfif)';
        img.src = "images/bixinho2.png";

    }
    else if (hours >= 17 && hours < 19){
        document.body.style.backgroundImage = 'url(images/19_30pm.jfif)';
        img.src = "images/bixinho3.png";


    }
    else{ // esse nao ta funcionando
        document.body.style.backgroundImage = 'url(images/20pm.png)';
        img.src = "images/bixinho3.png";

    
    }

}   
setInterval(clock, 1000);
