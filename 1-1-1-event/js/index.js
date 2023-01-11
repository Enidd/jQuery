//標題一"的"滑鼠事件:放開

$('h1').on('click' , getTitle);

$('p').on('click' , getParagraph);


//具名函式，可以共用
function getTitle(){
    alert('標題一');
}

function getParagraph(){
    alert('段落一');
}