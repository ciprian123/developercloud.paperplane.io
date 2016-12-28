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

    numar_1 = getFirstNumber();
    numar_2 = getSecondNumber();
    if ((numar_1 == true) && (numar_2 == true))
        $("#rezultatulImpartirii").html("Campurile sunt goale...");
    else if ((((numar_1) != true) && numar_2 == true) || ((numar_1 == true) && numar_2 != true))
        $("#rezultatulImpartirii").html("Scrieti inca o valoare...");
    else {
        if (numar_2 == 0)
            $("#rezultatulImpartirii").html("Eroare! Impartire la 0!");
        else {
            $("#rezultatulImpartirii").html(parseFloat(numar_1 / numar_2));
            fire();
        }
    }
}
