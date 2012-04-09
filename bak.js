

    var $newElems = $( newElements );
    $container.masonry( 'appended', $newElems );


$(function() {

	$.ajax( {
		url: nextHref,
		async: false,
		type: "GET",
		
		success: function(data) {
			$('#container').masonry({
				itemSelector : '.prtbox'
			});
			$data.imagesLoaded(function(){
				$('#container').masonry( 'appended', $newElems, true );
				$newElems.animate({ opacity: 1 });
			});
		},
	});
	
	$('#container').infinitescroll({
		navSelector  : "#page_nav", //导航的选择器，会被隐藏
		nextSelector : "#page_nav a",//包含下一页链接的选择器
		itemSelector : ".prtbox",//你将要取回的选项(内容块)						  
		},
		function( newElements ) {
			var $newElems = $(newElements).css({ opacity: 0 });
			$newElems.imagesLoaded(function(){
			  $newElems.animate({ opacity: 1 });
			  $container.masonry( 'appended', $newElems, true ); 
			});
	  }
	);
});



$(function(){
	
	var $container = $('.thumbnails');
	
	$container.imagesLoaded(function(){
	  $container.masonry({
		itemSelector: '.span3',
		//columnWidth: 100
	  });
	});
	
	$container.infinitescroll({
		navSelector  : '#page-nav',    // selector for the paged navigation
		nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
		itemSelector : '.box',     // selector for all items you'll retrieve
		loading: {
		  finishedMsg: 'No more pages to load.',
		  img: 'http://i.imgur.com/6RMhx.gif'
		}
		},
		  // trigger Masonry as a callback
		function( newElements ) {
			// hide new items while they are loading
			//var $newElems = $( newElements ).css({ opacity: 0 });
			// ensure that images load before adding to masonry layout
			//$newElems.imagesLoaded(function(){
				// show elems now they're ready
			//	$newElems.animate({ opacity: 1 });
			//	$container.masonry( 'appended', $newElems, true );
			//});
			alert(1)
		}
	);
	
});













//$("#next_page a").attr("href");

// 给浏览器窗口绑定 scroll 事件
/*
$(window).bind("scroll",function(){
    // 判断窗口的滚动条是否接近页面底部
	
    if( $(document).scrollTop() + $(window).height() > $(document).height() - 100 ) {
        // 判断下一页链接是否为空
        if( nextHref != undefined ) {
            // 显示正在加载模块
            //$("#page_loading").show("slow");
            // Ajax 翻页
			getdata()
			
		} else {
            $("#page_loading span").text("木有了噢，最后一页了！");
            $("#page_loading").show("fast");
            setTimeout("$('#page_loading').hide()",1000);
            setTimeout("$('#page_loading').remove()",1100);
        }
    }
});
*/