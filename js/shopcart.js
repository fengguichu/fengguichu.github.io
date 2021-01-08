//1.获取存储信息，购物车已存在的，增加数量，不存在的插入表单
//2.点击加减数量，数量和价格相对应并展示
//3.点击删除，删除本商品的本地存储
//获取存储信息
// 公共方法
function getCart() {
    var list = localStorage.getItem('cart') || "[]"; //字符串
    return JSON.parse(list);
}

function setCart(arr) {

    localStorage.setItem('cart', JSON.stringify(arr))
}
var allPrice = 0
    // 1 购物车页面一打开就要展示该用户的购物车商品列表
showList()
    //点击加减事件


function showList() {
    var productList = getCart();
    if (productList.length < 1) {
        $('.cart_cen').hide();
        $('.cart_top').hide();
        $('.cart_null').show();
        return;
    }
    // $('tbody').empty();
    $('.cart_cen').show();
    $('.cart_null').hide();
    $.each(productList, function(index, product) {
        console.log(product)
        $('.cart_cen_m ul').append(`
        <li>
        <div class="pic float_left">
            <img src="${product.product_img}" alt="">
        </div>
        <div class="name float_left">
            <a href="">${product.product_title}</a>
        </div>
        <div class="price_one float_left">
            <span>￥${product.product_price}元</span>
        </div>
        <div class="num float_left">
            <span class="num_delete">-</span><input type="text" name="num" id="num" value="${product.product_num}"><span class="num_add">+</span>
        </div>
        <div class="price float_left">
            <span class="now_price">￥${product.product_price*product.product_num}元</span>
        </div>
        <div class="del float_left">
            <a class="btn-del">删除</a>
        </div>
    </li>
    `)
        allPrice = allPrice + product.product_price * product.product_num
        $('.price_all').html(allPrice)
        $('.num_delete').click(function() {
            if ($('#num').val() == 1) {
                alert('最低数量为一件')
            } else {
                $('#num').val(product.product_num - 1)
                product.product_num = product.product_num - 1
                $('.now_price').html("￥" + product.product_price * product.product_num + "元")
                allPrice = allPrice - product.product_price
                $('.price_all').html(allPrice)
                setCart(productList) //放回浏览器
            }
        })
        $('.num_add').click(function() {
                $('#num').val(product.product_num - 1 + 2)
                product.product_num = product.product_num - 1 + 2
                $('.now_price').html("￥" + product.product_price * product.product_num + "元")
                allPrice = allPrice + product.product_price
                $('.price_all').html(allPrice)
                setCart(productList) //放回浏览器
            })
            //本次存储数据 productList进行删改，重新提交newProductList
        $('.btn-del').click(function() {
            productList = []
            setCart(productList)
            alert('删除成功')
            location.reload()
        })
    })
}