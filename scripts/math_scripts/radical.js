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

    numar_1 = getFirstNumber();
    numar_2 = getSecondNumber();
    if (numar_1 != true && numar_2 != true) {
        if (numar_2 <= 0)
            $("#rezultatulRadicalului").html("Ordinul nu este pozitiv!");
        else if (numar_2 >= 100)
            $("#rezultatulRadicalului").html("Ordinul maxim este 100!");
        else {
            $("#rezultatulRadicalului").html(Math.pow(numar_1, (1 / numar_2)));
            fire();
        }
    }
    else if (((numar_1 != true) && numar_2 == true) || ((numar_1 == true) && numar_2 != true))
        $("#rezultatulRadicalului").html("Scrie valori nenule...");
    else
        $("#rezultatulRadicalului").html("Campurile sunt goale...");
}
