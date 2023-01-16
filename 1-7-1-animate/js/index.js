$('#BtnRight').click(function(){
    $('#Rocket').animate({ left: 1000}, 500);
});


$('#BtnLeft').click(function(){
    $('#Rocket').animate({  //css樣式用{}寫，可以寫不只一個屬性
        left: 0,
        top: 300}, 500);
});