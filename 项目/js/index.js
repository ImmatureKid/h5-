$(function(){
    if($(window).width()<1000&&$(window).width()>599){
        var num =$(window).width()/(1600/737);
         $(".banner").height(num);
     }else if($(window).width()<=599){
         var num =$(window).width()/(1600/737);
         $(".banner").height(num);
     }
    $(".nav ul li").hover(function(){
        $(this).find("ul").stop().slideDown()
    },function(){
        $(this).find("ul").stop().slideUp()
    })
    var banner = document.getElementsByClassName("banner");
    var oimg=document.getElementsByClassName('imgList');
    var obtn=document.getElementsByClassName('hbtn');
    var img=oimg[0].getElementsByTagName('li')
    var oli=obtn[0].getElementsByTagName('li')
        var num=0
        var key=0
        var timer2=null
        // 公用函数
        function show(){
        	for (var i = 0; i < oli.length; i++) {
        		oli[i].className=''
        	};
        	oli[num].className='active'
        	var dis=(-img[0].offsetWidth)*key-oimg[0].offsetLeft;
        	var start=oimg[0].offsetLeft;
        	var count=20;
        	var now=0;
        	clearInterval(timer2);
        	timer2=setInterval(function(){
                  now++;
                  oimg[0].style.left=start+dis*now/count+'px'
                  if (now==count) {
                  	clearInterval(timer2)
                  };
        	},30)
        }
        // 选项卡
        for (var i = 0; i < oli.length; i++) {
        	oli[i].index=i
        	oli[i].onclick=function(){
        	num=key=this.index
        	show()
        	}
        };
        function next(){
        	num++
        	if (num>oli.length-1) {
        		num=0
        	};
            key++;
            if (key>oli.length) {
                key=1
                oimg[0].style.left=0
            };
        	show()
        }
        // 划上停止
        var timer=setInterval(next,2000)
        oimg[0].onmouseover=function(){
        	clearInterval(timer)
        }
        oimg[0].onmouseout=function(){
        	timer=setInterval(next,3000)
        }
    $(window).resize(function(){
        if($(window).width()<1000&&$(window).width()>599){
       var num =$(window).width()/(1600/737);
        $(".banner").height(num);
    }else if($(window).width()<=599){
        var num =$(window).width()/(1600/737);
        $(".banner").height(num);
    }else{
        $(".banner").height(768);
        $(".top .nav").show();
    }
    })
  
    
    $(".top .btn").click(function(){
        $(".top .nav").slideToggle();
    }) 
    $(".top .nav ul.clearfix li").click(function(){
        $(this).find("ul").slideToggle();
    })
    $(window).scroll(function(){
        $(".animated").each(function(index){
            if($(window).scrollTop()>$(this).offset().top-$(window).height()){
                var str = $(this).attr("as");
                $(this).addClass(str);
            }
        })
    })
    $(".page2 .wenzi").mouseover(function(){
        $(this).css("background","orange").siblings(".pic").find("img").css("transform","scale(1.1)")
    })
    $(".page2 .wenzi").mouseleave(function(){
        $(this).css("background","#a74949").siblings(".pic").find("img").css("transform","none")
    })
    $(".page3 .view").mouseover(
        function(){
            $(this).siblings(".pic").find("img").css("margin-top","-10px")
        }
    )
    $(".page3 .view").mouseleave(
        function(){
            $(this).siblings(".pic").find("img").css("margin-top","0px")
        }
    )
})