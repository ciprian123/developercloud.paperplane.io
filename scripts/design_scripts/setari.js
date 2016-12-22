$(document).ready(function(){
    $("body, input, #adunare_tab, #scadere_tab, #inmultire_tab, #impartire_tab, #ridicare_putere_tab, #radical_tab, #setari_tab, .conversie_tab, .solutions").css("background" , "white");
    $(".presol_add, .presol_sub, .presol_inm, .presol_imp, .presol_pow, .presol_rad, .presol, #rezultatulAdunarii, #rezultatulScaderii, #rezultatulInmultirii, #rezultatulImpartirii, #rezultatulRadicalului, #rezultatulRidicarii, .b, input").css("color" , "#3d4754");

    $("#adunare_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
        $(".presol_add").css('color', '#00E676');
    }).mouseleave(function(){
        $(".presol_add").css('color', '#3d4754');
    });

    $("#scadere_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
        $(".presol_sub").css('color', '#3F51B5');
    }).mouseleave(function(){
        $(".presol_sub").css('color', '#3d4754');
    });

    $("#inmultire_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
        $(".presol_inm").css('color', '#FF1744');
    }).mouseleave(function(){
        $(".presol_inm").css('color', '#3d4754');
    });

    $("#impartire_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
        $(".presol_imp").css('color', '#311B92');
    }).mouseleave(function(){
        $(".presol_imp").css('color', '#3d4754');
    });

    $("#radical_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
        $(".presol_rad").css('color', '#64DD17');
    }).mouseleave(function(){
        $(".presol_rad").css('color', '#3d4754');
    });

    $("#putere_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
        $(".presol_pow").css('color', '#304FFE');
    }).mouseleave(function(){
        $(".presol_pow").css('color', '#3d4754');
    });

    $("#fire").mouseenter(function(){
        $(".presol").css('color', '#3F51B5');
    }).mouseleave(function(){
        $(".presol").css('color', '#3d4754');
    });
});


   $("#light").click(function(){
       $("body, input, #adunare_tab, #scadere_tab, #inmultire_tab, #impartire_tab, #ridicare_putere_tab, #radical_tab, #setari_tab, .conversie_tab, .solutions").css("background" , "white");
       $(".presol_add, .presol_sub, .presol_inm, .presol_imp, .presol_pow, .presol_rad, .presol, #rezultatulAdunarii, #rezultatulScaderii, #rezultatulInmultirii, #rezultatulImpartirii, #rezultatulRadicalului, #rezultatulRidicarii, .b, input").css("color" , "#3d4754");

       $("#adunare_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
           $(".presol_add").css('color', '#00E676');
       }).mouseleave(function(){
           $(".presol_add").css('color', '#3d4754');
       });

       $("#scadere_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
           $(".presol_sub").css('color', '#3F51B5');
       }).mouseleave(function(){
           $(".presol_sub").css('color', '#3d4754');
       });

       $("#inmultire_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
           $(".presol_inm").css('color', '#FF1744');
       }).mouseleave(function(){
           $(".presol_inm").css('color', '#3d4754');
       });

       $("#impartire_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
           $(".presol_imp").css('color', '#311B92');
       }).mouseleave(function(){
           $(".presol_imp").css('color', '#3d4754');
       });

       $("#radical_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
           $(".presol_rad").css('color', '#64DD17');
       }).mouseleave(function(){
           $(".presol_rad").css('color', '#3d4754');
       });

       $("#putere_button").css("box-shadow", "0 2px 8px #3d4754").mouseenter(function(){
           $(".presol_pow").css('color', '#304FFE');
       }).mouseleave(function(){
           $(".presol_pow").css('color', '#3d4754');
       });

       $("#fire").mouseenter(function(){
           $(".presol").css('color', '#3F51B5');
       }).mouseleave(function(){
           $(".presol").css('color', '#3d4754');
       });
   });

    $("#dark").click(function(){
        $("body, input, #adunare_tab, #scadere_tab, #inmultire_tab, #impartire_tab, #ridicare_putere_tab, #radical_tab, #setari_tab, .conversie_tab, .solutions").css("background" , "#212121");
        $(".presol_add, .presol_sub, .presol_inm, .presol_imp, .presol_pow, .presol_rad, .presol, #rezultatulAdunarii, #rezultatulScaderii, #rezultatulInmultirii, #rezultatulImpartirii, #rezultatulRadicalului, #rezultatulRidicarii, .b, input").css("color" , "white");

        $("#adunare_button").css("box-shadow", "none").mouseenter(function(){
            $(".presol_add").css('color', '#00E676');
        }).mouseleave(function(){
            $(".presol_add").css('color', 'white');
        });

        $("#scadere_button").css("box-shadow", "none").mouseenter(function(){
            $(".presol_sub").css('color', '#3F51B5');
        }).mouseleave(function(){
            $(".presol_sub").css('color', 'white');
        });

        $("#inmultire_button").css("box-shadow", "none").mouseenter(function(){
            $(".presol_inm").css('color', '#FF1744');
        }).mouseleave(function(){
            $(".presol_inm").css('color', 'white');
        });

        $("#impartire_button").css("box-shadow", "none").mouseenter(function(){
            $(".presol_imp").css('color', '#311B92');
        }).mouseleave(function(){
            $(".presol_imp").css('color', 'white');
        });

        $("#radical_button").css("box-shadow", "none").mouseenter(function(){
            $(".presol_rad").css('color', '#64DD17');
        }).mouseleave(function(){
            $(".presol_rad").css('color', 'white');
        });

        $("#putere_button").css("box-shadow", "none").mouseenter(function(){
            $(".presol_pow").css('color', '#304FFE');
        }).mouseleave(function(){
            $(".presol_pow").css('color', 'white');
        });

        $("#fire").mouseenter(function(){
            $(".presol").css('color', '#3F51B5');
        }).mouseleave(function(){
            $(".presol").css('color', 'white');
        });
});
