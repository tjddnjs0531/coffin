$(function(){
    //quick check
        $(".check").click(function(){
            $(".ch_on").toggleClass("on");
        })//check click

    //top popup
        setTimeout(function(){
            $(".top_banner").stop().slideDown();
        })
        $(".close").click(function(){
            $(".top_banner").stop().slideUp();
        })

    //menu
        $(".sub, .subback").hide(0);
        $(".nav li, .subback").hover(function(){
            $(".sub, .subback").stop().slideDown();
        },function(){
            $(".sub, .subback").stop().slideUp();
        })

    //main visual
        var n =0;
        var pos = n*(-100)+"%";
        var time = setInterval(move,2000);

        function move(){
            if(n<4){
                n++;
            }else{
                n=0;
            }//if else
            $(".dots li a").removeClass("act");
            $(".dots li").eq(n).find("a").addClass("act");

            var pos = n*(-100)+"%";
            $(".main_visual").animate({left:pos},500)
        }//move

        $(".dots li, .control a").hover(function(){
            clearInterval(time);
        },function(){
            time = setInterval(move,2000);
        })//dots hover

        $(".dots li a").click(function(){
            $(".dots li a").removeClass("act");
            $(this).addClass("act");
            n=$(this).parent().index();
            pos=n*(-100)+"%";
            $(".main_visual").animate({left:pos},500)
        })//dots click

        $(".prev").click(function(){
            if(n>0){
                n--;
            }else{
                n=4;
            }
            $(".dots li a").removeClass("act");
            $(".dots li").eq(n).find("a").addClass("act");
            var pos = n*(-100)+"%";
            $(".main_visual").animate({left:pos},500)
        })//prev
        $(".next").click(function(){
            if(n<4){
                n--;
            }else{
                n=0;
            }
            $(".dots li a").removeClass("act");
            $(".dots li").eq(n).find("a").addClass("act");
            var pos = n*(-100)+"%";
            $(".main_visual").animate({left:pos},500)
        })//next
    
    //sns tab
        $(".cont5_inner ul li").click(function(e){
            e.preventDefault();
            $(".cont5_inner ul li").removeClass("on");
            $(this).addClass("on");
        })

    })//jQuery