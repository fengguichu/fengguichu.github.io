$.ajax({
        type: "get",
        url: "../goods.json",
        dataType: "json",
        success: function(res) {
            console.log(res)
            $.each(res, function(i, item) {
                //插入标签，并渲染数据
                $('.goods').append(`
                <li class="goods_li">
                <a href="../goods.html">
                    <p><img src="${item.img}" alt=""></p>
                    <p>${item.price}<span>${item.costPrice}</span></p>
                    <span>${item.title}</span>
                </a>
                </li>
                `)
                $('.goods_li').css({
                    "width": "219px",
                    "height": "272px",
                    "border-right": "1px solid #eaeaea",
                    "border-bottom": "1px solid #eaeaea",
                    "overflow": "hidden",
                    "float": "left",
                    "padding": "10px"
                })
                $('.goods_li img').css({
                    "display": "block",
                    "width": "160px",
                    "height": "160px",
                    "margin": "10px auto"
                })
                $('.goods_li p span').css({
                    "color": '#9b9b9b',
                    'font-size': '14px',
                    'text-decoration': 'line-through'
                })
                $('.goods_li p').css({
                    "color": "#e10808",
                    "font-size": "18px",
                    "margin-top": "10px",
                    'text-decoration': 'none'
                })
                $('.goods_li>a>span').css({
                    'line-height': ' 18px',
                    'height': '36px',
                    'overflow': 'hidden',
                    'font-size': '12px',
                    'word-break': 'break-all'
                })

                $('.f1').css({
                    "border-top": "1px solid #000",
                    "overflow": "hidden"
                })
                $('.goods_li').mousemove(function() {
                    $(this).children('a').children('span').css({
                        'color': 'red'
                    })
                })
                $('.goods_li').mouseout(function() {
                    $(this).children('a').children('span').css({
                        'color': '#000'
                    })
                })
            })
        }
    }

)