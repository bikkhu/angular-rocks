"use strict";function toggle_active(){$(".nav a").on("click",function(){$(".nav").find(".active").removeClass("active"),$(this).parent().addClass("active")})}angular.module("projectApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/foo",{templateUrl:"views/foo.html",controller:"FooCtrl"}).when("/bar",{templateUrl:"views/bar.html",controller:"BarCtrl"}).when("/the-rolling-stones",{templateUrl:"views/the-rolling-stones.html",controller:"TheRollingStonesCtrl",title:"The Rolling Stones"}).when("/the-beatles",{templateUrl:"views/the-beatles.html",controller:"TheBeatlesCtrl"}).when("/queen",{templateUrl:"views/queen.html",controller:"QueenCtrl"}).otherwise({redirectTo:"/"})}]).factory("Page",function(){var a="Angular Rocks",b="Esto es la descripción por defecto.",c="angular,rocks,default";return{title:function(){return a},setTitle:function(b){a=b},description:function(){return b},setDescription:function(a){b=a},keyWords:function(){return c},setKeyWords:function(a){c=a}}}).controller("PageCtrl",["$scope","Page",function(a,b){a.Page=b}]),toggle_active(),angular.module("projectApp").controller("HomeCtrl",["$scope","Page",function(a,b){b.setTitle("Angular Rocks"),b.setDescription("Esto es la descripción por defecto."),b.setKeyWords("angular,rocks,default")}]),angular.module("projectApp").controller("FooCtrl",["$scope","Page",function(a,b){b.setTitle("Angular Rocks"),b.setDescription("Esto es la descripción por defecto."),b.setKeyWords("angular,rocks,default")}]),angular.module("projectApp").controller("BarCtrl",["$scope","Page",function(a,b){b.setTitle("Angular Rocks"),b.setDescription("Esto es la descripción por defecto."),b.setKeyWords("angular,rocks,default")}]),angular.module("projectApp").controller("TheRollingStonesCtrl",["$scope","Page",function(a,b){b.setTitle("The Rolling Stones"),b.setDescription("The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 1962 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial."),b.setKeyWords("londres,rolling,rock,jagger")}]),angular.module("projectApp").controller("TheBeatlesCtrl",["$scope","Page",function(a,b){b.setTitle("The Beatles"),b.setDescription("The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular. Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista)."),b.setKeyWords("beatles,pop,lennon,banda")}]),angular.module("projectApp").controller("QueenCtrl",["$scope","Page",function(a,b){b.setTitle("Queen"),b.setDescription("Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa."),b.setKeyWords("queen,rock,londres,mercury")}]),angular.module("projectApp").run(["$templateCache",function(a){a.put("views/bar.html","<p>En construcción.</p>"),a.put("views/foo.html","<p>En construcción.</p>"),a.put("views/home.html",'<h1>Listado de páginas</h1> <ul class="list-group"> <li class="list-group-item">Home</li> <li class="list-group-item">Foo</li> <li class="list-group-item">Bar</li> <li class="list-group-item">The Rolling Stones</li> <li class="list-group-item">The Beatles</li> <li class="list-group-item">Queen</li> </ul>'),a.put("views/queen.html",'<div class="row"> <div class="col-sm-6 col-md-12"> <div class="thumbnail"> <img width="200px" src="../images/queen-90.c1b39615.png" alt="de cuín"> <p>Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.</p> <iframe width="100%" height="400" src="https://www.youtube.com/embed/_Uu12zY01ts?ecver=1" frameborder="0" allowfullscreen></iframe> </div> </div> </div>'),a.put("views/the-beatles.html",'<div class="row"> <div class="col-sm-6 col-md-12"> <div class="thumbnail"> <img width="200px" src="../images/beatles.ac87776c.png" alt="de bitels"> <p>The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular. Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años 1950, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960.</p> <iframe width="100%" height="400" src="https://www.youtube.com/embed/S-rB0pHI9fU?ecver=1" frameborder="0" allowfullscreen></iframe> </div> </div> </div>'),a.put("views/the-rolling-stones.html",'<div class="row"> <div class="col-sm-6 col-md-12"> <div class="thumbnail"> <img width="200px" src="../images/rolling.9db1091e.jpg" alt="de rolin"> <p>The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 1962 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.</p> <iframe width="100%" height="400" src="https://www.youtube.com/embed/e5AIisWNvM4?ecver=1" frameborder="0" allowfullscreen></iframe> </div> </div> </div>')}]);