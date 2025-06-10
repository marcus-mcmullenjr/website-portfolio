/* var navLinks = document.getElementById("navLinks");

function showMenu(){
	navLinks.style.right = "0";
}
			
function hideMenu(){
	navLinks.style.right = "-200px";
} */
            
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}