
$ (document).ready(function(){
    console.log('funcionando');
});

$ ("h1").slideUp(3000);
$ ("h1").show(3000);


$ (".intro-container").prepend('<h1 id="titulo1">HOLA PROFE</H1>');
$ ("#titulo1").css("color", "blue")
.fadeIn(2000)
.delay(6000);

$ ("#titulo-header").slideUp(2000).delay(2000);