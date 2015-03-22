jQuery( '#Home_Button' )
    .click(function() {
    	do_the_click( this.href );
    	return false;
    });

// play the funky music white boy
function do_the_click( url )
{
    alert( url );
}


function hideAllPages () = {
   $( "#Home_Page" ).css("display","none");
   $( "#Team_Page" ).css("display","none");
}

$( "#Home_Button" ).click(function() {
  //hideAllPages();
  $( "#Home_Page" ).css("display", "block");
});

$( "#Team_Button" ).click(function() {
  alert("Hey");
  //hideAllPages();
  $( "#Team_Page" ).css("display", "block");
});
