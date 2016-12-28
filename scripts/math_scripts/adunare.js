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

    numar_1 = getFirstNumber();
    numar_2 = getSecondNumber();
    if ((numar_1 == true) && (numar_2 == true))
        $("#rezultatulAdunarii").html("Campurile sunt goale...");
    else if (((numar_1 != true) && numar_2 == true) || ((numar_1 == true) && numar_2 != true))
        $("#rezultatulAdunarii").html("Scrie inca o valoare...");
    else {
        $("#rezultatulAdunarii").html(Number(numar_1 + numar_2));
        fire();
    }
}