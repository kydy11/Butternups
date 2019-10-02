//Navigation
var navClass ="nav-link";

$("#site-nav").append(`<a class=${navClass} href="index.html">Home</a>`);
$("#site-nav").append(`<a class=${navClass} href="butter.html">Butter</a>`);
$("#site-nav").append(`<a class=${navClass} href="about.html">About</a>`);
$("#site-nav").append(`<a class=${navClass} href="contact.html">Contact</a>`);
$("#site-nav").append(`<a class=${navClass} href="reviews.html">Reviews</a>`);



//Read JSON

$.getJSON( "butter.json", function( json ) {
    console.log( json );
    for (let i=0; i< json.length; i++){
      $("#site-content-butter").append(`
        <div>
          <img src=${json[i].imgSrc}>
          <p>${json[i].name}</p>
          <p>${json[i].price}</p>
        </div>
      `)
    }
   });
