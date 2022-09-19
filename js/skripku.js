function dataSiswa() {
    //tangakapId_form
    let forms = document.getElementById('frm');
    let siswa = forms.nama.value;
    let profesi = forms.pekerjaan.value;
    let hb = forms.hobi.value;

    let data = `Data Siswa:
    <br/>Nama : ${siswa}
    <br/>Pekerjaan: ${profesi}
    <br/>Hobi: ${hb}`;
    document.getElementById('isi').innerHTML = data;

}