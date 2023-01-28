function getData() {
    let nama = document.getElementById("nama").value
    let email = document.getElementById("emm").value
    let subject = document.getElementById("subject").value
    let tanggal = document.getElementById("tanggal").value
    let job = document.getElementById("reli").value


    if (nama == "") {
        console.log("Nama tidak boleh Kosong.")

    } else if (email == "") {
        console.log("Email tidak boleh kosong!")
    } else if (subject == "") {
        console.log("Harus di isi!")
    } else if (tanggal == "") {
        console.log("Harus di isi!")
    } else if (job == "") {
        console.log("Dipilih seusai option!")
    }

    const defaultEmail = "teguhfauzi55@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${nama},saya seorang ${job}hari ini tanggal ${tanggal}tolong hubungin saya ${email}`
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
