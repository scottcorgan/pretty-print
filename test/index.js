const print = require('../');
const objprint = require('../src/');

// var data = {
//   one: '1',
//   two: '2',
//   three: '3',
//   four: '4'
// };

// var data = [{
//   name: 'name1',
//   desc: 'desc1'
// },
// {
//   name: 'name2',
//   desc: 'desc2'
// }];


// var data = ['name1', 'name2'];

data = {
  name: 'Scott',
  age: 30,
  emails: ['scottcorgan@gmail.com', 'scott@divshot.com', 'scott@lakeshorecitychurch.com'],
  wife: 'Lindsay'
};


print(data, {
  // padding: 3,
  leftPadding: 2,
  rightPadding: 2,
  key: 'name',
  value: 'desc'
});


let obj = {"orders":[{"cart_key":"retail_global/43/","desc":"xxxx发货","delivery_fee":5,"delivery_fee_reduction":5,"delivery_fee_reduction_desc":"享自营满2件包邮，已减免¥5","order_discount_price":0,"promo_card_discount_price":0,"promo_cardno":"","red_envelope_discount_price":0,"red_envelope_card_no":"","exp":[],"red_envelopes":{"useableNum":0,"useableCards":[],"maxEffectParams":0,"maxEffectFaceValue":"0.00","disableNum":0,"disableCards":[],"forbiddenProducts":{"1092194_d170701p3710832mz":{"item_short_name":"御泥坊光感璀璨皙妍7片面膜礼包","product_id":"3710832","attribute":"","size":"1个+5张+30ml*7片\t"},"1090694_d170701p3562794mz":{"item_short_name":"一叶子洗浴海绵","product_id":"3562794","attribute":"-","size":"-"}},"allow_type":1,"allowUse":1,"notAllowDesc":"","code":1},"promo_cards":{"useableNum":0,"useableCards":[],"maxEffectParams":0,"maxEffectFaceValue":"0.00","disableNum":5,"disableCards":[],"forbiddenProducts":{"1086725_d170704p3211785zc":{"item_short_name":"Pretty tells双面双效化妆棉套装","product_id":"3211785","attribute":"","size":"无"},"1092194_d170701p3710832mz":{"item_short_name":"御泥坊光感璀璨皙妍7片面膜礼包","product_id":"3710832","attribute":"","size":"1个+5张+30ml*7片\t"},"1090694_d170701p3562794mz":{"item_short_name":"一叶子洗浴海绵","product_id":"3562794","attribute":"-","size":"-"}},"allowUse":1,"notAllowDesc":"","code":1},"return_cards":[],"show_tax_price":0,"goods_tax_info":[],"items":[{"item_short_name":"御泥坊光感亮肤睡眠面膜套装（洁面+水+乳液+睡眠）","quantity":3,"item_price":"149.90","item_url":"http://mall.jumei.com/product_656894.html","product_img_100":"http://p4.jmstatic.com/product/000/656/656894_std/656894_100_100.jpg","size":"100ml+150ml+120ml+180g","attribute":"","type":0,"item_category":"product","is_combined":0,"user_purchase_limit":0,"is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"1050233_"},{"item_short_name":"御泥坊葡萄籽琉璃亮颜黑面膜21片","quantity":2,"item_price":"89.90","item_url":"http://mall.jumei.com/product_2047539.html","product_img_100":"http://p4.jmstatic.com/product/002/047/2047539_std/2047539_100_100.jpg","size":"30ml×21片/盒","attribute":"","type":0,"item_category":"product","is_combined":0,"user_purchase_limit":0,"is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"1075439_"},{"item_short_name":"御泥坊清爽平衡矿物蚕丝面膜（黑面膜）21片装","quantity":1,"item_price":"129.90","item_url":"http://mall.jumei.com/product_1623951.html","product_img_100":"http://p1.jmstatic.com/product/001/623/1623951_std/1623951_100_100.jpg","size":"30ml*7片/盒*3盒","attribute":"","type":0,"item_category":"product","is_combined":0,"user_purchase_limit":0,"is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"1071197_"},{"item_short_name":"御泥坊清爽平衡矿物蚕丝面膜（黑面膜）28片套装","quantity":2,"item_price":"129.90","item_url":"http://mall.jumei.com/product_1747484.html","product_img_100":"http://p4.jmstatic.com/product/001/747/1747484_std/1747484_100_100.jpg","size":"30ml*7片*4盒","attribute":"","type":0,"item_category":"product","is_combined":0,"user_purchase_limit":0,"is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"1072987_"},{"item_short_name":"一叶子(one leaf) 面膜礼遇 补水舒润礼盒20片（嫩蔷薇舒缓补水面膜25ml*9+嫩石榴净透补水面膜25ml*9+白茶水润焕采蝶翼眼膜7ml*2","quantity":2,"item_price":"99.00","item_url":"http://mall.jumei.com/product_1713158.html","product_img_100":"http://p3.jmstatic.com/product/001/713/1713158_std/1713158_100_100.jpg","size":"25ml*9+25ml*9+7ml*2","attribute":"","type":0,"item_category":"product","is_combined":0,"user_purchase_limit":0,"is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"1072687_"},{"item_short_name":"一叶子(one leaf) 营润亮颜奢养面膜礼盒30片 （黑松露营润亮颜面膜25ml*15片+新鲜奢养面膜25ml*15片）","quantity":1,"item_price":"139.00","item_url":"http://mall.jumei.com/product_2247248.html","product_img_100":"http://p3.jmstatic.com/product/002/247/2247248_std/2247248_100_100.jpg","size":"25ml*15+25ml*15","attribute":"","type":0,"item_category":"product","is_combined":0,"user_purchase_limit":0,"is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"1077173_"},{"item_short_name":"Pretty tells双面双效化妆棉套装","quantity":1,"item_price":"39.00","item_url":"http://cd.jumei.com/i/deal/d170704p3211785zc.html","product_img_100":"http://p0.jmstatic.com/product/003/211/3211785_std/3211785_100_100.jpg","size":"无","attribute":"","type":0,"item_category":"product","is_combined":0,"user_purchase_limit":0,"is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"1086725_d170704p3211785zc"},{"item_short_name":"御泥坊双重莹润透亮面膜套装","quantity":1,"item_price":"79.90","item_url":"http://cd.jumei.com/i/deal/d170704p1095430.html","product_img_100":"http://p0.jmstatic.com/product/001/095/1095430_std/1095430_100_100.jpg","size":"25ml*21片","attribute":"","type":0,"item_category":"product","is_combined":0,"user_purchase_limit":0,"is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"1061218_d170704p1095430"},{"item_short_name":"兰蔻 (Lancome) 奇迹香氛100ml","quantity":1,"item_price":"429.00","item_url":"http://item.jumeiglobal.com/ht170704p1480139t2.html?from=jmglobal","product_img_100":"http://p4.jmstatic.com/product/001/480/1480139_std/1480139_100_100.jpg","size":"100ml","attribute":"","type":0,"item_category":"retail_global","is_combined":0,"user_purchase_limit":0,"is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"702005770_ht170704p1480139t2"},{"item_short_name":"菲拉格慕(Ferragamo ) 仲夏之梦淡香水30ml","quantity":1,"item_price":"139.00","item_url":"http://item.jumeiglobal.com/1062.html?from=jmglobal","product_img_100":"http://p3.jmstatic.com/product/001/458/1458573_std/1458573_100_100.jpg","size":"30ml","attribute":"","type":0,"item_category":"retail_global","is_combined":0,"user_purchase_limit":0,"is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"702003217_"},{"item_short_name":"御泥坊光感璀璨皙妍7片面膜礼包","quantity":1,"item_price":"0.00","item_url":"http://cd.jumei.com/i/deal/d170701p3710832mz.html","product_img_100":"http://p2.jmstatic.com/product/003/710/3710832_std/3710832_100_100.jpg","size":"1个+5张+30ml*7片\t","attribute":"","type":1,"item_category":"redeem","is_combined":0,"user_purchase_limit":"0","is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"1092194_d170701p3710832mz"},{"item_short_name":"一叶子洗浴海绵","quantity":1,"item_price":"0.00","item_url":"http://cd.jumei.com/i/deal/d170701p3562794mz.html","product_img_100":"http://p4.jmstatic.com/product/003/562/3562794_std/3562794_100_100.jpg","size":"-","attribute":"-","type":1,"item_category":"redeem","is_combined":0,"user_purchase_limit":"0","is_vcb":0,"show_tax_price":0,"goods_price":"","tax_price":"","item_key":"1090694_d170701p3562794mz"}],"primitiveExp":[]}],"invoice":{"isShowInvoice":true,"allowChoose":true,"oldInvoice":{"invoice_type":1,"invoice_medium":2,"is_need_invoice":0,"invoice_companyname":"","invoice_code":"","invoice_email":""},"notInvoice":[{"item_short_name":"兰蔻 (Lancome) 奇迹香氛100ml","saller":"xxxx","product_img_100":"http://p4.jmstatic.com/product/001/480/1480139_std/1480139_100_100.jpg"},{"item_short_name":"菲拉格慕(Ferragamo ) 仲夏之梦淡香水30ml","saller":"xxxx","product_img_100":"http://p3.jmstatic.com/product/001/458/1458573_std/1458573_100_100.jpg"},{"item_short_name":"御泥坊光感璀璨皙妍7片面膜礼包","saller":"xxxx","product_img_100":"http://p2.jmstatic.com/product/003/710/3710832_std/3710832_100_100.jpg"},{"item_short_name":"一叶子洗浴海绵","saller":"xxxx","product_img_100":"http://p4.jmstatic.com/product/003/562/3562794_std/3562794_100_100.jpg"}],"invoiceThirdParty":[],"invoiceMap":{"medium_map":[{"invoice_medium":1,"name":"纸质发票","useable":1},{"invoice_medium":2,"name":"电子发票","useable":1}],"type_map":[{"invoice_type":1,"name":"个人"},{"invoice_type":2,"name":"单位"}]}},"deliveryDay":{"show":1,"lastPreferDeliveryDay":"","list":[{"type":"weekday","title":"仅工作日送货"},{"type":"weekend","title":"仅周末送货"},{"type":"","title":"工作日/周末/假日均可"}]},"addresses":{"need_id_num":1,"limit_modify":10,"modify_count":0,"last_addressId":"73794875","show_msg":"您的订单内含有海外购商品，根据国家法律规定，您需要上传身份证号，以便海关清关，否则有可能收不到包裹！","name_id_num_list":[{"name":"曹巍","idNum":"5101**********2917","id_num_encrypt":"289048773"}],"list":[{"address_id":"73794875","receiver_name":"*巍","address":"益州大道中段1800号天府软件园G3","hp":"185****9227","phone":"","structured_address":"四川省-成都市-高新区","id_num":"510184***********7","id_num_checked":true,"info":{"code":0,"msg":""},"invalid_structure_code":"false","cb_detail":"四川省-成都市-高新区 益州大道中段1800号天府软件园G3","cb_phone":"185****9227 "},{"address_id":"99129502","receiver_name":"*翘","address":"成都地方","hp":"123****2313","phone":"","structured_address":"西藏自治区-日喀则地区-江孜县","id_num":"","id_num_checked":false,"info":{"code":0,"msg":""},"invalid_structure_code":"false","cb_detail":"西藏自治区-日喀则地区-江孜县 成都地方","cb_phone":"123****2313 "}],"expand":false,"showDialog":false,"editData":{},"dialogTitle":"","needIdShowDialog":false,"idShowDialogTitle":"由于法规要求，跨境购物需要您填写收件人身份证信息"},"needAuth":0,"summary":{"total_items_amount":"2043.10","promo_card_discount_price":0,"red_envelope_discount_price":0,"order_discount_price":0,"delivery_fee":0,"total_amount":"2043.10","total_quantity":17,"processing":false},"summaryMap":[{"key":"promo_card_discount_price","name":"现金券优惠金额","sum":0},{"key":"red_envelope_discount_price","name":"红包优惠金额","sum":0},{"key":"order_discount_price","name":"促销减免金额","sum":0},{"key":"delivery_fee","name":"总运费","sum":0}],"allowBackCart":1,"cartCountDown":300,"tipMessage":"","showEditNum":0,"isShowOrderVerify":0,"formToken":"Cart_cftk_24769921111117","from":"add_to_confirmation_new"};
let arr =
    [
        {
            name: 'caowei',
            age: 30
        },
        12,
        'tsaowe'
    ];

let fun = {
  a(){
    console.log(123);
  }
};

console.log(objprint.translate(fun));