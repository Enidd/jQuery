
$('#BtnRight').click(function () {
    $('#Rocket').stop(true, false).animate({left: '+=50'},500);
});

$('#BtnLeft').click(function () {
    $('#Rocket').stop(true, false).animate({left: '-=50'},500);
});

