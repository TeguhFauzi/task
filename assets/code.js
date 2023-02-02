function getData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let option = document.getElementById("option").value
    let yourMessage = document.getElementById("yourMessage").value


    if (name == "") {
        alert("Tidak boleh Kosong!")
    } else if (email == "") {
        alert("Tidak boleh kosong!")
    } else if (phone == "") {
        alert("Tidak Boleh Kosong!")
    } else if (option == "") {
        alert("Tidak Boleh Kosong!")
    } else if (yourMessage == "") {
        alert("Tidak Boleh Kosong!")
    }

    const defaultEmail = "teguhfauzi55@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${defaultEmail}?subject=${option}&body=Halo nama saya ${name},${yourMessage}. Ini nomor HP saya ${phone}, Tolong hubungi saya di ${email}`
    mailTo.click()

    let audience = {
        name,
        email,
        phone,
        option,
        yourMessage
    }

    console.log(audience)
}
