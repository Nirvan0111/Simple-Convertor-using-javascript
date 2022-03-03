document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.2046;
})

document.getElementById("feetInput").addEventListener("input", e => {
    let feet = e.target.value;
    document.getElementById("cmsOutput").innerHTML = feet * 30.48;
})
document.getElementById("ltrInput").addEventListener("input", e => {
    let liters = e.target.value;
    document.getElementById("mlsOutput").innerHTML = liters * 1000;
})
document.getElementById("mbInput").addEventListener("input", e => {
    let gigabyte = e.target.value;
    document.getElementById("gbOutput").innerHTML = gigabyte / 1024;
})