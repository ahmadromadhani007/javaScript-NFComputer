function hitung(opr){
    //tangkap request element2 form
    let frm = document.getElementById('calcForm');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) return alert('Masukkan angkanya !');

    //struktur kendali untuk mengoperasikan tombol2
    switch (opr) {
        case '+': total = a1 + a2; break;
        case '-': total = a1 - a2; break;
        case '*': total = a1 * a2; break;
        case '/': total = a1 / a2; break;
        case '^': total = Math.pow(a1, a2); break;
        default: break;
        
    }

    //menepatkan hasil operasi aritmatika pada element form hasil
    frm.hasil.value = total; //penempatan hasil
}