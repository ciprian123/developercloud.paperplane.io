function getAndPow() {
    let numar_1, numar_2;
    let firePlay = new Audio();

    function fire() {
        firePlay.src = "fire.mp3";
        $("firePlay");
        firePlay.play();
    }

    function getFirstNumber() {
        if ($("#FirstNumberPow").val().length > 0) {
            numar_1 = Number($("#FirstNumberPow").val());
            return Number(numar_1);
        }
        else
            return true;
    }

    function getSecondNumber() {
        if ($("#SecondNumberPow").val().length > 0) {
            numar_2 = Number($("#SecondNumberPow").val());
            return Number(numar_2);
        }
        else
            return true;
    }

    numar_1 = getFirstNumber();
    numar_2 = getSecondNumber();
    if ((numar_1 == true) && (numar_2 == true))
        $("#rezultatulRidicarii").html("Campurile sunt goale...");
    else if (((numar_1 != true) && numar_2 == true) || ((numar_1 == true) && numar_2 != true))
        $("#rezultatulRidicarii").html("Scrieti inca o valoare...");
    else {
        if (numar_2 > 100)
            $("#rezultatulRidicarii").html("Exponentul maxim este 100");
        else {
            $("#rezultatulRidicarii").html(Math.pow(numar_1, numar_2));
            fire();
        }
    }
}
