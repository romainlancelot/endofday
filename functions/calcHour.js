function isEmpty(value) {
    return value == null || value == "";
}

function isBlank(value) {
    return isEmpty(value) || value.trim() == "";
}

function emptyHour(idPrintError, whereError) {
    res.innerHTML = "Please enter a valid hour for <b>" + whereError + "</b>";
    res.classList.add("alert", "alert-danger");
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    const res = document.getElementById("res") ;

    if (isBlank(document.getElementById("m1").value)) { document.getElementById("m1").value = "00"; }
    if (isBlank(document.getElementById("m2").value)) { document.getElementById("m2").value = "00"; }
    if (isBlank(document.getElementById("m3").value)) { document.getElementById("m3").value = "00"; }

    if (isBlank(document.getElementById("h1").value)) { emptyHour(res, "Hour 1"); return; }
    if (isBlank(document.getElementById("h2").value)) { emptyHour(res, "Hour 2"); return; }
    if (isBlank(document.getElementById("h3").value)) { emptyHour(res, "Hour 3"); return; }

    let time1 = parseInt(document.getElementById("h1").value) * 60 + parseInt(document.getElementById("m1").value);
    let time2 = parseInt(document.getElementById("h2").value) * 60 + parseInt(document.getElementById("m2").value);
    let time3 = parseInt(document.getElementById("h3").value) * 60 + parseInt(document.getElementById("m3").value);

    let timeDay = time3 + parseInt(document.getElementById("hDay").value) * 60 + parseInt(document.getElementById("mDay").value) - (time2 - time1);

    let hour = Math.floor(timeDay / 60);
    let minute = timeDay % 60;
    if (minute === 0) { minute = "00"; }
    if (minute < 10) { minute = "0" + minute; }
    if (hour < 10) { hour = "0" + hour; }

    res.innerHTML = "You can leave at : <b>" + hour + "h" + minute + "</b>";
    res.classList.add("alert", "alert-success");
});