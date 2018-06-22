var regV = /error/gi;
var myArr;

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
    apiFake('one', getRandomArbitary(1, 3)), 
    apiFake('two', getRandomArbitary(1, 3)), 
    apiFake('three', getRandomArbitary(1, 3)), 
    apiFake('four', getRandomArbitary(1, 3)), 
    apiFake('five', getRandomArbitary(1, 3)), 
    apiFake('six', getRandomArbitary(1, 3)),
    apiFake('seven', getRandomArbitary(1, 3))])
        .then((data) => {
            myArr = data.join('');
            return myArr;
        })
        .then((data) => {
            console.log(data);
            apiFake(myArr + 'vvvvv', getRandomArbitary(1, 3))
                .then((data) => {
                    myArr = data;
                    console.log(myArr);
            })
            return apiFake(myArr + 'vvvvv', getRandomArbitary(1, 3));
        }).then((data) => {
            var n = Math.round(data.length / 3);
            var a = myArr.match(/.{1,13}/g);
            
            Promise.race([apiFake(a[0], getRandomArbitary(1, 3)), apiFake(a[1], getRandomArbitary(1, 3)), apiFake(a[2], getRandomArbitary(1, 3))])
                .then((data) => {
                    // console.log(data);
                    return data;
            })
        })
        .catch((err) => {
            console.log(err.message);
        });
