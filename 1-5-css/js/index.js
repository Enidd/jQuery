const $btnLg = $('#BtnLg'); // const 宣告變數
const $btnSm = $('#BtnSm'); // 翻譯成，把$btnSm指定給$('#BtnSm')的意思
const $conTent = $('#Content'); //命名可以不用加$

$btnLg.click(function(){
    $conTent.css('font-size', 20);
});

$btnSm.click(function(){
    //$conTent.css('font-size', 15);
    //$conTent.css('fontSize', 17);
    //$conTent.css('color', 'red');

    $conTent.css({
        'font-size': '.5em',
       backgroundColor : 'red'
    });


});