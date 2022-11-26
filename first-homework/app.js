
import axios from "axios";

const getUsers = (userId) => { // 1 adet number değişken alan fonk. yazıyoruz bu fonksiyon bize axios ile birlikte veri çekmemize yarıyor. Callback-Functions dersinde gösterildiği şekilde.
    return new Promise(async(resolve, reject) => { // resolve olursa bize data dönecek resolve(data);
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + userId); // userId eklenme sebebi girilecek sayıya göre usersı getirmesi
        resolve(data);
    });
};

const getPost = (userId) => {
    return new Promise(async(resolve, reject) => { // resolve olursa bize data dönecek resolve(data);
        const { data } = await axios(`https://jsonplaceholder.typicode.com/posts?id=${userId}`); // userId eklenme sebebi girilecek sayıya göre usersı getirmesi ödevde verilen usersId değiştirildi birden fazla post getiriyordu.
        resolve(data);
    });
};

async function getData(userId) {
    try {
        const users = await getUsers(userId); // return ederken kullanmak için users değişkenine getUsers çıktısını atıyoruz.
        const posts = await getPost(userId); // return ederken kullanmak için posts değişkenine getPost çıktısını atıyoruz.

        const array = [users, posts] // yeni bir array oluşturup dönen değerleri içerisine atıyoruz.
        return array; // arrayi çıktı olarak dönüyoruz.

    } catch (e) {
        console.log(e); // hata varsa hata mesajı yazdırılacak.
    }
}


export default getData; // default olarak export ediyoruz.