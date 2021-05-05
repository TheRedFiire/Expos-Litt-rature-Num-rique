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

function hideClass(className) {
    var appHandlers = document.getElementsByClassName(className);

    for (var i = 0; i < appHandlers.length; i ++) {
        appHandlers[i].style.display = 'none';
    }
}

function viewClass(className) {
    var appHandlers = document.getElementsByClassName(className);

    for (var i = 0; i < appHandlers.length; i ++) {
        appHandlers[i].style.display = 'flex';
    }
}

function viewID(idName) {
    document.getElementById(idName).style.display = 'inline-block';
}

function hideID(idName) {
    document.getElementById(idName).style.display = 'none';
}


var stop = false
var isDeleting = false
var fullTxt = ''
var ele
var that

var introduction = "Depuis le vingt-et-unième siècle, nous avons de plus en plus tendance à vouloir faciliter et rendre plus attractif ce qui nous entoure en ajoutant de la liberté, et la littérature n’échappe pas à ce mouvement. Comment est-ce que la littérature numérique satisfait-elle cette volonté d’avoir plus de libertés que son équivalent classique ? D’abord nous verrons de quelle manière ce sentiment de liberté se fait ressentir à travers la littérature numérique. Ensuite nous observerons qu’il se voit limité sous plusieurs aspects. Ce n’est qu’une fois ces deux idées éclaircies que nous les confronterons."
var partie1 = "Une soif de liberté chez les lecteurs est de plus en plus observée et les auteurs ne manquent pas d’y répondre via la création d'œuvres numériques variées dont leurs nombreux aspects favorisent la satisfaction de la requête d’origine. L’accessibilité de ces œuvres qui provient du format leur permet d’être consultées facilement et la gratuité aide d’autant plus. De plus, le lecteur peut également se voir doté de différents choix et ainsi avoir une sensation d'influence qui renforce son sentiment de liberté et de contrôle. Enfin, les interprétations étant plus larges et différentes offrent au lecteur un champ de réflexion agrandi en comparaison aux œuvres plus classiques qui généralement ne laissent qu’une légère ambiguïté quant à leur signification."
var partie2 = "La littérature numérique, bien qu’accordant une liberté plus large qu’un format matériel, présente aussi ses limites. Parler de liberté n’est en fait qu’une illusion, le lecteur choisit de se déplacer comme il le souhaite dans le document mais dans la limite imposée par l’auteur. Les hyperfonctions permettent de se déplacer dans l'œuvre mais pas d’avoir cette notion de liberté car on est vraiment soumis aux conditions du programmeur. Ces liens hypertexte sont placés par l’auteur donc si il n’en propose pas, on est limité et l’expérience s’arrête là.  Il n’est donc pas question de liberté, mais plutôt d’une impression de liberté. "
var partie3 = "La liberté à travers la littérature numérique existe même si elle est contrainte par de nombreux facteurs. Elle demeure bien plus présente dans ce courant littéraire que dans son homologue classique. Ce sentiment de liberté paraît par les nombreuses possibilités parmi plusieurs fonctionnalités, il est visible aussi avec l'interaction par laquelle nous pouvons avoir l'impression d’être maître du déroulement de l'œuvre. La liberté est donc associée à une sorte de prise de pouvoir même si celle-ci est contrôlée et encadrée. Elle est effectivement octroyée ainsi elle témoigne d’une évolution de la volonté des lecteurs et des mœurs de notre époque."
var conclusion = "Nous venons d’opposer les deux parties et d’en faire le bilan, ainsi nous pouvons en tirer que la littérature numérique octroie effectivement au lecteur plus de liberté. En effet, les avantages sont plus nombreux que les inconvénients et ils répondent mieux aux attentes qu’un lecteur aurait en cherchant de la liberté. Nous pensons cependant que les fonctionnalités pourraient être plus creusées étant donné que l’on peut se sentir, au contraire, prisonnier de la trame artistique et scénaristique d’un auteur. Offrir plus de choix et y ajouter des débouchés différents pourraient réellement donner un sens plus profond à la littérature numérique et par conséquent renforcer le sentiment de liberté initialement demandé."

function init() {
    viewClass("box")
    viewClass("home-footer")

    hideClass("box1")
    hideClass("box2")
    hideClass("box3")
    hideClass("text-footer")
    hideClass("end-footer")
}

function start() {
    hideClass("box")
    hideClass("home-footer")

    viewClass("box1")
    viewClass("text-footer")

    viewClass("intro")

    viewID("skip")
    viewID("next")
    document.getElementById("next").onclick = part1;

    fullTxt = introduction;
    write()
}

function intro() {
    skip()

    hideClass("part1")
    hideClass("part2")
    hideClass("part3")
    hideClass("conclu")
    viewClass("intro")

    hideID("before")
    hideID("dott")
    hideID("end")
    document.getElementById("next").onclick = part1;

    next(introduction)
}

function part1() {
    skip()

    hideClass("intro")
    hideClass("part2")
    hideClass("part3")
    hideClass("conclu")
    viewClass("part1")

    viewID("before")
    viewID("dott")
    document.getElementById("before").onclick = intro;
    document.getElementById("next").onclick = part2;

    next(partie1)
}

function part2() {
    skip()

    hideClass("intro")
    hideClass("part1")
    hideClass("part3")
    hideClass("conclu")
    viewClass("part2")

    document.getElementById("before").onclick = part1;
    document.getElementById("next").onclick = part3;

    next(partie2)
}

function part3() {
    skip()

    hideClass("intro")
    hideClass("part1")
    hideClass("part2")
    hideClass("conclu")
    viewClass("part3")

    document.getElementById("before").onclick = part2;
    document.getElementById("next").onclick = conclu;

    next(partie3)
}

function conclu() {
    skip()

    hideClass("intro")
    hideClass("part1")
    hideClass("part2")
    hideClass("part3")
    viewClass("conclu")

    document.getElementById("before").onclick = part3;
    document.getElementById("next").onclick = info;

    next(conclusion)
}

function info() {
    skip()

    hideClass("box1")
    viewClass("box2")
    viewClass("end-footer")
}

function end() {
    hideClass("end-footer")
    hideClass("box2")
    viewClass("box3")
}

function skip() {
    ele.innerHTML = '<span class="wrap">'+ fullTxt +'</span>';
    stop = true;
}

function next(text) {
    ele.innerHTML = '<span class="wrap"></span>';
    stop = false;
    fullTxt = text;
    write()
}

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    ele = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
};

TxtType.prototype.tick = function() {
    that = this;
    if(this.txt === fullTxt) {
        stop = false;
        that.stop();
    }

    if(stop) {
        this.txt = fullTxt;
        ele.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        stop = false;
        that.stop();
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    ele.innerHTML = '<span class="wrap">' + this.txt +'</span>';

    var delta = 100 - Math.random() * 100;

    if(!stop) {
        setTimeout(function() {
            that.tick();
        }, delta);
    }
};

function write() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};