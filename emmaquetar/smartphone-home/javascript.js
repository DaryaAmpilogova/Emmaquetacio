// Les següents funcions s'executaràn un pic s'hagui carregat la pàgina, gràcies al .ready()
$(document).ready(function() {
    changeArrow();
    deleteMessage();
    lastMonth();
    nextMonth();
    
});

function changeArrow() {

    // En clicar damunt el botó de la fletxa, s'executaràn el següent
    $(".button-arrow").click(function() {

        // Si a la hora de clicar la fletxa està en direcció esquerra...
        if(parseInt($(this).css("transform").split(",")[1])==0) {

            // Li direm a través del CSS, que es col·loqui en direcció cap a baix
            $(this).css("transform", "rotate(-90deg)");

            // A continuació amagarem el contingut del missatge
            $(this).parent().parent().children(".message-content").hide();
        }

        // Si en clicar la fletxa està en direcció cap a baix...
        else {

            // La girarem en direcció cap a la esquerra
            $(this).css("transform", "rotate(0deg)");

            // Farem visible el missatge
            $(this).parent().parent().children(".message-content").show();
        }
    });
}

function deleteMessage() {

    // En clicar damunt el botó del DELETE, s'executarà el següent
    $(".delete-message").click(function() {           

        // Indiquem borrar el missatge sencer a través de la funció remove(). Utilitzarem el parent() per anar al pare del node actual
        $(this).parent().parent().parent().remove();

        // Dins la següent variable emmagatzemem la quantitat de missatges que hi ha en total
        var number = $(".block-messages").toArray().length;

        // Ara canviem el nombre de misatges que tenim prèviament, per veure
        $("#change-number").text(number);
    }); 
}

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function lastMonth() {

}

function nextMonth() {
    
}

function currentDay() {
    var today = new Date();
    var dayWeekToday = today.getDay();
    var dayToday = today.getDate();
    var monthToday = today.getMonth();
    var yearToday = today.getFullYear();
    var 
}