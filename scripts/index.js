function Student(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = 'Ft-Web '+b;
}

let data = JSON.parse(localStorage.getItem("Student_Data")) || []

function storeData() {
    event.preventDefault()
    let form = document.getElementById("Students-data")
    let name = form.name.value
    let course = form.course.value
    let unit = form.unit.value
    let image = form.image.value
    let batch = form.batch.value

    let s1 = new Student(name,course,unit,image,batch)

    data.push(s1)

    localStorage.setItem("Student_data",JSON.stringify(data))
}

function calculate(data) {
    console.log(data)
}
calculate(data)