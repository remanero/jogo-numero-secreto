const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    //console.log(e.results[0][0].transcript);
    var varChute = e.results[0][0].transcript;
    //console.log(varChute);
    exibeChuteNaTela(varChute);
    verificaChute(varChute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())