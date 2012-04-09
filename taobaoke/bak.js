

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
		navSelector  : "#page_nav", //������ѡ�������ᱻ����
		nextSelector : "#page_nav a",//������һҳ���ӵ�ѡ����
		itemSelector : ".prtbox",//�㽫Ҫȡ�ص�ѡ��(���ݿ�)						  
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

// ����������ڰ� scroll �¼�
/*
$(window).bind("scroll",function(){
    // �жϴ��ڵĹ������Ƿ�ӽ�ҳ��ײ�
	
    if( $(document).scrollTop() + $(window).height() > $(document).height() - 100 ) {
        // �ж���һҳ�����Ƿ�Ϊ��
        if( nextHref != undefined ) {
            // ��ʾ���ڼ���ģ��
            //$("#page_loading").show("slow");
            // Ajax ��ҳ
			getdata()
			
		} else {
            $("#page_loading span").text("ľ�����ޣ����һҳ�ˣ�");
            $("#page_loading").show("fast");
            setTimeout("$('#page_loading').hide()",1000);
            setTimeout("$('#page_loading').remove()",1100);
        }
    }
});
*/