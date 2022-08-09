function hasil() {
  var Nama = document.getElementById("Nama").value;
  var motor;
  document.getElementById("total").innerHTML = total;
  const aks = document.querySelector("input[name=r]:checked").value;
  const bill = document.querySelector("input[name=b]:checked").value;
  var harga_acc;
  var harga = motor + harga_acc;
  var bungdis = 0.1 * harga;
  var total;

  if (Nama == "Honda") {
    motor = 15000000;
  } else if (Nama == "Yamaha") {
    motor = 14000000;
  } else if (Nama == "Suzuki") {
    motor = 13000000;
  }

  if (aks == "1") {
    harga_acc = 450000;
    harga = motor + harga_acc;
    document.getElementById("harga").innerHTML = harga;
  } else if (aks == "2") {
    harga_acc = 250000;
    harga = motor + harga_acc;
    document.getElementById("harga").innerHTML = harga;
  } else if (aks == "3") {
    harga_acc = 300000;
    harga = motor + harga_acc;
    document.getElementById("harga").innerHTML = harga;
  }

  if (bill == "1") {
    bungdis = 0.1 * harga;
    total = harga - bungdis;
    document.getElementById("bungdis").innerHTML = bungdis;
    document.getElementById("total").innerHTML = total;
    alert("Pembayaran Tunai dapat diskon 10%");
  } else if (bill == "2") {
    bungdis = 0.15 * harga;
    total = harga + bungdis;
    document.getElementById("bungdis").innerHTML = bungdis;
    document.getElementById("total").innerHTML = total;
    alert("Pembayaran Kredit dapat bunga sebesar 15%");
  }
}

function hapus() {
  document.getElementById("harga").innerHTML = "";
  document.getElementById("jumlah").innerHTML = "";
  document.getElementById("bungdis").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  alert("Data sudah direset, Silahkan bisa isi ulang atau klik navbar untuk reload page");
}
