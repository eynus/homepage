
$(function () {
    var curIndex
        , $input
        , val
        , checkedNum = 0
        , totalPrice
        , checkedArr = []//0,1,2
        , $item = $('li.item')
        , lenPro = $item.length;//3
/**
 * 还需要优化：
 * 1.全部点击时，自动勾选全选
 * 2.全选时，取消一个，全选自动取消勾选
 */
    checkInit();
    calProPriceInit();

    //全勾选
    $('#listAll').on('change', function () {
        if ($('#listAll').prop('checked')) {
            $('.check-item').prop('checked', true);
            pushAllIntoArray();
        }
        else {
            $('.check-item').prop('checked', false);

            checkedArr = [];
        }
        updateControl(this);
    });
    $('.check-item').on('change', function () {
        if ($(this).prop('checked')) {
            checkedArr.push(findCurIndex(this));

        } else {
            checkedArr.splice(checkedArr.indexOf(findCurIndex(this)), 1);

        }
        updateControl(this);
    })

    $('.input-amount-box').find('.btn-minus').add('.btn-plus').on('click', function () { //点击-//点击+

        // console.log("this")
        findCurIndex(this);
        updateControl(this);
        updateSingleProSum();

    });

    $('.input-amount-box').find('input').on('input', function () {                           //输入框  blur改为 input 变化时检测
        val = $(this).val();
        findCurIndex(this);
        if (!val || parseFloat(val) < 1 ||  isNaN(val)) {
            $(this).val('1');
            val = 1;
            notIn(curIndex);
        }
        if(parseFloat(val) > 20 ){
            $(this).val('20');
            val = 20;
            notIn(curIndex);
        }
        updateControl(this);
        updateSingleProSum();

    })

    //总的更新
    function updateControl(that) {//是否执行updateCount updateCheckedNum

        updateVal();
        if ($(that).hasClass('btn-minus')) {
            updateCount(-1);
        } else if ($(that).hasClass('btn-plus')) {
            // console.log('+')
            updateCount(1);
        }

        updateCheckedNum();
        updateOrderTotalPrice();
    }
    //把所有商品index放如array
    function pushAllIntoArray() {
        checkedArr = [];
        for (var i = 0; i < lenPro; i++) {
            checkedArr.push(i);
        }
    }
    //更新总件数
    function updateCheckedNum() {

        if (checkedArr.length == 0) {

            $('.checked-num').text(0.00);
            return;
        }
        var countAll,
            countArr = checkedArr.map(function (ele) {
                return (findCountPerProduct(ele));

            });
        countAll = countArr.reduce(function (accu, cur) {
            return accu + cur;
        });
        $('.checked-num').text(countAll);
    }
    //更新订单的总金额
    function updateOrderTotalPrice() {

        if (checkedArr.length == 0) {

            totalPrice = 0.00;
        } else {
            var priceArr = checkedArr.map(function (ele) {
                return (calcu(ele));

            })

            totalPrice = priceArr.reduce(function (accu, cur) {
                return parseFloat(accu) + parseFloat(cur);

            });
        }
        $('.totalPrice').text(parseFloat(totalPrice).toFixed(2));

    }
    //计算单件总价
    function calcu(index) {
        var p = parseFloat($(".price span").eq(index).text()),
            n = parseInt($('.input-amount').eq(index).val());
        return (p * n).toFixed(2);
    }
    //该商品件数
    function findCountPerProduct(index) {
        return parseInt($('.input-amount').eq(index).val());
    }
    // 更新val
    function updateVal() {
        $input = $('.input-amount').eq(curIndex);
        val = $input.val();
    }
    //实时更新显示的数字
    function updateCount(num) {

        val = parseFloat(val) + num;
        notIn(curIndex);
        $input.val(val);


    }
    //not in 置灰/恢复
    function notIn(index) {
        $('li.item').eq(index).find('.disabled').removeClass('disabled');
        if (val >= 10) {
            val = 10;

            $('.btn-plus').eq(index).addClass('disabled');
        }
        else if (val <= 1) {
            val = 1;
            $('.btn-minus').eq(index).addClass('disabled');
        }

    }
    //实时更新显示的单件商品总价
    function updateSingleProSum() {

        var sum = val * parseFloat($('.price').eq(curIndex).children('span').text());
        // console.log(sum + ' sum' + val + " val")
        $('.total-pro-price').eq(curIndex).text(sum.toFixed(2))
    }

    // 找到当前的index
    function findCurIndex(that) {
        curIndex = $('li.item').index($(that).parents('li'));
        return curIndex;
    }

    //检查初始化时是否需要置灰
    function checkInit() {

        $('.input-amount').each(function (index) {
            // console.log(this)
            val = parseInt($(this).val());
            notIn(index);
        })
    }
    //初始化：计算单件商品金额金额
    function calProPriceInit() {
        for (var i = 0; i < lenPro; i++) {

            $('.total-pro-price').eq(i).text(calcu(i));

        }
    }
}

)