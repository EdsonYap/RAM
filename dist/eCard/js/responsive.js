function responsive_winResizeFunc(){onWindowResize();$(window).resize(function(){onWindowResize()});$(window).load(function(){onWindowResize()})}function onWindowResize(){winW=$(window).width();winH=$(window).height();var d=0;var s=winW-d;var n=winH-d;var i=stageHeight;var x=stageWidth;var q=stageWidth/stageHeight;var j=winH/stageHeight;var g=winW/stageWidth;if(winH>winW){if(j>g){q=j}else{q=g}}else{if(j<g){q=j*0.998}else{q=g}}var k=stageWidth*q,e=stageHeight*q,c=$(".frameSprite").height();frameAspect=c/100,frameSpritePer=frameAspect*q;$("#gameCanvas").css("width",k+"px");$("#gameCanvas").css("height",e+"px");var y=-$("#gameCanvas").width()/2;$(".canvasHolder").css("margin-left",y+"px");var A=$("#gameCanvas").width(),t=$("#gameCanvas").height(),b=$(".frameSprite").width(),z=$(".frameSprite").height();var h=$(".wrapContent"),v=$(".wrapTop"),r=$(".wrapBot"),w=$(".wrapMiddle"),r=$(".wrapBot"),f=$(".frameRptVer"),m=$(".wrapMLeft"),o=$(".wrapMRight");var l=0.31*z,p=0.32*b,u=b-p,a=0.566*z;h.css({height:t+l});$(".wrapContent").css({top:z-l});framePosLeft=y-b+p;v.width(A+u*2).css({"margin-left":framePosLeft});r.width(A+u*2).css({"margin-left":framePosLeft});f.css({width:A-p*2,left:b});m.css({height:t-z+l,"margin-left":-b+p-1,top:l-1,left:"0"});o.css({height:t-z+l,"margin-right":-b+p+1,top:l-1,right:"0"});if(winW<1280){o.css({height:t-z+l,"margin-right":-b+p+1,top:l-1,right:"-1px"})}};