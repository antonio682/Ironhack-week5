var phrases = [
	"I like pie.",
	"Be quick or be dead",
	"Can I play with Madness?",
	"Run to the hills",
	"The sands of time for me",
	"It was you",
	"last sentence"
];

$(document).on('ready', function() {

    $(".sentence").replaceWith( "<span>"+ randomPhrase(phrases) +"</span>" );

 	$('.btn-sentence').on('click', function(){
 		location.reload();
 		$(".sentence-change" ).replaceWith( "<span>"+ randomPhrase(phrases) +"</span>" );
 	});

 	$('.btn-hide').on('click', function() {
 		
 		if ($('.btn-hide').html() === "Hide"){
 			$('.btn-hide').html("Hide");
 		} else{
 			$('.btn-hide').html("Show");
 		};

 		$('.list').toggleClass('hide-sentence');
 	});

 	

 	$('#sentence').keypress(function(event){
 		var newsentence = $('#sentence').val(); 

        if(event.which == 13){
        	event.preventDefault();
        	phrases.push(newsentence);
        	console.log(phrases);
        	$('.list').append("<li id='li"+ i +"'>"+ newsentence +"  <button class='btn-remove' type='submit'>delete</button></li>");
        } 
    });

 	var  i = 0;
	   $.each(phrases,function() {
	    	$('.list').append("<li id='li"+ i +"'>"+ phrases[i] +"  <button class='btn-remove' src='#'>delete</button></li>");
	    		i += 1;
	    });

	$('.btn-remove').on('click',function(){
		$( "li" ).index( listItem ) );
	   $('.list > li').index( listItem );	
 	});

	function randomPhrase(phrases){
	 	return phrases[Math.floor(Math.random() * phrases.length) + 1];
	 };


});