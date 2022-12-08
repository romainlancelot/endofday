document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let time1 = parseInt(document.getElementById("h1").value) * 60 + parseInt(document.getElementById("m1").value);
    let time2 = parseInt(document.getElementById("h2").value) * 60 + parseInt(document.getElementById("m2").value);
    let time3 = parseInt(document.getElementById("h3").value) * 60 + parseInt(document.getElementById("m3").value);

    let timeDay = time3 + parseInt(document.getElementById("hDay").value) * 60 + parseInt(document.getElementById("mDay").value) - (time2 - time1);

    let hour = Math.floor(timeDay / 60);
    let minute = timeDay % 60;
    if(minute === 0) { minute = "00"; }
    if(hour < 10) { hour = "0" + hour; }

    const res = document.getElementById("res") ;
    res.innerHTML = "You can leave at : <b>" + hour + "h" + minute + "</b>";
    res.classList.add("alert", "alert-success");
});