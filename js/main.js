$(document).on("click", "li", function(){
    $(this).toggleClass("completed")
});



$(document.on("click", "li span", function(){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
})


$("input[type='text']").on("keypress", function(){
    if(event.which == 13){
        var newItem = <li><span><i class="list"></i></span></li>;
        $("ul").append(newItem);
        $(this).val("");
    }
});



$("hi i").click(function(){
    $(".slide").slideToggle();
});