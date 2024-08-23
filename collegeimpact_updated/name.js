$(window).on('load', function() {
 
   
$('#textbox').on('keypress', function(e){
    if(e.keyCode==13 && $("#textbox").val()!=""){
        $(".chat-box-body").append("<div class='chat-box-body-send'><p>"+$("#textbox").val()+"</p><span>12:00</span></div>")
        requestanswer($("#textbox").val())
        $("#textbox").val('');
    }

})

$('.chat-box .chat-box-header').on('click' , function(){
    console.log("hello")
	$('.chat-button').css({"display": "block"});
	$('.chat-box').css({"visibility": "hidden"});
})

$("#addExtra").on("click" , function(){
		
		$(".modal").toggleClass("show-modal");
})

$(".modal-close-button").on("click" , function(){
	$(".modal").toggleClass("show-modal");
})
var requestanswer=function(question){
    $.ajax({
        url: 'http://54.161.99.9',  
        type: 'POST',
        data: JSON.stringify({"question": question}),
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $(".chat-box-body").append("<div class='chat-box-body-receive'><p>"+response+"</p><span>12:00</span></div>")
        },
        error: function(xhr, status, error) {
            console.log("An error occurred: " + error);
            $(".chat-box-body").append("<div class='chat-box-body-receive'><p>Sorry, I ran into an error. Please try again.</p><span>12:00</span></div>")
        }
    });

}
});