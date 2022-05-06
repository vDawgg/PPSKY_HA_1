function showProgress() {
    let val = $("#range").val()
    $("#progress").css('width', val+"%")
    $("#progress").text(val+"%")
    $("#todo").css('width', (100-val)+"%")
}
