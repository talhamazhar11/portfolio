// Smooth Scrolling Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

// Open Project Details
function openProjectDetails(projectId) {
    alert("Details for " + projectId);
}

// Contact Form Submission
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Example of form submission, this could be enhanced with an actual API call
    if (name && email && message) {
        alert("Thank you for reaching out, " + name + ". We will get back to you soon.");
    } else {
        alert("Please fill in all fields.");
    }
}
