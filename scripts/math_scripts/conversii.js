function getAndSolve() {
    let firePlay = new Audio();

    function fire() {
        firePlay.src = "fire.mp3";
        $("firePlay");
        firePlay.play();
    }

    function getNumber() {
        let number = $("#number").val();
        if (isNaN(number) || number <= 0 || number - Math.floor(number) !== 0) 
            return -1;
        else 
            return parseInt(number);
    }

    function getBase() {
        let base = $("#base").val();
        if (isNaN(base) || base <= 0 || base - Math.floor(base) !== 0)
            return -1;
        else
            return parseInt(base);
    }


    function conversie(numar, baza) {
        let nr = 0, p = 1, aux = numar;

        while (aux > 0) {
            nr = nr + p * (aux % baza);
            p *= 10;
            aux = parseInt(aux / baza);
        }
        return nr;
    }

    function conversie_b16(numar) {

        let text = "";

        while (numar > 0) {

            if (numar % 16 < 10)
                text += ((numar % 16).toString());
            if (numar % 16 === 10)
                text += 'A';
            if (numar % 16 === 11)
                text += 'B';
            if (numar % 16 === 12)
                text += 'C';
            if (numar % 16 === 13)
                text += 'D';
            if (numar % 16 === 14)
                text += 'E';
            if (numar % 16 === 15)
                text += 'F';

            numar = parseInt(numar / 16);
        }


        $("#conv_sol").html(text.split("").reverse().join(""));
    }


    if (getNumber() == -1) {
        $("#conv_sol").html("Scrie un numar natural nenul!");
    } else if (getNumber() == 1) {
        $("#conv_sol").html("1");
    }
    else {
        if (getBase() < 2 || getBase() > 16)
            $("#conv_sol").html("Baza este incorecta");
        else {
            fire();
            if (getBase() == 16)
                conversie_b16(getNumber());
            else
                $("#conv_sol").html(conversie(getNumber(), getBase()));
        }
    }
}




