function getAndSub() {
    let numar_1, numar_2;
    let firePlay = new Audio();

    function fire() {
        firePlay.src = "fire.mp3";
        $("firePlay");
        firePlay.play();
    }

    function getFirstNumber() {
        if ($("#FirstNumberM").val().length > 0) {
            numar_1 = Number($("#FirstNumberM").val());
            return Number(numar_1);
        }
        else
            return true;
    }

    function getSecondNumber() {
        if ($("#SecondNumberM").val().length > 0) {
            numar_2 = Number($("#SecondNumberM").val());
            return Number(numar_2);
        }
        else
            return true;
    }

    if ((getFirstNumber() == true) && (getSecondNumber() == true))
        $("#rezultatulScaderii").html("Campurile sunt goale...");
    else if (((getFirstNumber() != true) && getSecondNumber() == true) || ((getFirstNumber() == true) && getSecondNumber() != true))
        $("#rezultatulScaderii").html("Scrie inca o valoare...");
    else {
        $("#rezultatulScaderii").html(getFirstNumber() - getSecondNumber());
        fire();
    }
}