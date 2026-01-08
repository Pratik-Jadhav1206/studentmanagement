document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const studentName = document.getElementById("studentName").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const fatherName = document.getElementById("fatherName").value.trim();
  const motherName = document.getElementById("motherName").value.trim();
  const course = document.getElementById("course").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const branch = document.getElementById("branch").value;
  const address = document.getElementById("address").value.trim();

  // Basic validation (no empty field)
  if (
    studentName === "" ||
    mobile === "" ||
    email === "" ||
    fatherName === "" ||
    motherName === "" ||
    course === "" ||
    dob === "" ||
    gender === "" ||
    branch === "" ||
    address === ""
  ) {
    alert("All fields are required");
    return;
  }

  // Check duplicate student
  if (localStorage.getItem(studentName) !== null) {
    alert("Student already exists");
    return;
  }

  const studentValue =
    "Mobile:" +
    mobile +
    " | Email:" +
    email +
    " | Father:" +
    fatherName +
    " | Mother:" +
    motherName +
    " | Course:" +
    course +
    " | DOB:" +
    dob +
    " | Gender:" +
    gender +
    " | Branch:" +
    branch +
    " | Address:" +
    address;

  // Store in localStorage
  localStorage.setItem(studentName, studentValue);

  alert("Student Registered Successfully");

  setTimeout(function () {
    window.location.href = "viewall.html";
  }, 1000);
  document.getElementById("studentForm").reset();
});
