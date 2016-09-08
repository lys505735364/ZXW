var baseUrl = "http://datainfo.duapp.com/shopdata/";
var tmpUrl = baseUrl + 'getGoods.php';
$.ajax({
	url: tmpUrl,
	type: 'GET',
	dataType: 'JSONP',
	//				data:'status=register&userID=66&password=123456',
	success: function(res) {
		console.log(typeof res);
		console.log(res);
		console.log(res[5].goodsListImg);
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		console.log("XMLHttpRequest:----" + XMLHttpRequest);
		console.log("textStatus:---" + textStatus);
		console.log("errorThrown:---" + errorThrown);
	}
})