window.onload = loadStudents;

// Load students from localStorage and populate table
function loadStudents() {
    const tableBody = document.getElementById("studentTable");
    tableBody.innerHTML = ""; // clear old rows

    if (localStorage.length === 0) {
        const row = tableBody.insertRow();
        row.innerHTML = `<td colspan="11" style="text-align:center;">No student records found.</td>`;
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        const name = localStorage.key(i);
        const data = parseStudentData(localStorage.getItem(name));

        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${name}</td>
            <td>${data.mobile}</td>
            <td>${data.email}</td>
            <td>${data.father}</td>
            <td>${data.mother}</td>
            <td>${data.course}</td>
            <td>${data.dob}</td>
            <td>${data.gender}</td>
            <td>${data.branch}</td>
            <td>${data.address}</td>
            <td>
                <button onclick="editStudent('${name}')">Edit</button>
                <button onclick="deleteStudent('${name}')">Delete</button>
            </td>`;
    }
}

// Helper: Convert localStorage string into an object
function parseStudentData(dataString) {
    const dataArr = dataString.split(" | ");
    const dataObj = {};
    dataArr.forEach(item => {
        const [key, value] = item.split(":");
        dataObj[key.trim().toLowerCase()] = value ? value.trim() : "";
    });
    return dataObj;
}

// Delete student
function deleteStudent(name) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
        localStorage.removeItem(name);
        loadStudents();
    }
}

// Redirect to edit.html with student name
function editStudent(name) {
    window.location.href = `edit.html?name=${encodeURIComponent(name)}`;
}

// Search student by name
function searchStudent() {
    const text = document.getElementById("search").value.trim().toLowerCase();
    const table = document.getElementById("studentTable");

    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        const studentName = row.cells[0]?.innerText.toLowerCase() || "";
        row.style.display = studentName.includes(text) ? "" : "none";
    }
}
