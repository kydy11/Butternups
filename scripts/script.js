//Navigation
var navClass ="nav-link";

$("#site-nav").append(`<a class=${navClass} href="/">Home</a>`);
$("#site-nav").append(`<a class=${navClass} href="/butter.html">Butter</a>`);
$("#site-nav").append(`<a class=${navClass} href="/about.html">About</a>`);
$("#site-nav").append(`<a class=${navClass} href="/contact.html">Contact</a>`);
$("#site-nav").append(`<a class=${navClass} href="/reviews.html">Reviews</a>`);



//Read JSON

$.getJSON( "scripts/butter.json", function( json ) {
    if (window.location.pathname == "/butter.html") {
      console.log( json );
      for (let i=0; i< json.length; i++){
        $("#site-content-butter").append(`
          <li>
            <img src=${json[i].imgSrc} width="80%">
            <p>${json[i].name}</p>
            <p><i>${json[i].price}<i></p>
          </li>
        `)
      }
    }
    // console.log(window.location.pathname)
    if (window.location.pathname == "/") {
      let rand =Math.random() *json.length;
      $("#home-butter").append(`
        <div>
          <img src=${json[rand].imgSrc} width="80%">
          <p>${json[rand].name}</p>
        </div>
      `)
    }
   });

