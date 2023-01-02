var lsLink = document.getElementById("lsLink");
var pcsLink = document.getElementById("pcsLink");
var ssLink = document.getElementById("ssLink");

var lsContent = document.getElementById("lServicesContent");
var pcsContent = document.getElementById("pcServicesContent");
var ssContent = document.getElementById("sServicesContent");


lsLink.addEventListener('click', function handleClick(event) {
    lsLink.setAttribute('style', 'text-decoration: underline;');
    pcsLink.setAttribute('style', 'text-decoration: none;');
    ssLink.setAttribute('style', 'text-decoration: none;');
    lsContent.setAttribute('style', 'display: flex;');
    pcsContent.setAttribute('style', 'display: none;');
    ssContent.setAttribute('style', 'display: none;');
});

pcsLink.addEventListener('click', function handleClick(event) {
    lsLink.setAttribute('style', 'text-decoration: none;');
    pcsLink.setAttribute('style', 'text-decoration: underline;');
    ssLink.setAttribute('style', 'text-decoration: none;');
    lsContent.setAttribute('style', 'display: none;');
    pcsContent.setAttribute('style', 'display: flex;');
    ssContent.setAttribute('style', 'display: none;');
});

ssLink.addEventListener('click', function handleClick(event) {
    lsLink.setAttribute('style', 'text-decoration: none;');
    pcsLink.setAttribute('style', 'text-decoration: none;');
    ssLink.setAttribute('style', 'text-decoration: underline;');
    lsContent.setAttribute('style', 'display: none;');
    pcsContent.setAttribute('style', 'display: none;');
    ssContent.setAttribute('style', 'display: flex;');
});

