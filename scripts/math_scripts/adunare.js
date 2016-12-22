function getAndAdd() {
    let numar_1, numar_2;
    let firePlay = new Audio();

    function fire() {
        firePlay.src = "fire.mp3";
        $("firePlay");
        firePlay.play();
    }

    function getFirstNumber() {
        if ($("#FirstNumber").val().length > 0) {
            numar_1 = Number($("#FirstNumber").val());
            return Number(numar_1);
        }
        else
            return true;
    }

    function getSecondNumber() {
        if ($("#SecondNumber").val().length > 0) {
            numar_2 = Number($("#SecondNumber").val());
            return Number(numar_2);
        }
        else
            return true;
    }

    if ((getFirstNumber() == true) && (getSecondNumber() == true))
        $("#rezultatulAdunarii").html("Campurile sunt goale...");
    else if (((getFirstNumber() != true) && getSecondNumber() == true) || ((getFirstNumber() == true) && getSecondNumber() != true))
        $("#rezultatulAdunarii").html("Scrie inca o valoare...");
    else {
        $("#rezultatulAdunarii").html(Number(getFirstNumber() + getSecondNumber()));
        fire();
    }
}