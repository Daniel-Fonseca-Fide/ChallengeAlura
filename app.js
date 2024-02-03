async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        alert('Texto copiado al portapapeles!!');
    } catch (e) {
        alert('No se pudo copiar el texto!!');
    }
}

function isTextValid(text) {
    const regex = /^[a-z\s]+$/;
    console.log(text);
    return regex.test(text);
}

function hideContainer() {
    let container = document.getElementById('text_container');
    document.getElementById('img_people').style.display = 'none';
    document.getElementById('text_img').style.display = 'none';
    document.getElementById('btn_copy').style.display = 'block';
    return container;
}

function encodeText() {
    let message = document.getElementById('box_txtarea').value;
    let feedback = document.getElementById('text_feedback');
    if (message === "" || message === null) {
        alert('Ingrese el texto a encriptar');
    } else if (!isTextValid(message)) {
        feedback.style.display = 'block';
    } else {
        feedback.style.display = 'none';
        let encoded = "";
        let container = hideContainer();
        
        for (let char of message) {
            console.log(char);
            switch (char) {
                case 'e':
                    encoded += "enter";
                    break;
                case 'i':
                    encoded += "imes";
                    break;
                case 'a':
                    encoded += "ai";
                    break;
                case 'o':
                    encoded += "ober";
                    break;
                case 'u':
                    encoded += "ufat";
                    break;
                default:
                    encoded += char;
            }
        }
        container.style.display = 'block';
        container.innerHTML = encoded;
    }
}

function decodeText() {
    let message = document.getElementById('box_txtarea').value;
    let feedback = document.getElementById('text_feedback');
    if (message === "" || message === null) {
        alert('Ingrese el texto a desencriptar');
    } else if (!isTextValid(message)) {
        feedback.style.display = 'block';
    } else {
        feedback.style.display = 'none';
        let decoded = "";
        let container = hideContainer();
        
        for (let i = 0; i < message.length; i++) {
            switch (message[i]) {
                case 'e':
                    decoded += "e";
                    i += 4;
                    break;
                case 'i':
                    decoded += "i";
                    i += 3;
                    break;
                case 'a':
                    decoded += "a";
                    i++;
                    break;
                case 'o':
                    decoded += "o";
                    i += 3;
                    break;
                case 'u':
                    decoded += "u";
                    i += 3;
                    break;
                default:
                    decoded += message[i];
            }
            console.log(decoded);
        }
        container.style.display = 'block';
        container.innerHTML = decoded;
    }
}

function copyDecodedText() {
    let text = document.getElementById('text_container').innerHTML;
    copyToClipboard(text);
}
