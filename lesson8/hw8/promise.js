
var regV = /error/gi;
var myStr;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitary(min, max){
    return Math.random() * (max - min) + min;
}

function apiFake (message, sec) {
    return new Promise((res, rej)=>{
        if(message.match(regV)) {
            return rej(new Error('String contains error'));
        }
        setTimeout(()=> {
            return res(message);
        }, sec * 1000);
    });
}

Promise.all([
    apiFake('one', getRandomArbitary(1, 10)), 
    apiFake('two', getRandomArbitary(1, 10)), 
    apiFake('three', getRandomArbitary(1, 10)), 
    apiFake('four', getRandomArbitary(1, 10)), 
    apiFake('five', getRandomArbitary(1, 10)), 
    apiFake('six', getRandomArbitary(1, 10)),
    apiFake('seven', getRandomArbitary(1, 10))])
        .then((data) => {
            myStr = data.join('');
            return myStr;
            console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        })


        
// apiFake('myStr', 2)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })





