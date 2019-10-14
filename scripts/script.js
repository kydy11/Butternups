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

    if (window.location.pathname == "/") {
      let rand = Math.floor(Math.random() *json.length);
      $("#home-butter").append(`
        
        <p>${json[rand].name}</p>
        <img src=${json[rand].imgSrc} width="80%">
        
      `)
    }
   });


   $.getJSON( "scripts/reviews.json", function( json ) {
    if (window.location.pathname == "/reviews.html") {
      console.log( json );
      for (let i=0; i< json.length; i++){
        $("#site-content-reviews").append(`
          <li>
            <div class="review">
              <p>"${json[i].review}"</p>
              <p class="reviewer"> ${json[i].name}</p>
            </div>
          </li>
        `)
      }
    }

    if (window.location.pathname == "/") {
      let rand = Math.floor(Math.random() *json.length);
      $("#home-review").append(`
          <p>"${json[rand].review}"</p>
          <p class="reviewer">${json[rand].name}</p>
      `)
    }
   });

