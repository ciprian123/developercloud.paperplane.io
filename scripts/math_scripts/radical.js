function getAndRad() {
    let numar_1, numar_2;
    let firePlay = new Audio();

    function fire() {
        firePlay.src = "fire.mp3";
        $("firePlay");
        firePlay.play();
    }

    function getFirstNumber() {
        if ($("#FirstNumberR").val().length > 0) {
            numar_1 = Number($("#FirstNumberR").val());
            return Number(numar_1);
        }
        else
            return true;
    }

    function getSecondNumber() {
        if ($("#SecondNumberR").val().length > 0) {
            numar_2 = Number($("#SecondNumberR").val());
            return Number(numar_2);
        }
        else
            return true;
    }

    if (getFirstNumber() != true && getSecondNumber() != true) {
        if (getSecondNumber() <= 0)
            $("#rezultatulRadicalului").html("Ordinul nu este pozitiv!");
        else if (getSecondNumber() >= 100)
            $("#rezultatulRadicalului").html("Ordinul maxim este 100!");
        else {
            $("#rezultatulRadicalului").html(Math.pow(getFirstNumber(), (1 / getSecondNumber())));
            fire();
        }
    }
    else if (((getFirstNumber() != true) && getSecondNumber() == true) || ((getFirstNumber() == true) && getSecondNumber() != true))
        $("#rezultatulRadicalului").html("Scrie valori nenule...");
    else
        $("#rezultatulRadicalului").html("Campurile sunt goale...");
}
