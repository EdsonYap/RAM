var preload,manifest,imgLoadedSize,displayLoad;function canvas_loadGraphic(){displayLoad=new createjs.Text("0%","60px happyFox","#fff");stage.addChild(displayLoad);displayLoad.textAlign="center";displayLoad.x=stageWidth/2;displayLoad.y=stageHeight/2+20;displayLoad.alpha=1;imgLoadedSize=new Array();var h="images/";manifest=[{src:h+"bg_piston.png",id:"pistonBg"},{src:h+"bg_Sock.png",id:"sockBg"},{src:h+"bg_chicken.png",id:"chickenBg"},{src:h+"bg_digistar.png",id:"digiStarBg"},{src:h+"bg_airasia.png",id:"airAsiaBg"},{src:h+"skeleton_bg.png",id:"skeletonBg"},{src:h+"skeleton_bg_deSat.png",id:"skeletonBgSat"},{src:h+"skeleton_eye_only.png",id:"skeletonEyeOnly"},{src:h+"bg_robothead.png",id:"robotBg"},{src:"assets/Chirstcus_edit.mp3",id:"loopSoundmp3"},{src:"assets/Chirstcus_edit.ogg",id:"loopSoundogg"}];var c=ssURL_arr(124,3,"images/intro/bg_stage_",".jpg",2,"obj",0);for(var f=0;f<c.length;f++){manifest.push(c[f])}var b=ssURL_arr(101,3,"images/stage_loop/bg_stage_loop_",".jpg",2,"obj",123);for(var f=0;f<b.length;f++){manifest.push(b[f])}var e=ssURL_arr(31,2,"images/explotion/explotion_",".png",1,"obj",0);for(var f=0;f<e.length;f++){manifest.push(e[f])}var g=ssURL_arr(24,3,"images/teeth_animation1/teeth_export_",".png",1,"obj",0);for(var f=0;f<g.length;f++){manifest.push(g[f])}var a=ssURL_arr(22,3,"images/teeth_animation2/teeth_export_",".png",0,"obj",0);for(var f=0;f<a.length;f++){manifest.push(a[f])}var d=ssURL_arr(115,2,"images/skeleton/skeleton_",".png",1,"obj",0);for(var f=0;f<d.length;f++){manifest.push(d[f])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoad);preload.on("progress",handleProgress);preload.on("complete",handleComplete);preload.loadManifest(manifest)}function handleComplete(a){stage.removeChild(displayLoad);TweenMax.killTweensOf(loaderMc);graphic_init();soundInit();if(firstPlay){playSoundLoop("bgMusic")}}function handleProgress(a){displayLoad.text=Math.floor(a.loaded*100)+"%"}function handleFileLoad(a){var b=a.result}function handleProgressElement(a){}function handleFileLoadElement(a){}function preloadPiston(){imgLoadedSize=new Array();var b="images/";manifest=[];var a=ssURL_arr(48,2,"images/piston/piston_",".png",0,"obj",0);for(var c=0;c<a.length;c++){manifest.push(a[c])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("piston")});preload.loadManifest(manifest)}function preloadSock(){imgLoadedSize=new Array();var a="images/";manifest=[];var b=ssURL_arr(22,2,"images/sock/Sock_",".png",0,"obj",0);for(var c=0;c<b.length;c++){manifest.push(b[c])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("sock")});preload.loadManifest(manifest)}function preloadDigiStar(){imgLoadedSize=new Array();var a="images/";manifest=[];var b=ssURL_arr(97,2,"images/digistar/digistar_",".png",0,"obj",0);for(var c=0;c<b.length;c++){manifest.push(b[c])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("digiStar")});preload.loadManifest(manifest)}function preloadAirAsia(){imgLoadedSize=new Array();var b="images/";manifest=[];var a=ssURL_arr(84,2,"images/airasia/airasia_",".png",0,"obj",0);for(var c=0;c<a.length;c++){manifest.push(a[c])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("airAsia")});preload.loadManifest(manifest)}function preloadChicken(){imgLoadedSize=new Array();var b="images/";manifest=[];var a=ssURL_arr(62,2,"images/chicken/chicken_",".png",0,"obj",0);for(var c=0;c<a.length;c++){manifest.push(a[c])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("chicken")});preload.loadManifest(manifest)}function preloadRobot(){imgLoadedSize=new Array();var b="images/";manifest=[];var a=ssURL_arr(41,2,"images/robothead/robothead_",".png",0,"obj",0);for(var c=0;c<a.length;c++){manifest.push(a[c])}var d=ssURL_arr(111,3,"images/ending/ending_",".jpg",1,"obj",0);for(var c=0;c<d.length;c++){manifest.push(d[c])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("robot")});preload.loadManifest(manifest)}function preloadSkeleton(){imgLoadedSize=new Array();var a="images/";manifest=[];var b=ssURL_arr(115,2,"images/skeleton/skeleton_",".png",0,"obj",0);for(var c=0;c<b.length;c++){manifest.push(b[c])}preload=new createjs.LoadQueue(true,"");preload.on("fileload",handleFileLoadElement);preload.on("progress",handleProgressElement);preload.on("complete",function(){elementsSetup("skeleton")});preload.loadManifest(manifest)}function graphic_init(){pageOne()}function createMc_id(d){var a=manifest;for(var c=0;c<a.length;c++){if(a[c].id==d){var b=a[c].src}}var e=new createjs.Bitmap(b);return e}function getSrc_id(d){var a=manifest;for(var c=0;c<a.length;c++){if(a[c].id==d){var b=a[c].src}}return b}function ssURL_arr(n,c,o,h,d,p,e){var g=d;var a=o;var b=h;var k=[];for(var r=0;r<n;r++){var l=e+r;var m=c-l.toString().length;var f="";for(var q=0;q<m;q++){f+="0"}f+=l.toString();if(g==d){g=0;if(p=="obj"){k.push({src:a+f+b,id:o+f})}else{k.push(a+f+b)}}else{g+=1}}return k};