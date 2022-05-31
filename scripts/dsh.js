let data = JSON.parse(localStorage.getItem("Student_data"))

function displayData (data){

    data.forEach(function(elem){
        let tr = document.createElement("tr");

        let td1 = document.createElement("img")
        td1.src = elem.image

        let td2 = document.createElement("td")
        td2.innerText = elem.name

        let td3 = document.createElement("td")
        td3.innerText = elem.course

        let td4 = document.createElement("td")
        td4.innerText = elem.unit

        let td5 = document.createElement("td")
        td5.innerText = elem.batch

        tr.append(td1,td2,td3,td4,td5)

        document.querySelector("tbody").append(tr);
    })
}

displayData(data)
console.log(data)