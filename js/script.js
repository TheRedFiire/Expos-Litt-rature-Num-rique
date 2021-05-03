$(function(){
    $(window).on("load",function(src){
        setTimeout(function(){
            $(".loader").fadeOut()
            init()
            Swal.fire({
                icon:"question",
                showDenyButton:true,
                title:"Activer la musique ?",
                confirmButtonText:"Oui",
                denyButtonText:"Non"
            }).then((permission)=>{
                if(permission.isConfirmed){
                    $("#music").attr("src","files/backgroundmusic.mp3")
                    document.getElementById("music").play()
                }
            })
        },1000)
    })
})

function hide(className) {
    var appHandlers = document.getElementsByClassName(className);

    for (var i = 0; i < appHandlers.length; i ++) {
        appHandlers[i].style.display = 'none';
    }
}

function view(className) {
    var appHandlers = document.getElementsByClassName(className);

    for (var i = 0; i < appHandlers.length; i ++) {
        appHandlers[i].style.display = 'flex';
    }
}

function init() {
    view("box")
    hide("box1")
    hide("box2")
}

function start() {
    hide("box")
    view("box1")
    hide("box3")
}

function start1() {
    hide("box")
    hide("box1")
    view("box2")
}