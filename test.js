var countleft = 0;
var countright = 0;
var countmenuicon = 0;
var action_utilisateur_gauche = "";
var taille_menu_gauche = ""
var taille_menu_droit = "";
var action_utilisateur_droit = "";



function animation_menus_principaux() {
	$("#bouton_menu_gauche").click(function(event){
        if ( $(window).width() > 768 ) {
            if ( $("#navbarleft").css("left") == '0px' ) {
                action_utilisateur_gauche = "l'utilisateur a masque le menu";
            } else {
                action_utilisateur_gauche = "";
            }
        } else {
            if ( $("#navbarleft").css("left") == '0px' ) {
                action_utilisateur_gauche = "";
            } else {
                action_utilisateur_gauche = "l'utilisateur a affiche le menu";     
            }
        }
        countleft++;

        $("main, #navbarleft").css("transition", "left .4s");// methode css qui prend deux valeur(proprite,)
        if ( $("#navbarleft").css("left") == '0px' ) {
            $("#navbarleft").css("left", "-200px");
            $("main").css("left", "0px");
        } else {
            $("#navbarleft").css("left", "0px");
            if (taille_menu_gauche == 'petit') {
                $("main").css("left", "50px");
            } else {
                $("main").css("left", "200px");
            }
        }

        //test pour recuperer la valeur et attribuer  la class de navbar gauche au moment du click 
        $("#test_classe_gauche").val($("#navbarleft").attr("class"));
        //test compteur sur le boutton gauche au moment du click
        //$("#test_bouton_gauche").val(countleft);
        //test pour recuperer la valeur de la variable(action_utilisateur_gauche)
        //$("#test_variable_gauche").val(action_utilisateur_gauche);
        $("#test_left").val($("main").css("left") + "nb de clic" +countmenuicon + "taille_menu" + taille_menu_gauche);
       

    });
    
    
	$("#bouton_menu_droit").click(function(event){
        if ( $(window).width() > 768 ) {
            if( $("#navbarright").css("right") == '0px' ) {
                action_utilisateur_droit = "l'utilisateur a masque le menu";
            } else {
                action_utilisateur_droit = "";
            }
        } else {
            if ( $("#navbarright").css("right") == '0px' ) {
                action_utilisateur_droit = "";
            } else {
                action_utilisateur_droit = "l'utilisateur a affiche le menu";     
            }
        }
        countright++;
    

      $("main, #navbarright").css("transition", "right .4s");// methode css qui prend deux valeur(proprite,)
      if ( $("#navbarright").css("right") == '0px' ) {
          $("#navbarright").css("right", "-200px");
          $("main").css("right", "0px");
      } else {
          $("#navbarright").css("right", "0px");
      }
    });

    
	$("#menu_icon_left").click(function(event){
        $("#navbarleft").css("transition", "width .4s");
        $("main").css("transition", "left .4s");
        if (countmenuicon % 2 == 0) {
            $("#navbarleft").css("width", "50px");
            $("main").css("left", "50px");
            $(".text_menu").css("display", "none");
            taille_menu_gauche = "petit";
            //  alert("50px");
        } else {
            $("#navbarleft").css("width", "200px");
            $("main").css("left", "200px");
            $(".text_menu").css("display", "inline");
            taille_menu_gauche = "grand";
            //alert("200px");

        }
        countmenuicon++;
        $("#test_left").val($("main").css("left") + "nb de clic" +countmenuicon + "taille_menu" + taille_menu_gauche);
    });

}


//fonction appliquee une fois au chargement de la page
// pour savoir si les menu doivent être visibles
/*function etat_menu() {
    if($(window).width() <= 768) {
        $('main,#navbarleft').addClass('menu_gauche_masque')
        $('main,#navbarright').addClass('menu_droit_masque')
        //test
        $("#test_classe").val($("#navbarleft").attr("class"));   
    } else {
        $("main, #navbarleft").addClass('menu_gauche_visible'); 
        $("main, #navbarright").addClass('menu_droit_visible');
        //test
        $("#test_classe").val($("#navbarleft").attr("class"));    
    }
}*/


 
//fonction appliquee a chaque changement de la taille de la fenetre(.resize)
//pour rendre visible ou masque les menu droit et gauche
function taille_fenetre() {
    $( window ).resize( function() {
        $("#test_taille").val( $(window).width() );
       

        if($(window).width() <= 768) {
            //alert("frontière atteinte");
            if(action_utilisateur_gauche == "l'utilisateur a affiche le menu" ){
                $("#navbarleft").css("left", "0px");
                if (taille_menu_gauche == 'petit') {
                    $("main").css("left", "50px");
                } else {
                    $("main").css("left", "200px");
                }
            } else {
                $("#navbarleft").css("left", "-200px");
                $("main").css("left", "0px");
            }
            if(action_utilisateur_droit == "l'utilisateur a affiche le menu"){
                $("#navbarright").css("right", "0px");
                $("main").css("right","200px");
            } else {
                $("#navbarright").css("right", "-200px");
                $("main").css("right","0px");
            }
            
        }else{
            //test condition action utilisateur menu gauche
            if(action_utilisateur_gauche != "l'utilisateur a masque le menu") {
                $("#navbarleft").css("left", "0px");
                if (taille_menu_gauche == 'petit') {
                    $("main").css("left", "50px");
                } else {
                    $("main").css("left", "200px");
                }
            }
            
            //test condition action utilisateur menu droit
            if (action_utilisateur_droit != "l'utilisateur a masque le menu") {
                //alert("bobo");
                $("#navbarright").css("right", "0px");
                $("main").css("right","200px");
            }
        }
    });
}



$(document).ready(function() {
    animation_menus_principaux();
    taille_fenetre();
    //etat_menu();
    $("#test_classe_gauche").val($("#navbarleft").attr("class"));
    $("#test_classe_droit").val($("#navbarright").attr("class"));
    //$("#test_bouton_gauche").val(countleft);
    //$("#test_bouton_droit").val(countright);
    //$("#test_variable_gauche").val(action_utilisateur_gauche);
    //$("#test_variable_droit").val(action_utilisateur_droit);
    $("#test_left").val($("main").css("left") + "nb de clic" +countmenuicon + "taille_menu" + taille_menu_gauche);

});


