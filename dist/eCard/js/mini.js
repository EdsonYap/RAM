function pageThree(){endingBlackBox()}function endingBlackBox(){boxBlackB=createBox("#000",stageWidth,stageHeight);stage.addChild(boxBlackB).set({alpha:0});TweenMax.to(boxBlackB,1,{alpha:.7,onComplete:endingAni})}function initEnding(){var e=new createjs.SpriteSheet({images:ssURL_arr(111,3,"images/ending/ending_",".jpg",1,"arr",0),framerate:15,frames:{height:741,width:470,count:55},animations:{runAndStop:[0,54,false],stay:[54,54,false]}});spriteEnding=new createjs.Sprite(e,0);spriteEnding.set({x:0,y:0,scaleX:2,scaleY:2,alpha:0})}function allSpriteAniRemoval(){spriteSock.gotoAndStop(0);spritePiston.gotoAndStop(0);spriteDigiStar.gotoAndStop(0);spriteAirAsia.gotoAndStop(0);spriteChicken.gotoAndStop(0);spriteSkeleton.gotoAndStop(0);spriteRobot.gotoAndStop(0);spriteBgLoop.gotoAndStop(0);stage.removeChild(spriteSock,spritePiston,spriteDigiStar,spriteAirAsia,spriteChicken,spriteSkeleton,spriteRobot,skeletonBg,spriteBgLoop)}function removeNewBg(){stage.removeChild(staticStage,staticTree)}function endingAni(){stage.addChild(spriteEnding).set({alpha:1}).play();stage.removeChild(boxBlackB);spriteEnding.addEventListener("animationend",function(){spriteEnding.gotoAndStop(0);stage.removeChild(spriteEnding);allSpriteAniRemoval();teethShineAni()})}function canvas_init(e,t,n){arrPhotos=[];canvasName=e;stageWidth=t;stageHeight=n;stage=new createjs.Stage(canvasName);stage.enableMouseOver(50);var r=new createjs.SpriteSheet({images:["assets/preloader.png"],framerate:25,frames:{height:64,width:64,regX:32,regY:32,count:16}});loaderMc=new createjs.Sprite(r,0);stage.addChild(loaderMc).set({x:stageWidth/2-10,y:stageHeight/2,alpha:1}).play();canvas_fps_init();canvas_loadGraphic();onEnterFrame(30)}function preloaderAni(){TweenMax.to(loaderMc,1,{y:stageHeight/2-30,rotation:5,onComplete:function(){TweenMax.to(loaderMc,1,{y:stageHeight/2-20,rotation:0,onComplete:preloaderAni});trace("lala")}})}function onEnterFrame(e){createjs.Ticker.addEventListener("tick",enterFrame_tick);createjs.Ticker.timingMode=createjs.Ticker.RAF_SYNCHED;createjs.Ticker.setFPS(e)}function canvas_fps_init(){fpsLabel=new createjs.Text("-- fps","0px Arial","#fff");fpsLabel.textAlign="left";fpsLabel.lineHeight=33;stage.addChild(fpsLabel);fpsLabel.x=stageWidth-539;fpsLabel.y=stageHeight-525}function createMc(e){return new createjs.Bitmap(e)}function createBox(e,t,n,r){var i=new createjs.Shape;i.graphics.beginFill(e);if(r!=undefined){i.graphics.setStrokeStyle(r.size,"round","round").beginStroke(r.color)}i.graphics.drawRect(0,0,t,n).endFill();return i}function saturation(e,t){var n=(new createjs.ColorMatrix).adjustSaturation(t);e.filters=[new createjs.ColorMatrixFilter(n)];e.cache(0,0,210,320)}function contrast(e,t){var n=(new createjs.ColorMatrix).adjustContrast(t);e.filters=[new createjs.ColorMatrixFilter(n)];e.cache(0,0,210,320)}function brightness(e,t){var n=(new createjs.ColorMatrix).adjustBrightness(t);e.filters=[new createjs.ColorMatrixFilter(n)];e.cache(0,0,210,320)}function init(){responsive_winResizeFunc();stageWidth=$("#gameCanvas").width();stageHeight=$("#gameCanvas").height();canvas_init("gameCanvas",stageWidth,stageHeight);var e=winW/stageWidth;var t=Math.floor($("#gameCanvas").height()*e);var n=t-$(window).height();var r=winH/8;g_scrollNum=n;g_scrollMaxNum=n;trace("tempScroll");TweenMax.to($("html, body"),2,{scrollTop:r,ease:Cubic.easeOut})}function scrollFunc(){trace($(document).scrollTop())}function initGrey(){if(firstPlay){pistonBg=createMc_id("pistonBg");pistonBg.set({x:657.5,y:1201,alpha:1,scaleX:0,scaleY:0,regX:96.5,regY:65.5});sockBg=createMc_id("sockBg");sockBg.set({x:570,y:860,alpha:1,scaleX:0,scaleY:0,regX:65,regY:105});digiStarBg=createMc_id("digiStarBg");digiStarBg.set({x:650,y:408,alpha:1,scaleX:0,scaleY:0,regX:162.5,regY:137.5});airAsiaBg=createMc_id("airAsiaBg");airAsiaBg.set({x:247,y:434,alpha:1,scaleX:0,scaleY:0,regX:125,regY:157.5});robotBg=createMc_id("robotBg");robotBg.set({x:580,y:572,alpha:1,scaleX:0,scaleY:0,regX:40,regY:64});skeletonBgSat=createMc_id("skeletonBgSat");skeletonBgSat.set({x:309,y:991,alpha:1,scaleX:0,scaleY:0,regX:72,regY:123});skeletonBg=createMc_id("skeletonBg");skeletonBg.set({x:309,y:991,alpha:1,scaleX:2,regX:72,regY:123,scaleY:2,cursor:"pointer"});skeletonEyeOnly=createMc_id("skeletonEyeOnly");skeletonEyeOnly.set({x:0,y:0,scaleX:0,scaleY:0,alpha:1});chickenBg=createMc_id("chickenBg");chickenBg.set({x:159,y:1183,alpha:1,scaleX:0,scaleY:0,regX:119,regY:151.5})}stage.addChild(pistonBg);stage.addChild(sockBg);stage.addChild(chickenBg);stage.addChild(digiStarBg);stage.addChild(airAsiaBg);stage.addChild(skeletonBgSat);stage.addChild(robotBg);var e=.1,t=.3;TweenMax.to(pistonBg,t,{scaleX:2,scaleY:2,ease:Back.easeOut,delay:0*e});TweenMax.to(sockBg,t,{scaleX:2,scaleY:2,ease:Back.easeOut,delay:1*e});TweenMax.to(chickenBg,t,{scaleX:2,scaleY:2,ease:Back.easeOut,delay:2*e});TweenMax.to(skeletonBgSat,t,{scaleX:2,scaleY:2,ease:Back.easeOut,delay:3*e});TweenMax.to(digiStarBg,t,{scaleX:2,scaleY:2,ease:Back.easeOut,delay:4*e});TweenMax.to(airAsiaBg,t,{scaleX:2,scaleY:2,ease:Back.easeOut,delay:5*e});TweenMax.to(robotBg,t,{scaleX:2.5,scaleY:2.5,ease:Back.easeOut,delay:6*e})}function removeAllBtn(e){for(var t=0;t<arrElement.length;t++){if(arrElement[t]!=undefined){arrElement[t].mouseEnabled=e}}}function elementsSetup(e){switch(e){case"piston":preloadSock();if(firstPlay){var t=new createjs.SpriteSheet({images:ssURL_arr(48,2,"images/piston/piston_",".png",1,"arr",0),framerate:22,frames:{height:131,width:193,regX:96.5,regY:65.5,count:24},animations:{runAndStop:[0,23,false]}});spritePiston=new createjs.Sprite(t,0);spritePiston.set({x:465+192.5,y:1070+131,scaleX:2,scaleY:2,alpha:1,cursor:"pointer"});arrElement.push(spritePiston);spritePiston.addEventListener("click",function(){removeAllBtn(false);spritePiston.gotoAndPlay("runAndStop")});spritePiston.addEventListener("animationend",function(){spritePiston.stop();removeAllBtn(true)})}stage.addChild(spritePiston).set({alpha:0});spritePiston.mouseEnabled=false;TweenMax.to(spritePiston,1,{alpha:1,onComplete:function(){spritePiston.mouseEnabled=true;stage.removeChild(pistonBg)}});break;case"sock":preloadDigiStar();if(firstPlay){var n=new createjs.SpriteSheet({images:ssURL_arr(22,2,"images/sock/Sock_",".png",0,"arr",0),framerate:29,frames:{height:210,width:130,regX:65,regY:105,count:22},animations:{runAndStop:[0,21,false]}});spriteSock=new createjs.Sprite(n,0);spriteSock.set({x:570,y:860,alpha:1,scaleX:2,scaleY:2,cursor:"pointer"});arrElement.push(spriteSock);spriteSock.addEventListener("click",function(){removeAllBtn(false);spriteSock.gotoAndPlay("runAndStop")});spriteSock.addEventListener("animationend",function(){spriteSock.stop();removeAllBtn(true)})}stage.addChild(spriteSock).set({alpha:0});spriteSock.mouseEnabled=false;TweenMax.to(spriteSock,1,{alpha:1,onComplete:function(){spriteSock.mouseEnabled=true;stage.removeChild(sockBg)}});break;case"digiStar":preloadAirAsia();if(firstPlay){var r=new createjs.SpriteSheet({images:ssURL_arr(97,2,"images/digistar/digistar_",".png",1,"arr",0),framerate:22,frames:{height:275,width:325,regX:162.5,regY:137.5,count:48},animations:{runAndStop:[0,47,false]}});spriteDigiStar=new createjs.Sprite(r,0);spriteDigiStar.set({x:325+325,y:133+275,scaleX:2,scaleY:2,alpha:1,cursor:"pointer"});arrElement.push(spriteDigiStar);spriteDigiStar.addEventListener("click",function(){removeAllBtn(false);spriteDigiStar.gotoAndPlay("runAndStop")});spriteDigiStar.addEventListener("animationend",function(){spriteDigiStar.stop();removeAllBtn(true)})}stage.addChild(spriteDigiStar).set({alpha:0});spriteDigiStar.mouseEnabled=false;TweenMax.to(spriteDigiStar,1,{alpha:1,onComplete:function(){spriteDigiStar.mouseEnabled=true;stage.removeChild(digiStarBg)}});break;case"airAsia":preloadSkeleton();if(firstPlay){var i=new createjs.SpriteSheet({images:ssURL_arr(84,2,"images/airasia/airasia_",".png",1,"arr",0),framerate:20,frames:{height:315,width:250,regX:125,regY:157.5,count:42},animations:{runAndStop:[0,41,false]}});spriteAirAsia=new createjs.Sprite(i,0);spriteAirAsia.set({x:247,y:434,scaleX:2,scaleY:2,alpha:1,cursor:"pointer"});arrElement.push(spriteAirAsia);spriteAirAsia.addEventListener("click",function(){removeAllBtn(false);spriteAirAsia.gotoAndPlay("runAndStop")});spriteAirAsia.addEventListener("animationend",function(){spriteAirAsia.stop();removeAllBtn(true)})}stage.addChild(spriteAirAsia).set({alpha:0});spriteAirAsia.mouseEnabled=false;TweenMax.to(spriteAirAsia,1,{alpha:1,onComplete:function(){spriteAirAsia.mouseEnabled=true;stage.removeChild(airAsiaBg)}});break;case"skeleton":preloadChicken();if(firstPlay){var s=new createjs.SpriteSheet({images:ssURL_arr(115,2,"images/skeleton/skeleton_",".png",1,"arr",0),framerate:22,frames:{height:85,width:83,regX:41.5,regY:85,count:57},animations:{runAndStop:[0,56,false]}});spriteSkeleton=new createjs.Sprite(s,0);spriteSkeleton.set({x:302,y:999,scaleX:2,scaleY:2,alpha:1});arrElement.push(spriteSkeleton);TweenMax.delayedCall(1,function(){stage.removeChild(skeletonEyeOnly)});skeletonBg.addEventListener("click",function(){removeAllBtn(false);spriteSkeleton.gotoAndPlay("runAndStop")});spriteSkeleton.addEventListener("animationend",function(){spriteSkeleton.gotoAndStop(0);removeAllBtn(true)})}stage.addChild(skeletonBg).set({alpha:0});stage.addChild(skeletonEyeOnly).set({alpha:0});stage.addChild(spriteSkeleton).set({alpha:0});spriteSkeleton.mouseEnabled=false;TweenMax.to([skeletonBg,skeletonEyeOnly,spriteSkeleton],1,{alpha:1,onComplete:function(){spriteSkeleton.mouseEnabled=true;stage.removeChild(skeletonBgSat)}});break;case"robot":if(firstPlay){var o=new createjs.SpriteSheet({images:ssURL_arr(41,2,"images/robothead/robothead_",".png",0,"arr",0),framerate:29,frames:{height:128,width:80,regX:40,regY:64,count:41},animations:{runAndStop:[0,40,false]}});spriteRobot=new createjs.Sprite(o,0);spriteRobot.set({x:580,y:572,alpha:1,scaleX:2.5,scaleY:2.5,cursor:"pointer"});arrElement.push(spriteRobot);spriteRobot.addEventListener("click",function(){removeAllBtn(false);spriteRobot.gotoAndPlay("runAndStop")});spriteRobot.addEventListener("animationend",function(){spriteRobot.stop();removeAllBtn(true);pageThree();firstPlay=false})}stage.addChild(spriteRobot).set({alpha:0});spriteRobot.mouseEnabled=false;TweenMax.to(spriteRobot,1,{alpha:1,onComplete:function(){spriteRobot.mouseEnabled=true;stage.removeChild(robotBg)}});initEnding();break;case"chicken":preloadRobot();if(firstPlay){var u=new createjs.SpriteSheet({images:ssURL_arr(62,2,"images/chicken/chicken_",".png",1,"arr",0),framerate:20,frames:{height:303,width:238,regX:119,regY:151.5,count:31},animations:{runAndStop:[0,30,false]}});spriteChicken=new createjs.Sprite(u,0);spriteChicken.set({x:159,y:1183,alpha:1,scaleX:2,scaleY:2,cursor:"pointer"});arrElement.push(spriteChicken);spriteChicken.addEventListener("click",function(){removeAllBtn(false);spriteChicken.gotoAndPlay("runAndStop")});spriteChicken.addEventListener("animationend",function(){spriteChicken.stop();removeAllBtn(true)})}stage.addChild(spriteChicken).set({alpha:0});spriteChicken.mouseEnabled=false;TweenMax.to(spriteChicken,1,{alpha:1,onComplete:function(){spriteChicken.mouseEnabled=true;stage.removeChild(chickenBg)}});break;default:}}function pageOne(){initBlackCanvas();initBackground();iniBgLoop();teethShineInit();teethJumpInit();initIntroExplode();teethShineAni()}function teethShineInit(){var e=new createjs.SpriteSheet({images:ssURL_arr(24,3,"images/teeth_animation1/teeth_export_",".png",1,"arr",0),framerate:15,frames:{height:200,width:180,regX:90,regY:100,count:12}});spriteTeethShine=new createjs.Sprite(e,0);spriteTeethShine.set({x:stageWidth/2,y:stageHeight/2,alpha:1,scaleX:2.5,scaleY:2.5,cursor:"pointer"})}function teethJumpInit(){var e=new createjs.SpriteSheet({images:ssURL_arr(22,3,"images/teeth_animation2/teeth_export_",".png",0,"arr",0),framerate:29,frames:{height:200,width:180,regX:90,regY:100,count:22}});spriteTeethJump=new createjs.Sprite(e,0);spriteTeethJump.set({x:stageWidth/2,y:stageHeight/2,scaleX:2.5,scaleY:2.5,alpha:1})}function initBlackCanvas(){boxBlack=createBox("#000",stageWidth,stageHeight)}function initBackground(){var e=new createjs.SpriteSheet({images:ssURL_arr(124,3,"images/intro/bg_stage_",".jpg",2,"arr",0),framerate:15,frames:{height:741,width:470,count:31},animations:{runAndStop:[0,30,false]}});spriteBackground=new createjs.Sprite(e,0);spriteBackground.set({x:0,y:0,scaleX:2,scaleY:2,alpha:0})}function iniBgLoop(){var e=new createjs.SpriteSheet({images:ssURL_arr(101,3,"images/stage_loop/bg_stage_loop_",".jpg",2,"arr",123),framerate:11,frames:{height:741,width:470,count:33},animations:{runAndStop:[0,32,false]}});spriteBgLoop=new createjs.Sprite(e,0);spriteBgLoop.set({x:0,y:0,scaleX:2,scaleY:2,alpha:1})}function initIntroExplode(){var e=new createjs.SpriteSheet({images:ssURL_arr(31,2,"images/explotion/explotion_",".png",1,"arr",0),framerate:29,frames:{height:741,width:470,count:15},animations:{runAndStop:[0,14,false]}});spriteIntroExplode=new createjs.Sprite(e,0);spriteIntroExplode.set({scaleX:2,scaleY:2,alpha:1})}function teethShineAni(){stage.addChild(boxBlack).set({alpha:1});stage.addChild(spriteTeethShine).play();spriteTeethShine.addEventListener("click",playTeeth)}function playTeeth(){teethJumpAni()}function backgroundAni(){backgroundAni_play=false;stage.addChild(spriteBackground).gotoAndPlay(0);TweenMax.to(spriteBackground,1,{alpha:1});spriteBackground.addEventListener("animationend",function(){spriteBackground.gotoAndStop(0);stage.removeChild(spriteBackground);stage.addChild(spriteBgLoop).play();initGrey();preloadPiston();backgroundAni_play=true});stage.addChild(spriteIntroExplode).set({alpha:1}).gotoAndPlay("runAndStop");spriteIntroExplode.addEventListener("animationend",function(){stage.removeChild(spriteIntroExplode)})}function introClosing(){TweenMax.to(boxBlack,3,{alpha:0,ease:Cubic.easeOut,onComplete:function(){stage.removeChild(boxBlack)}});backgroundAni();TweenMax.delayedCall(.2,function(){stage.removeChild(spriteTeethJump)})}function teethJumpAni(){stage.removeChild(spriteTeethShine);stage.addChild(spriteTeethJump).gotoAndPlay(0);TweenMax.delayedCall(.45,introClosing)}function createText(e,t){var n=new createjs.Text(e,t+"px moonshinerround, Arial","#000");n.textAlign="center";n.width=n.getMeasuredWidth()*1.1;n.height=n.getMeasuredHeight()*2.2;var r=new createjs.Container;var i=createBox("#fff",n.width,n.height);r.addChild(i).set({x:-n.width/2});r.addChild(n);n.lineHeight=t;n.maxWidth=n.width;return r}function canvas_loadGraphic(){displayLoad=new createjs.Text("0%","60px happyFox","#fff");stage.addChild(displayLoad);displayLoad.textAlign="center";displayLoad.x=stageWidth/2;displayLoad.y=stageHeight/2+20;displayLoad.alpha=1;imgLoadedSize=new Array;var e="images/";manifest=[{src:e+"bg_piston.png",id:"pistonBg"},{src:e+"bg_Sock.png",id:"sockBg"},{src:e+"bg_chicken.png",id:"chickenBg"},{src:e+"bg_digistar.png",id:"digiStarBg"},{src:e+"bg_airasia.png",id:"airAsiaBg"},{src:e+"skeleton_bg.png",id:"skeletonBg"},{src:e+"skeleton_bg_deSat.png",id:"skeletonBgSat"},{src:e+"skeleton_eye_only.png",id:"skeletonEyeOnly"},{src:e+"bg_robothead.png",id:"robotBg"},{src:"assets/Chirstcus_edit.mp3",id:"loopSoundmp3"},{src:"assets/Chirstcus_edit.ogg",id:"loopSoundogg"}];var t=ssURL_arr(124,3,"images/intro/bg_stage_",".jpg",2,"obj",0);for(var n=0;n<t.length;n++){manifest.push(t[n])}var r=ssURL_arr(101,3,"images/stage_loop/bg_stage_loop_",".jpg",2,"obj",123);for(var n=0;n<r.length;n++){manifest.push(r[n])}var i=ssURL_arr(31,2,"images/explotion/explotion_",".png",1,"obj",0);for(var n=0;n<i.length;n++){manifest.push(i[n])}var s=ssURL_arr(24,3,"images/teeth_animation1/teeth_export_",".png",1,"obj",0);for(var n=0;n<s.length;n++){manifest.push(s[n])}var o=ssURL_arr(22,3,"images/teeth_animation2/teeth_export_",".png",0,"obj",0);for(var n=0;n<o.length;n++){manifest.push(o[n])}var u=ssURL_arr(115,2,"images/skeleton/skeleton_",".png",1,"obj",0);for(var n=0;n<u.length;n++){manifest.push(u[n])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoad);preload.on("progress",handleProgress);preload.on("complete",handleComplete);preload.loadManifest(manifest)}function handleComplete(e){stage.removeChild(displayLoad);TweenMax.killTweensOf(loaderMc);graphic_init();soundInit();if(firstPlay){playSoundLoop("bgMusic")}}function handleProgress(e){displayLoad.text=Math.floor(e.loaded*100)+"%"}function handleFileLoad(e){var t=e.result}function handleProgressElement(e){}function handleFileLoadElement(e){}function preloadPiston(){imgLoadedSize=new Array;var e="images/";manifest=[];var t=ssURL_arr(48,2,"images/piston/piston_",".png",0,"obj",0);for(var n=0;n<t.length;n++){manifest.push(t[n])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("piston")});preload.loadManifest(manifest)}function preloadSock(){imgLoadedSize=new Array;var e="images/";manifest=[];var t=ssURL_arr(22,2,"images/sock/Sock_",".png",0,"obj",0);for(var n=0;n<t.length;n++){manifest.push(t[n])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("sock")});preload.loadManifest(manifest)}function preloadDigiStar(){imgLoadedSize=new Array;var e="images/";manifest=[];var t=ssURL_arr(97,2,"images/digistar/digistar_",".png",0,"obj",0);for(var n=0;n<t.length;n++){manifest.push(t[n])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("digiStar")});preload.loadManifest(manifest)}function preloadAirAsia(){imgLoadedSize=new Array;var e="images/";manifest=[];var t=ssURL_arr(84,2,"images/airasia/airasia_",".png",0,"obj",0);for(var n=0;n<t.length;n++){manifest.push(t[n])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("airAsia")});preload.loadManifest(manifest)}function preloadChicken(){imgLoadedSize=new Array;var e="images/";manifest=[];var t=ssURL_arr(62,2,"images/chicken/chicken_",".png",0,"obj",0);for(var n=0;n<t.length;n++){manifest.push(t[n])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("chicken")});preload.loadManifest(manifest)}function preloadRobot(){imgLoadedSize=new Array;var e="images/";manifest=[];var t=ssURL_arr(41,2,"images/robothead/robothead_",".png",0,"obj",0);for(var n=0;n<t.length;n++){manifest.push(t[n])}var r=ssURL_arr(111,3,"images/ending/ending_",".jpg",1,"obj",0);for(var n=0;n<r.length;n++){manifest.push(r[n])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("robot")});preload.loadManifest(manifest)}function preloadSkeleton(){imgLoadedSize=new Array;var e="images/";manifest=[];var t=ssURL_arr(115,2,"images/skeleton/skeleton_",".png",0,"obj",0);for(var n=0;n<t.length;n++){manifest.push(t[n])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("skeleton")});preload.loadManifest(manifest)}function graphic_init(){pageOne()}function createMc_id(e){var t=manifest;for(var n=0;n<t.length;n++){if(t[n].id==e){var r=t[n].src}}var i=new createjs.Bitmap(r);return i}function getSrc_id(e){var t=manifest;for(var n=0;n<t.length;n++){if(t[n].id==e){var r=t[n].src}}return r}function ssURL_arr(e,t,n,r,i,s,o){var u=i;var a=n;var f=r;var l=[];for(var c=0;c<e;c++){var h=o+c;var p=t-h.toString().length;var d="";for(var v=0;v<p;v++){d+="0"}d+=h.toString();if(u==i){u=0;if(s=="obj"){l.push({src:a+d+f,id:n+d})}else{l.push(a+d+f)}}else{u+=1}}return l}function soundInit(){if(soundRun1){soundRun1=false;if(!createjs.Sound.initializeDefaultPlugins()){return}var e="assets/";var t=[{id:"bgMusic",src:"Chirstcus_edit.ogg"}];createjs.Sound.alternateExtensions=["mp3"];createjs.Sound.addEventListener("fileload",createjs.proxy(soundLoaded,this));createjs.Sound.registerManifest(t,e)}}function soundLoaded(e){trace("sound loaded");playSoundLoop("bgMusic")}function playSound(e){var t=createjs.Sound.play(e,createjs.Sound.INTERRUPT_NONE,0,0,false,1);if(t==null||t.playState==createjs.Sound.PLAY_FAILED){return}t.addEventListener("complete",function(t){trace(e)})}function playSoundLoop(e){soundB=true;instance=createjs.Sound.play(e,createjs.Sound.INTERRUPT_NONE,0,0,false,1);instance.volume=1;if(instance==null||instance.playState==createjs.Sound.PLAY_FAILED){return}instance.addEventListener("complete",function(t){trace(e);playSoundLoop(e)})}function responsive_winResizeFunc(){onWindowResize();$(window).resize(function(){onWindowResize()});$(window).load(function(){onWindowResize()})}function onWindowResize(){winW=$(window).width();winH=$(window).height();var e=0;var t=winW-e;var n=winH-e;var r=stageHeight;var i=stageWidth;var s=stageWidth/stageHeight;var o=winH/stageHeight;var u=winW/stageWidth;if(winH>winW){if(o>u){s=o}else{s=u}}else{if(o<u){s=o*.998}else{s=u}}var a=stageWidth*s,f=stageHeight*s,l=$(".frameSprite").height();frameAspect=l/100,frameSpritePer=frameAspect*s;$("#gameCanvas").css("width",a+"px");$("#gameCanvas").css("height",f+"px");var c=-$("#gameCanvas").width()/2;$(".canvasHolder").css("margin-left",c+"px");var h=$("#gameCanvas").width(),p=$("#gameCanvas").height(),d=$(".frameSprite").width(),v=$(".frameSprite").height();var m=$(".wrapContent"),g=$(".wrapTop"),y=$(".wrapBot"),b=$(".wrapMiddle"),y=$(".wrapBot"),w=$(".frameRptVer"),E=$(".wrapMLeft"),S=$(".wrapMRight");var x=.31*v,T=.32*d,N=d-T,C=.566*v;m.css({height:p+x});$(".wrapContent").css({top:v-x});framePosLeft=c-d+T;g.width(h+N*2).css({"margin-left":framePosLeft});y.width(h+N*2).css({"margin-left":framePosLeft});w.css({width:h-T*2,left:d});E.css({height:p-v+x,"margin-left":-d+T-1,top:x-1,left:"0"});S.css({height:p-v+x,"margin-right":-d+T+1,top:x-1,right:"0"});if(winW<1280){S.css({height:p-v+x,"margin-right":-d+T+1,top:x-1,right:"-1px"})}}var boxBlackB;var stage,fpsLabel;var loaderMc;var stageWidth,stageHeight,g_scrollNum,g_scrollMaxNum;$(document).ready(init);var count=0;var teeth=0;var spritePiston,spriteSock,spriteDigiStar,spriteAirAsia,spriteSkeleton,spriteRobot,spriteChicken;var arrElement=[];var playBtn,boxBlack;var firstPlay=true;var backgroundAni_play=false;var preload,manifest,imgLoadedSize,displayLoad;var soundRun1=true;var soundB=false;var instance