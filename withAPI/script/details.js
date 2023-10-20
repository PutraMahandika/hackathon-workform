const inputAngka1 = document.getElementById("tambahkursi");
const inputAngka2 = document.getElementById("tambahmeja");
const tombolTambah = document.getElementById("button-addon1tambah");
const tombolKurang = document.getElementById("button-addon1kurang");
let totalHarga = 715;

function tambah(){
    let nilaiInput = parseInt(inputAngka1.value);
    let hargaKursi = "";
    if(nilaiInput >= 3){
        nilaiInput = 3;
        inputAngka1.value = nilaiInput;
    }else{
        nilaiInput += 1;
        inputAngka1.value = nilaiInput;
        hargaKursi = "Rp "+ ((nilaiInput*5)) + ".000";
        document.getElementById("totalkursi").innerHTML = hargaKursi;
        totalHarga += 5;
        document.getElementById("totalHarga").innerHTML = "<b>Rp 1." + totalHarga + ".000</b>";
    }
}

function kurang(){
    let nilaiInput = parseInt(inputAngka1.value);
    let hargaKursi = "";
    if(nilaiInput == 0){
        nilaiInput = 0;
        inputAngka1.value = nilaiInput;
        hargaKursi = "";
        document.getElementById("totalkursi").innerHTML = hargaKursi;
    }else{
        nilaiInput -= 1;
        inputAngka1.value = nilaiInput;
        hargaKursi = "Rp "+ (nilaiInput*5) + ".000";
        document.getElementById("totalkursi").innerHTML = hargaKursi;
        totalHarga -= 5;
        document.getElementById("totalHarga").innerHTML = "<b>Rp 1." + totalHarga + ".000</b>";
    }
}

function tambah1(){
    let nilaiInput = parseInt(inputAngka2.value);
    let hargaMeja = "";
    if(nilaiInput >= 3){
        nilaiInput = 3;
        inputAngka2.value = nilaiInput;
    }else{
        nilaiInput += 1;
        inputAngka2.value = nilaiInput;
        hargaMeja = "Rp "+ (nilaiInput*10) + ".000";
        document.getElementById("totalmeja").innerHTML = hargaMeja;
        totalHarga += 10;
        document.getElementById("totalHarga").innerHTML = "<b>Rp 1." + totalHarga + ".000</b>";
    }
    return nilaiInput;
}

function kurang1(){
    let nilaiInput = parseInt(inputAngka2.value);
    let hargaMeja = "";
    if(nilaiInput <= 0){
        nilaiInput = 0;
        inputAngka2.value = nilaiInput;
        hargaMeja = "";
        document.getElementById("totalmeja").innerHTML = hargaMeja;
    }else{
        nilaiInput -= 1;
        inputAngka2.value = nilaiInput;
        hargaMeja = "Rp "+ (nilaiInput*10) + ".000";
        document.getElementById("totalmeja").innerHTML = hargaMeja;
        totalHarga -= 10;
        document.getElementById("totalHarga").innerHTML = "<b>Rp 1." + totalHarga + ".000</b>";
    }
}