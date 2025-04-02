$(document).ready(function(){

    
    
    function mobile(){
        //햄버거버튼
    let ham = true;
        $(".ham_btn").on("click",function(){
            ham = !ham;
            if(ham == false){
            $(".gnb").on().slideToggle(800)
            $(this).children(".btn_line").eq(1).animate({"marginLeft":"10px"},800)
            }else{
            $(this).children(".btn_line").eq(1).animate({"marginLeft":"0px"},800)
            }
        })
        var swiper = new Swiper(".mySwiper", {
            
            effect: "cards",
            grabCursor: true,
          });
        //메뉴클릭
        $(".gnb_menu>a").on("click",function(){
            let i = $(this).index();
            let a = $('section').eq(i).offset().top
            let mob = a-70;
            $("html, body").stop().animate({"scrollTop" : mob})
            $(".gnb").on().slideUp(800)
        })
    }//모바일끝

    function pc(){
                //햄버거버튼
    let ham = true;
    $(".ham_btn").on("click",function(){
        ham = !ham;
        if(ham == false){
        $(".gnb").on().slideToggle(800)
        $(this).children(".btn_line").eq(1).animate({"marginLeft":"10px"},800)
        }else{
            $(".gnb").on().slideToggle(800)
        $(this).children(".btn_line").eq(1).animate({"marginLeft":"0px"},800)
        }
    })
    var swiper = new Swiper(".mySwiper", {
        
        effect: "cards",
        grabCursor: true,
      });
        //메뉴클릭
        $(".gnb_menu>a").on("click",function(){
            let i = $(this).index();
            let a = $('section').eq(i).offset().top
            $("html, body").stop().animate({"scrollTop" : a})
            $(".gnb").on().slideUp(500)
            $(".ham_btn").children(".btn_line").eq(1).animate({"marginLeft":"0px"},800)
        })
        var swiper = new Swiper(".mySwiper", {
            
            effect: "cards",
            grabCursor: true,
          });
      
    }//pc 끝
    let winWidth = $(window).width();
    if(winWidth < 1200){
        mobile()
    }else{
        pc()
    }




});//document