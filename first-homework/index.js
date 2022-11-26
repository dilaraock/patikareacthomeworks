import getData from "./app.js" // getData'yı import ettik. default olarak export ettiğimiz için getData yerine herhangi bir isimlendirmede koyabiliriz.

getData(1) // getData(userId) olan fonk. 1 değerini vererek çalıştırdık.
    .then(data => console.log(data)) // çıktılar.
    .catch(e => console.log(e)) // hata olursa verilecek çıktı