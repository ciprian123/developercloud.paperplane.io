$(document).ready(function(){
    $(".conversie_tab, #conversie_info").show();
    $("header, #alte_informatii").css("background", "#1976D2");
    $("#menu").css("background", "#FFC107");
    $("header h1").html("Math Beast");
    $("#alte_informatii h2, .card a").css("color", "#FFC107");
    $("#conversie_info").css("background", "#9C27B0");

    $("#conversie").click(function(){
        $("div.conversie_tab, #conversie_info").show();
        $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #ridicare_putere_tab, #putere_info, #radical_tab, #radical_info").hide();
        $(".adunare, .scadere, .inmultire, .impartire, .radical, .putere").css("background", "none");
        $("#menu").css("background", "#FFC107");
        $("header, #alte_informatii").css("background", "#1976D2");
        $("header h1").html("Baze de numeratie").fadeIn("slow");
        $("#alte_informatii h2, .card a").css("color", "#FFC107");
        $("#conversie_info").css("background", "#9C27B0");
    });

   $("#plus").click(function(){
       $("div#adunare_tab, #adunare_info").show();
       $("#scadere_tab, #scadere_info, #impartire_tab, #impartire_info, #inmultire_tab, #inmultire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info").hide();
       $(".conversie, .scadere, .inmultire, .impartire, .radical, .putere, .setari").css("background", "none");
       $("#menu").css("background", "#607D8B");
       $("header, #alte_informatii").css("background", "#FFC107");
       $("header h1").html("Adunarea numerelor");
       $("#alte_informatii h2, .card a").css("color", "#607D8B");
       $("#adunare_info").css("background", "#0050ef");
   });

   $("#minus").click(function(){
      $("div#scadere_tab, #scadere_info").show();
      $("#adunare_tab, #adunare_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info").hide();
      $(".conversie, .adunare, .inmultire, .impartire, .radical, .putere, .setari").css("background", "none");
      $("#menu").css("background", "#d80073");
      $("header, #alte_informatii").css("background", "#008a00");
      $("header h1").html("Scaderea numerelor");
      $("#alte_informatii h2, .card a").css("color", "#d80073");
      $("#scadere_info").css("background", "#34495e");
   });

   $("#ori").click(function(){
      $("div#inmultire_tab, #inmultire_info").show();
      $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info").hide();
      $(".conversie, .adunare, .scadere, .impartire, .radical, .putere, .setari").css("background", "none");
      $("#menu").css("background", "#a20025");
      $("header, #alte_informatii").css("background", "#00aba9");
      $("header h1").html("Inmultirea numerelor");
      $("#alte_informatii h2, .card a").css("color", "#a20025");
       $("#inmultire_info").css("background", "#2196F3");
   });

   $("#divide").click(function(){
      $("div#impartire_tab, #impartire_info").show();
      $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info").hide();
      $(".conversie, .adunare, .scadere, .inmultire, .radical, .putere, .setari").css("background", "none");
      $("#menu").css("background", "#e51400");
      $("header, #alte_informatii").css("background", "#1ba1e2");
      $("header h1").html("Impartirea numerelor");
      $("#alte_informatii h2, .card a").css("color", "#e51400");
      $("#impartire_info").css("background", "#2ecc71");
   });

   $("#radical").click(function(){
      $("div#radical_tab, #radical_info").show();
      $("#adunare_tab,#adunare_info,  #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #ridicare_putere_tab, #putere_info, #setari_tab, .conversie_tab, #conversie_info").hide();
      $(".conversie, .adunare, .scadere, .inmultire, .impartire, .putere, .setari").css("background", "none");
      $("#menu").css("background", "#FF4081");
      $("header, #alte_informatii").css("background", "#5D4037");
      $("header h1").html("Radicali ai numerelor");
      $("#alte_informatii h2, .card a").css("color", "#FF4081");
      $("#radical_info").css("background", "#FFB300");
   });

   $("#putere").click(function(){
      $("div#ridicare_putere_tab, #putere_info").show();
      $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info").hide();
      $(".conversie, .adunare, .scadere, .inmultire, .impartire, .radical, .setari").css("background", "none");
      $("#menu").css("background", "#FF5722");
      $("header, #alte_informatii").css("background", "#6a00ff");
      $("header h1").html("Puteri ale numerelor");
      $("#alte_informatii h2, .card a").css("color", "#FF5722");
      $("#putere_info").css("background", "#00796B");
   });

   $("#setari").click(function(){
      $("div#setari_tab").show();
      $("#adunare_tab, #scadere_tab, #inmultire_tab, #impartire_tab, #radical_tab, #ridicare_putere_tab, .conversie_tab").hide();
      $(".conversie, .adunare, .scadere, .inmultire, .impartire, .radical, .putere").css("background", "none");
      $("#menu").css("background", "#00FF00");
      $("header, #alte_informatii").css("background", "#000080");
      $("header h1").html("Setari");
      $("#alte_informatii h2, .card a").css("color", "#00FF00");
   });
});