export default function validateName(str) {
    let result = true; 
    //имя состоит только из разрешенных символов
    if (!/^[a-zA-Z0-9_-]+$/.test(str)) {
        result = false;
    }
    
    //имя не содержит более трех цифр подряд
    if (/\d{4,}/.test(str)) {
        result = false;
    }
    
    //имя не начинается и не заканчивается цифрой, подчеркиванием или тире
    if (/^[\d_-]|[\d_-]$/.test(str)) {
        result = false;
    }
    
    return result;
}