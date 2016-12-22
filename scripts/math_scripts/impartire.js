function getAndDiv() {
    let numar_1, numar_2;
    let firePlay = new Audio();

    function fire() {
        firePlay.src = "fire.mp3";
        $("firePlay");
        firePlay.play();
    }

    function getFirstNumber() {
        if ($("#FirstNumberDiv").val().length > 0) {
            numar_1 = Number($("#FirstNumberDiv").val());
            return Number(numar_1);
        }
        else
            return true;
    }

    function getSecondNumber() {
        if ($("#SecondNumberDiv").val().length > 0) {
            numar_2 = Number($("#SecondNumberDiv").val());
            return Number(numar_2);
        }
        else
            return true;
    }

    if ((getFirstNumber() == true) && (getSecondNumber() == true))
        $("#rezultatulImpartirii").html("Campurile sunt goale...");
    else if (((getFirstNumber() != true) && getSecondNumber() == true) || ((getFirstNumber() == true) && getSecondNumber() != true))
        $("#rezultatulImpartirii").html("Scrieti inca o valoare...");
    else {
        if (getSecondNumber() == 0)
            $("#rezultatulImpartirii").html("Eroare! Impartire la 0!");
        else {
            $("#rezultatulImpartirii").html(parseFloat(getFirstNumber() / getSecondNumber()));
            fire();
        }
    }
}
