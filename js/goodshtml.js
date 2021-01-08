//初始数量
var num = 1
var price = 15660
$('.num_delete').click(function() {
    if ($('#num').val() == 1) {
        alert('最低数量为一件')
    } else {
        $('#num').val(--num)
        $('.now_price').html("￥" + price * num + "元")
    }
})
$('.num_add').click(function() {
        $('#num').val(++num)
        $('.now_price').html("￥" + price * num + "元")
    })
    //数量大于1，点击加入购物车
    // 公共方法
function getCart() {
    var list = localStorage.getItem('cart') || "[]"; //字符串
    return JSON.parse(list);
}

function setCart(arr) {

    localStorage.setItem('cart', JSON.stringify(arr))
}
// 点击加入购物车 
$('#add').click(function() {
    var newProduct = {
        product_id: $('#add').data('id'),
        product_num: $('#num').val(),
        product_title: $('#add').data('title'),
        product_img: $('#add').data('img'),
        product_price: $('#add').data('price'),

    }
    var productList = getCart() //获取已有储存
    var i
        // 索引ID，有则叠加无则插入
        // console.log(newProduct.product_id);
    $.each(productList, function(index, item) {
        // console.log("第" + index + "次的" + this.product_id);
        if (this.product_id == newProduct.product_id) {
            this.product_num = this.product_num - 1 + 2
            return i = 1
        }
    })
    console.log(i);
    if (i != 1) {
        productList.push(newProduct) //插入本次商品
    }
    setCart(productList) //放回浏览器
    alert('商品添加成功')

})