const mobil = ["bmw", "civic", "pajero", "innova"];
const index = mobil.indexOf("bmw");
if (index !== -1) {
    mobil.splice(index, 1);
}
console.log(mobil); // Output: ["civic", "pajero", "innova"]
