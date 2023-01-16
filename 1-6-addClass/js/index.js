$('#EntryType').addClass('Type1');

//宣告變數
//最好是要寫宣告，這樣才可以將之存在資料庫中，不用每次載入都要重新找一次
const $tab1 = $('#Tab1');
const $tab2 = $('#Tab2');
const $tab3 = $('#Tab3');
const $entryType = $('#EntryType');

// 以下三種寫法都可以
$tab1.click(function(){
    $entryType.removeClass();
    $entryType.addClass('entry-out Type1');
});

$tab2.click(function(){
    $entryType.removeClass().addClass('entry-out Type2');
});

$tab3.click(function(){
    $entryType
    .removeClass()
    .addClass('entry-out Type3');
});