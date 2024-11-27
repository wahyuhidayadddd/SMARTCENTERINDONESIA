// Ringkasan Perbedaan
// Jenis Loop	Kapan Digunakan	Contoh
// for	Ketika jumlah iterasi sudah diketahui	Angka 0-10
// while	Ketika iterasi bergantung pada kondisi tertentu	Sampai pengguna menekan "Stop"
// do-while	Ketika minimal satu iterasi harus dijalankan	Input pengguna di awal
// forEach	Untuk iterasi elemen array	Semua buah dalam daftar
// for...of	Untuk elemen iterable (array, string, dsb.)	Semua mobil dalam daftar
// for...in	Untuk iterasi properti dari sebuah objek	Semua properti dalam objek


// 1.For Loop
// Digunakan ketika jumlah iterasi sudah diketahui sebelumnya.

// Contoh: Menampilkan angka 0-4
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4




// 2. While Loop
// Digunakan ketika jumlah iterasi belum diketahui, tetapi bergantung pada kondisi tertentu.

// Contoh: Menampilkan angka 1-5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++; // Increment untuk mencegah loop tak berujung
}
// Output: 1, 2, 3, 4, 5


// 3. Do-While Loop
// Serupa dengan while, tetapi dijamin akan menjalankan kode setidaknya sekali, meskipun kondisi awal false.
// Contoh: Menampilkan angka 1-5
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);
// Output: 1, 2, 3, 4, 5



// 4. For-Each Loop
// Digunakan untuk mengiterasi elemen dalam array (atau struktur data yang mendukung iterasi).

// Contoh: Menampilkan elemen array
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit) => {
    console.log(fruit);
});
// Output: Apple, Banana, Cherry




// 5. For...of Loop
// Digunakan untuk mengiterasi elemen dalam array atau objek yang bisa diiterasi.


// Contoh: Menampilkan elemen array
const cars = ["Toyota", "Honda", "BMW"];
for (const car of cars) {
    console.log(car);
}
// Output: Toyota, Honda, BMW




// 6. For...in Loop
// Digunakan untuk mengiterasi properti (key) dari sebuah objek.
// Contoh: Menampilkan properti dan nilainya
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York
