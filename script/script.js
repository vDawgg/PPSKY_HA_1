$(document).ready(function () {
    console.log("Loaded document!")
    if(navigator.userAgent.match(/Iphone/i) || navigator.userAgent.match(/Android/i)) {
        console.log("Phone detected!")
        $("#device").attr("content", "initial-scale = 0.8"); //.8 Makes the text readable but the table doesnt scale correctly on the index site
    }
})

function showProgress() {
    let val = $("#range").val()
    $("#progress").css('width', val+"%")
    $("#progress").text(val+"%")
    $("#todo").css('width', (100-val)+"%")
}