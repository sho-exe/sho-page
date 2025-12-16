

// 1. Define Multi-Dimensional Array studentData)
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]

let studentData = [
    ["Ahmad", 3, 3.5],
    ["Abu", 4, 3.6],
    ["Ali", 2, 3.2],
]



// 2. Create function to measure dean list eligibility using conditional statement


for (let i = 0; i < studentData.length; i++) {
    if (studentData[i][2] >= 3.5) {
        studentData[i].push("DEAN LIST");
    } else {
        studentData[i].push("NOT DEAN LIST");

    }
}

document.write("<div class='output-box'>");
document.write("<h2>Section 03 Result</h2>");

// 3.Create Looping (for loop) to print student data such name, credithours and current gpa and their eligibility (status)


// 4. print all the output, this one need to be in the loop

for (let i = 0; i < studentData.length; i++) {
    document.write("<div>");
    document.write("<b>Name : " + studentData[i][0] + "</b><br>");
    document.write("<b>Current GPA:" + studentData[i][2] + "</b><br>");


    if (studentData[i][3] == "DEAN LIST" ) {
        document.write("<b style='color:green'>Status: " + studentData[i][3] + "</b><br>");

    } else {
        document.write("<b style='color:red'>Status: " + studentData[i][3] + "</b><br>");

    }

    document.write("<hr style='border-top: 1px dotted #ccc;'>");
    document.write("</div>");

}

//here need to put closed-loop bracket
document.write("</div>");
