document.addEventListener("DOMContentLoaded", function() {
    const emailList = document.getElementById("emailList");

    // Retrieve subscription emails from local storage
    const emails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];

    // Display each email in the email list
    emails.forEach(function(email) {
        const listItem = document.createElement("li");
        listItem.className = "emailItem";
        listItem.textContent = email;
        emailList.appendChild(listItem);
    });
});