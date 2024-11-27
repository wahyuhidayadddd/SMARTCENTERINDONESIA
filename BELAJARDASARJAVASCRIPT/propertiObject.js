// Objek adalah kumpulan properti yang tidak berurutan
// Properti adalah bagian paling penting dari objek JavaScript.

// Properti dapat diubah, ditambahkan, dihapus, dan beberapa bersifat hanya baca.

const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};

//1. Menambahkan properti baru ke objek
person.nationality = "English";

// Mencetak objek ke konsol
console.log(person);



// 2.Menghapus Properti
// Kata deletekunci menghapus properti dari suatu objek:


const biodata = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Menghapus properti 'age' dari objek
  delete biodata.age;
  
  // Mencetak objek untuk memverifikasi bahwa 'age' telah dihapus
  console.log(biodata);
  










//   Objek Bersarang
// Nilai properti dalam suatu objek dapat berupa objek lain:

const myObj = {
    name: "John",        // Properti 'name' dengan nilai string "John"
    age: 30,             // Properti 'age' dengan nilai angka 30
    myCars: {            // Properti 'myCars' dengan nilai objek
      car1: "Ford",      // Properti 'car1' di dalam objek 'myCars' dengan nilai "Ford"
      car2: "BMW",       // Properti 'car2' di dalam objek 'myCars' dengan nilai "BMW"
      car3: "Fiat"       // Properti 'car3' di dalam objek 'myCars' dengan nilai "Fiat"
    }
  };

  
//   Untuk mengakses properti di tingkat atas:
console.log(myObj.name); // Output: "John"
console.log(myObj.age);  // Output: 30




// Untuk mengakses properti dalam objek bersarang:


console.log(myObj.myCars.car1); // Output: "Ford"
console.log(myObj.myCars.car2); // Output: "BMW"
console.log(myObj.myCars.car3); // Output: "Fiat"




// Menambahkan Properti Baru:



myObj.gender = "Male";
console.log(myObj.gender); // Output: "Male"







// Menghapus Properti:

// Kamu bisa menghapus properti dari tingkat atas atau dari objek bersarang:


delete myObj.age;
console.log(myObj.age); // Output: undefined

delete myObj.myCars.car1;
console.log(myObj.myCars.car1); // Output: undefined
