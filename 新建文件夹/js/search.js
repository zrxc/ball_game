var searchText = $.getQueryString('search_text');
console.log(searchText);
var oSearchText = document.getElementById('search-text');
oSearchText.value = searchText;

searchGoods();
function searchGoods() {
	$.ajax({
	    "url": 'http://lc.shudong.wang/api_goods.php?search_text=' + searchText,
	    'type': 'GET',
	    'dataType': 'json',
	    'success': function(response) {
	      console.log(response);
	      var html = "";
	      for (var i = 0; i < response.data.length; i++) {
	        var obj = response.data[i];
	        html += '<div><a href="detail.html?goods_id='
	          + obj.goods_id
	          + '"><img src="'
	          + obj.goods_thumb
	          + '" /><p>'
	          + obj.goods_name
	          + '</p></a></div>';
	      }
	      document.getElementById('container').innerHTML = html;
	    }
	});
}