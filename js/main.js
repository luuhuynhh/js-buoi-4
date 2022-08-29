/**
 * Bài 1:
 * Xuất 3 số theo thứ tự tăng dần
 */

var txtSo1 = document.getElementById("txtSo1");
var txtSo2 = document.getElementById("txtSo2");
var txtSo3 = document.getElementById("txtSo3");
var btnSapXep = document.getElementById("btnSapXep");
var txtSapXep = document.getElementById("txtSapXep");

btnSapXep.onclick = function () {
    // Đầu vào: Lấy input từ người dùng
    var so1 = Number(txtSo1.value);
    var so2 = Number(txtSo2.value);
    var so3 = Number(txtSo3.value);

    // Xử lý:
    var temp;
    if (so1 > so2) {
        temp = so1;
        so1 = so2;
        so2 = temp;
    }

    if (so1 > so3) {
        temp = so1;
        so1 = so3;
        so3 = temp;
    }

    if (so2 > so3) {
        temp = so2;
        so2 = so3;
        so3 = temp;
    }

    // Đầu ra:
    var res = so1 + " <= " + so2 + " <= " + so3;
    txtSapXep.value = res;
}

/**
 * Bài 2:
 * Gửi lời chào
 */

var slChonThanhVien = document.getElementById("slChonThanhVien");
var btnGuiLoiChao = document.getElementById("btnGuiLoiChao");
var txtLoiChao = document.getElementById("txtLoiChao");

btnGuiLoiChao.onclick = function () {
    // Đầu vào: Lấy input từ người dùng
    var thanhVien = slChonThanhVien.value;
    // Xử lý
    var loiChao = "Xin chào " + thanhVien;
    // Đầu ra: Hiển thị kết quả
    txtLoiChao.value = loiChao;
}

/**
 * Bài 3:
 * Đếm số chẵn lẻ
 */

var txtSoThu1 = document.getElementById("txtSoThu1");
var txtSoThu2 = document.getElementById("txtSoThu2");
var txtSoThu3 = document.getElementById("txtSoThu3");
var btnDemChanLe = document.getElementById("btnDemChanLe");
var txtDemChanLe = document.getElementById("txtDemChanLe");

btnDemChanLe.onclick = function () {
    // Đầu vào: Lấy input từ người dùng
    var so1 = Number(txtSoThu1.value);
    var so2 = Number(txtSoThu2.value);
    var so3 = Number(txtSoThu3.value);

    // Xử lý
    var chan = 0;
    if (so1 % 2 === 0) chan++;
    if (so2 % 2 === 0) chan++;
    if (so3 % 2 === 0) chan++;

    // Đầu ra: Hiển thị kết quả
    var res = "Có " + chan + " số chẵn, " + (3 - chan) + " số lẻ."
    txtDemChanLe.value = res;
}

/**
 * Bài 4:
 * Dự đoán loại tam giác
 */

var txtCanh1 = document.getElementById("txtCanh1");
var txtCanh2 = document.getElementById("txtCanh2");
var txtCanh3 = document.getElementById("txtCanh3");
var btnDuDoan = document.getElementById("btnDuDoan");
var txtDuDoan = document.getElementById("txtDuDoan");

btnDuDoan.onclick = function () {
    // Đầu vào: Lấy input từ người dùng
    var canh1 = Number(txtCanh1.value);
    var canh2 = Number(txtCanh2.value);
    var canh3 = Number(txtCanh3.value);

    // Xử lý:
    var res = "";
    if (canh1 + canh2 <= canh3 || canh1 + canh3 <= canh2 || canh2 + canh3 <= canh1) {
        res = "Không phải 3 cạnh của tam giác";
    }
    else if (canh1 === canh2 && canh2 === canh3) {
        res = "Tam giác đều";
    }
    else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
        res = "Tam giác cân";
    }
    else if (canh1 * canh1 + canh2 * canh2 === canh3 * canh3 || canh1 * canh1 + canh3 * canh3 === canh2 * canh2 || canh2 * canh2 + canh3 * canh3 === canh1 * canh1) {
        res = "Tam giác vuông";
    }
    else {
        res = "Tam giác khác";
    }

    // Đầu ra: Hiển thị kết quả
    txtDuDoan.value = res;
}