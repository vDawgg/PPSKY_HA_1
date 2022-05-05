$(document).ready(function () {
    console.log("Loaded document!")
    if(navigator.userAgent.match(/Iphone/i) || navigator.userAgent.match(/Android/i)) {
        console.log("Phone detected!")
        $("#device").attr("content", "initial-scale = 0.8");
    }
})

function showProgress() {
    let val = $("#range").val()
    $("#progress").css('width', val+"%")
    $("#progress").text(val+"%")
    $("#todo").css('width', (100-val)+"%")
}
