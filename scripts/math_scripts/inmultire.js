function getAndMult() {
    let numar_1, numar_2;
    let firePlay = new Audio();

    function fire() {
        firePlay.src = "fire.mp3";
        $("firePlay");
        firePlay.play();
    }

    function getFirstNumber() {
        if ($("#FirstNumberOri").val().length > 0) {
            numar_1 = Number($("#FirstNumberOri").val());
            return Number(numar_1);
        }
        else
            return true;
    }

    function getSecondNumber() {
        if ($("#SecondNumberOri").val().length > 0) {
            numar_2 = Number($("#SecondNumberOri").val());
            return Number(numar_2);
        }
        else
            return true;
    }

    numar_1 = getFirstNumber();
    numar_2 = getSecondNumber();
    if ((numar_1 == true) && (numar_2 == true))
        $("#rezultatulInmultirii").html("Campurile sunt goale...");
    else if (((numar_1 != true) && numar_2 == true) || ((numar_1 == true) && numar_2 != true))
        $("#rezultatulInmultirii").html("Scrieti inca o valoare ...");
    else {
        $("#rezultatulInmultirii").html(numar_1 * numar_2);
        fire();
    }
}
