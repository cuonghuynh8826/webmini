//lay header
fetch('./layouts/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-container').innerHTML = data);

// lay footer
fetch('./layouts/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer-container').innerHTML = data);