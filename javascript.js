function validationForm() {
    var judul = document.registration.judul;
    var no = document.registration.no;
    var jenis = document.registration.jenis;
    var datepicker = document.registration.datepicker;

    if (judul_valid(judul)) {
        if (no_valid(no)) {
             if (jenis_valid(jenis)) {
                if (datepicker_valid(datepicker)) {                              
                    return true;                                                   
                }
            }
        }
        
    }
    return false;
}

function judul_valid(judul) {
    var judul_len = judul.value.length;
    if (judul_len == 0) {
        alert("Judul tidak boleh kosong");
        return false;
    }

    else if (judul_len <= 9) {
        alert("Judul buku minimal 10 karakter");
        return false;
    }

    else {
        judul.focus();
        return true;
    }
}

function no_valid(no) {
    var numbers = /^[0-9]+$/;
    var num_len = no.value.length;
    if (num_len == 0) {
        alert("No Buku tidak boleh kosong");
        return false;
    }

    else if (num_len != 5) {
        alert("No Buku harus angka dan 5 digit");
        return false;
    }

    else if (no.value.match(numbers)) {
        no.focus();
        return true;
    }
}

function jenis_valid(jenis) {
    if (jenis.selectedIndex < 1) {
        alert("Pilih jenis buku");
        jenis.focus();
        return false;
    }
    else {
        return true;
    }
}

function datepicker_valid(datepicker) {
    var datepicker_len = datepicker.value.length;
    if (datepicker_len == 0) {
        alert("Pilih tanggal pengembalian");
        return false;
    }

    else {
        datepicker.focus();
        return true;
    }
}