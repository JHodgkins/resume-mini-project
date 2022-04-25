function sendMail(contactForm) {
    emailjs.send("service_p5btvn8","template_olvv1tg",{
        to_name: "James",
        from_name: contactForm.name.value,
        project_request: contactForm.projectsummary.value,
        from_email: contactForm.emailaddress.value,
        })
        .then (
            function(response) {
                console.log("sucess", response);
            },
            function(error) {
                console.log("error", error);
            }
        );
        document.getElementById("contact-form").reset();
        return false;  // To block from loading a new page
}