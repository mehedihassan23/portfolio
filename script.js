//toggle button
const menuBtn = document.getElementById("menuBtn");
const navLink = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLink.classList.toggle("active");
});

//theme button
const themeButton = document.querySelector(".theme-button")
const body = document.querySelector("body")
themeButton.addEventListener("click", () => {
	let bodyAttribute = body.getAttribute("theme")
	if(bodyAttribute){
		body.removeAttribute("theme");
	}else{
		body.setAttribute("theme", "dark");
	}
})

/* for visit every section and add/remove classlist with every section */

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-links li a")


window.addEventListener("scroll", () => {
     sections.forEach(section => {
		 let top = window.scrollY;
		 let offset = section.offsetTop - 150;
		 let height = section.offsetHeight;
		 let id = section.getAttribute('id');
		  
		 
		 if(top >= offset && top < offset+height){
			  navLinks.forEach(link => {
				  link.classList.remove("active");
				  document.querySelector(".nav-links li a[href*=" + id + "]").classList.add("active")
				 
			  })
		 }
	 })
	 
	 
	 //toggle sticky position
	 const navbar = document.querySelector(".navbar")
	 navbar.classList.toggle("sticky", window.scrollY > 100)
	 
	 

});



//auto type
new Typed(".auto-type", {
	strings: ["Web Developer", "front-end Developer", "React Developer"],
	typeSpeed: 150,
	backSpeed: 100,
	loop: true
})



//Form submission
emailjs.init("YQhbtXGPgi5g8ElUr");

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("service_sos0ha3", "template_04pkdr8", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (err) => {
      console.error(err);
      alert("Failed to send message!");
    });
});






