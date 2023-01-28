function getData() {
    let nama = document.getElementById("nama").value
    let email = document.getElementById("emm").value
    let subject = document.getElementById("subject").value
    let tanggal = document.getElementById("tanggal").value
    let job = document.getElementById("reli").value


    if (nama == "") {
        alert("Nama tidak boleh Kosong!")

    } else if (email == "") {
        alert("Email tidak boleh kosong!")
    } else if (subject == "") {
        alert("Harus di isi!")
    } else if (tanggal == "") {
        alert("Harus di isi!")
    } else if (job == "") {
        alert("Dipilih seusai option!")
    }

    const defaultEmail = "teguhfauzi55@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${nama}, Saya seorang ${job}. Ini ${tanggal}, Tolong hubungi saya di ${email}`
    mailTo.click()

    let audience = {
        nama,
        email,
        subject,
        tanggal,
        job
    }

    console.log(audience)
}
