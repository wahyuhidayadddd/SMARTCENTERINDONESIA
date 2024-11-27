let bensin = prompt("Ada bensin? (ya/tidak)").toLowerCase();

if (bensin === "ya") {
    let aki = prompt("Aki baik? (ya/tidak)").toLowerCase();
    if (aki === "ya") {
        let starter = prompt("Starter berfungsi? (ya/tidak)").toLowerCase();
        alert(starter === "ya" ? "Cek sistem pengapian atau mesin." : "Periksa starter motor.");
    } else {
        alert("Cek aki, mungkin perlu diganti.");
    }
} else {
    alert("Isi bensin terlebih dahulu.");
}
