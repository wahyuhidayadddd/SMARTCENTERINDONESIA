// Arrow function adalah cara singkat untuk menulis fungsi di JavaScript. 
// Sintaks ini lebih ringkas dibandingkan dengan fungsi biasa, terutama jika fungsi tersebut hanya memiliki 
// satu baris.


// Sintaks Arrow Function
// Contoh dan Cara Menggunakan
// Gunakan arrow function seperti fungsi biasa, dengan memberikan argumen saat memanggilnya
let myFunction = (a, b) => a * b;

// Memanggil fungsi dengan argumen
let result = myFunction(5, 4);

console.log(result); // Output: 20


// Penjelasan
// myFunction(5, 4):
// Parameter a = 5.
// Parameter b = 4.
// Fungsi menghitung 5 * 4 dan mengembalikan 20.
// console.log(result):
// Menampilkan hasil yang dikembalikan oleh fungsi (20).



// Contoh Lain: Fungsi Tanpa Parameter
// Jika fungsi tidak membutuhkan parameter, tetap gunakan () sebelum =>.


let sayHello = () => "Hello, World!";
console.log(sayHello()); // Output: Hello, World!




// apan Menggunakan Arrow Function
// Fungsi Sederhana: Ketika fungsi hanya memiliki satu tugas sederhana.
// Callback Function: Dalam metode seperti map, filter, atau forEach.




