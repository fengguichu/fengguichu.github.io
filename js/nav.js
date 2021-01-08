var liArr = $('.nav_down').children().children()
$.each(liArr, function(index, item) {
    this.onmouseover = function() {
        $('.h_nav_l_main').children('.kinds').eq(index).css({

            "display": "block",
            "top": index * 45 + "px"
        })
    }
    this.onmouseout = function() {
        $('.h_nav_l_main').children('.kinds').eq(index).css({
            "display": "none"
        })
    }
})



console.log(1);
console.log(liArr);
console.log(2);