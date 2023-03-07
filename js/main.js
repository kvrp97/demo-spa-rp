function showHomeContent() {
    document.getElementById('about').style.display = "none";
    document.getElementById('sales').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById('home').style.display="block";
}

function showAboutContent() {
    document.getElementById('sales').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById('home').style.display="none";
    document.getElementById('about').style.display = "block";
}

function showSalesContent() {
    document.getElementById('about').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById('home').style.display="none";
    document.getElementById('sales').style.display = "block";
}

function showContactContent() {
    document.getElementById('about').style.display = "none";
    document.getElementById('sales').style.display = "none";
    document.getElementById('home').style.display="none";
    document.getElementById('contact').style.display = "block";
}