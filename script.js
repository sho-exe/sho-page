

// 1. Define Multi-Dimensional Array studentData)
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]

let test = document.getElementById("test")

let body = document.getElementById("body")

let studentData = [
    ["Ahmad", 3, 3.5],
    ["Abu", 4, 3.6],
    ["Ali", 2, 3.2],
]

function addData() {
    let studName = document.getElementById("studName").value;
    let creditHours = document.getElementById("creditHours").value;
    let currentGPA = document.getElementById("currentGpa").value;

    studentData.push([studName, creditHours, currentGPA]);
    // alert(studName);
    // alert(creditHours);
    // alert(currentGPA);
    measureDean();
    refreshList();

    
}

function refreshList() {
    let result = document.getElementById("result");
    result.innerHTML = "";

    for (let i = 0; i < studentData.length; i++) {
        result.innerHTML += `
            <div>
                <b>Name: ${studentData[i][0]}</b><br>
                <b>Current GPA: ${studentData[i][2]}</b><br>
                <b class="${studentData[i][3] === 'DEAN LIST' ? 'eligible' : 'not-eligible'}">
                    Status: ${studentData[i][3]}
                </b>
                <hr>
            </div>
        `;
    }
}





// 2. Create function to measure dean list eligibility using conditional statement

function measureDean() {
    for (let i = 0; i < studentData.length; i++) {
        if (studentData[i][2] >= 3.5) {
            studentData[i].push("DEAN LIST");
        } else {
            studentData[i].push("NOT DEAN LIST");

        }
    }

}





