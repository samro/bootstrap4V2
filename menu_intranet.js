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

        $("main, #navbarleft").css("transition", "left .4s");// methode css qui prend deux valeur(proprite,)
        if ( $("#navbarleft").css("left") == '0px' ) {
            $("main").css("left", "0px");
            if (taille_menu_gauche == 'petit') {
                $("#navbarleft").css("left", "-35px");
            } else {
                $("#navbarleft").css("left", "-200px");
            }

        } else {
            $("#navbarleft").css("left", "0px");
            if (taille_menu_gauche == 'petit') {
                $("main").css("left", "35px");
            } else {
                $("main").css("left", "200px");
            }
        }
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
    

      $("main, #navbarright").css("transition", "right .4s");// methode css qui prend deux valeur(proprite,)
      if ( $("#navbarright").css("right") == '0px' ) {
          $("#navbarright").css("right", "-200px");
          $("main").css("right", "0px");
      } else {
          $("#navbarright").css("right", "0px");
          $("main").css("right", "200px");
      }
    });

    function affiche_menu_enfant() {
        $("#navbarleft_menus_peres button").hover(function(event){
            $("#navbarleft_menus_enfants").html( $(this).next().html() );
        });   
    }


    
	$("#menu_icon_left").click(function(event){
        var menu = $("#navbarleft div");

        $("#menu_icon_left i").toggleClass("fa-angle-double-left").toggleClass("fa-angle-double-right");
        $("#navbarleft").css("transition", "width .4s");
        $("main").css("transition", "left .4s");
        if (countmenuicon % 2 == 0) {
            $("#navbarleft").css("width", "35px");
            $("main").css("left", "35px");
            $("#navbarleft_menus_peres div[aria-labelledby='dropdownMenuButton']").removeClass("menu_cache");
            $("#navbarleft_menus_enfants").css("display", "none");
            taille_menu_gauche = "petit";
        } else {
            $("#navbarleft").css("width", "200px");
            $("main").css("left", "200px");
            $("#navbarleft_menus_enfants").css("display", "block");
            $("#navbarleft_menus_peres div[aria-labelledby='dropdownMenuButton']").addClass("menu_cache");
            taille_menu_gauche = "grand";
            affiche_menu_enfant();
        }
        countmenuicon++;
    
        menu.toggleClass("dropdown").toggleClass("dropright");
        menu.children("button").toggleClass("btn").toggleClass("btn-default").toggleClass("dropdown");
        $("#navbarleft div[aria-labelledby='dropdownMenuButton']").toggleClass("dropdown-menu").toggleClass("m-0");
        $("#navbarleft_menus_peres div[aria-labelledby='dropdownMenuButton']").children("a").toggleClass("dropdown-item");    
    });

}

//fonction appliquee une fois au chargement de la page
// pour savoir si les menu doivent être visibles
function etat_menu() {
    $("#navbarleft_menus_peres div[aria-labelledby='dropdownMenuButton']").addClass("menu_cache");
    if($(window).width() <= 768) {
        $("#navbarleft").css("left", "-200px");
        $("#navbarright").css("right", "-200px");
        $("main").css("left", "0px").css("right","0px"); 
    } else {
        $("#navbarleft").css("left", "0px");
        $("#navbarright").css("right", "0px");
        $("main").css("left", "200px").css("right","200px"); 
    }
}


//fonction appliquee a chaque changement de la taille de la fenetre(.resize)
//pour rendre visible ou masque les menu droit et gauche
function taille_fenetre() {
    $( window ).resize( function() {
        $("#test_taille").val( $(window).width() );
       

        if($(window).width() <= 768) {
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
            if(action_utilisateur_gauche != "l'utilisateur a masque le menu") {
                $("#navbarleft").css("left", "0px");
                if (taille_menu_gauche == 'petit') {
                    $("main").css("left", "50px");
                } else {
                    $("main").css("left", "200px");
                }
            }
            
            if (action_utilisateur_droit != "l'utilisateur a masque le menu") {
                $("#navbarright").css("right", "0px");
                $("main").css("right","200px");
            }
        }
    });
}



$(document).ready(function() {
    animation_menus_principaux();
    taille_fenetre();
    etat_menu();
    affiche_menu_enfant();

});


