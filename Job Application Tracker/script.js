// Get the form

const form = document.getElementById("jobForm");


// Get input fields

const companyInput = document.getElementById("company");

const jobTitleInput = document.getElementById("jobTitle");

const locationInput = document.getElementById("location");

const dateInput = document.getElementById("date");

const statusInput = document.getElementById("status");


// Get message element

const message = document.getElementById("message");


// Get dashboard elements

const totalApplications =
    document.getElementById("totalApplications");

const appliedApplications =
    document.getElementById("appliedApplications");

const interviewApplications =
    document.getElementById("interviewApplications");

const selectedApplications =
    document.getElementById("selectedApplications");


// Application counters

let totalCount = 0;

let appliedCount = 0;

let interviewCount = 0;

let selectedCount = 0;


// Form submit event

form.addEventListener("submit", function (event) {

    // Prevent page refresh

    event.preventDefault();


    // Get values from form

    const company =
        companyInput.value.trim();

    const jobTitle =
        jobTitleInput.value.trim();

    const location =
        locationInput.value.trim();

    const date =
        dateInput.value;

    const status =
        statusInput.value;


    // Validate form

    if (
        company === "" ||
        jobTitle === "" ||
        location === "" ||
        date === "" ||
        status === ""
    ) {

        message.textContent =
            "Please fill all the details!";

        message.className = "error";

        return;
    }


    // Increase total count

    totalCount++;


    // Check application status

    if (status === "Applied") {

        appliedCount++;

    }


    if (status === "Interview") {

        interviewCount++;

    }


    if (status === "Selected") {

        selectedCount++;

    }


    // Update dashboard

    totalApplications.textContent =
        totalCount;

    appliedApplications.textContent =
        appliedCount;

    interviewApplications.textContent =
        interviewCount;

    selectedApplications.textContent =
        selectedCount;


    // Show success message

    message.textContent =
        "Application submitted successfully!";

    message.className = "success";


    // Clear form

    form.reset();

});