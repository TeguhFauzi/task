
let addProject = []
function getData(event) {
    event.preventDefault()

    // Deklarasi variabel DOM Seleksi
    let title = document.getElementById("title").value
    let start = new Date(document.getElementById("startDate").value)
    let end = new Date(document.getElementById("endDate").value)
    let desc = document.getElementById("description").value
    let img = document.getElementById("imageUp").files


    // Seleksi data Checkbox
    let java = document.getElementById("Java").checked ? document.getElementById("Java").value : false
    let javascript = document.getElementById("Javascript").checked ? document.getElementById("Javascript").value : false
    let PHP = document.getElementById("PHP").checked ? document.getElementById("PHP").value : false
    let Phyton = document.getElementById("Phyton").checked ? document.getElementById("Phyton").value : false


    // Conditional Validation
    if (title == "") {
        alert("Tidak boleh Kosong!")
    } else if (start == "") {
        alert("Tidak boleh kosong!")
    } else if (end == "") {
        alert("Tidak Boleh Kosong!")
    } else if (desc == "") {
        alert("Tidak Boleh Kosong!")
    } else if (java == false && javascript == false && PHP == false && Phyton) {
        alert("Harap diCentang!")
    } else {


        // Convert image to blob object
        img = URL.createObjectURL(img[0]);


        // Duration
        let start = new Date(document.getElementById("startDate").value)
        let end = new Date(document.getElementById("endDate").value)
        let Duration = end - start

        // convertDuration
        let Years = Math.floor(Duration / (12 * 30 * 24 * 3600 * 1000))
        let Month = Math.floor(Duration / (30 * 24 * 3600 * 1000))
        let Week = Math.floor(Duration / (7 * 24 * 3600 * 1000))
        let Day = Math.floor(Duration / (24 * 3600 * 1000))
        console.log(Duration)

        if (Duration < 0) {
            alert("Mustahillll Brodi!")
        }
        else if (Years > 0) {
            Duration = Years + " Years"
        }
        else if (Month > 0) {
            Duration = Month + " Months"
        }
        else if (Week > 0) {
            Duration = Week + " Weeks"
        }
        else if (Day > 0) {
            Duration = Day + " Days"
        }


        //Push data
        let dataBlog = {

            title,
            start,
            end,
            desc,
            img,
            java,
            javascript,
            PHP,
            Phyton,
            Duration,
            posting: new Date()

        }
        addProject.push(dataBlog)
        console.log(addProject)
        showData()
    }

}

// Posted
const agos = (upTime) => {
    const timePost = upTime
    const Now = new Date()
    const between = Now - timePost
    const betweenMonths = Math.floor(between / (30 * 24 * 60 * 60 * 1000));
    const betweenWeeks = Math.floor(between / (7 * 24 * 60 * 60 * 1000));
    const betweenDays = Math.floor(between / (24 * 60 * 60 * 1000));
    const betweenHours = Math.floor(between / (60 * 60 * 1000));
    const betweenMinutes = Math.floor(between / (60 * 1000))
    const betweenSeconds = Math.floor(between / (1000));

    switch (true) {
        case betweenMonths > 1:
            return `${betweenMonths} Months ago`
        case betweenMonths > 0:
            return `${betweenMonths} A month ago`
        case betweenWeeks > 1:
            return `${betweenWeeks} Weeks ago`
        case betweenWeeks > 0:
            return `${betweenWeeks} A week ago`
        case betweenDays > 1:
            return `${betweenDays} Days ago`
        case betweenDays > 0:
            return `${betweenDays} A day ago`
        case betweenHours > 1:
            return `${betweenHours} Hours ago`
        case betweenHours > 0:
            return `${betweenHours} A hour ago`
        case betweenMinutes > 1:
            return `${betweenMinutes} Minutes ago`
        case betweenMinutes > 0:
            return `${betweenMinutes} A minute ago`
        case betweenSeconds > 1:
            return `${betweenSeconds} Seconds ago`
        case betweenSeconds > 0:
            return `${betweenSeconds} A second ago`
        default:
            return `Just now`

    }
    
}


const form = document.getElementById('submtt')
form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault()
    form.reset()
})

function showData() {
    for (let x = 0; x < addProject.length; x++) {
        document.getElementById("cardblog").innerHTML +=

            `<div class="cardBlog">
            <div class="gantK">
                <img class="gant" src="${addProject[x].img}">
            </div>
            <br>
            <div class="blogD">
                <a href="" class="judl"><h5>"${addProject[x].title}"</h5></a>
                <p>Posted at : ${agos(addProject.posting)}</p>
                        <br>
                        <p>Duration :${addProject[x].Duration} </p>
                        <br>
                        <br>
                <br>
                <p>${addProject[x].desc}</p>
            <div class="icc">
              ${addProject[x].java ? `<i id="Java" class="fa-brands fa-java"></i>` : ""} 
              ${addProject[x].javascript ? `<i id="Javascript"class="fa-brands fa-php"></i>` : ""}
              ${addProject[x].PHP ? `<i id="PHP"class="fa-brands fa-square-js"></i>` : ""}
              ${addProject[x].Phyton ? `<i id="Phyton" class="fa-brands fa-python"></i>` : ""}
        </div>
        <br><br>
            <div class="buttt">
                <button class="ed">Edit</button>
                <button class="del">Delete</button>
            </div>
    
            </div>
    </div>
            </div>`
          
    }
}
