(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.FondoBanner = function() {
	this.initialize(img.FondoBanner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1008,440);


(lib.googlePlay = function() {
	this.initialize(img.googlePlay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,86);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,100);


(lib.texto1 = function() {
	this.initialize(img.texto1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,96);


(lib.texto2 = function() {
	this.initialize(img.texto2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,664,41);


(lib.texto3 = function() {
	this.initialize(img.texto3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,36);


(lib.texto4 = function() {
	this.initialize(img.texto4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,40);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.texto4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.texto4();
	this.instance.setTransform(-136,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto4_1, new cjs.Rectangle(-136,-20,272,40), null);


(lib.texto3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.texto3();
	this.instance.setTransform(-152,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto3_1, new cjs.Rectangle(-152,-18,304,36), null);


(lib.texto2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.texto2();
	this.instance.setTransform(-332,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto2_1, new cjs.Rectangle(-332,-20.5,664,41), null);


(lib.Texto1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.texto1();
	this.instance.setTransform(-310,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Texto1, new cjs.Rectangle(-310,-48,620,96), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.logo2();
	this.instance.setTransform(-52,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-52,-50,104,100), null);


(lib.google = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.googlePlay();
	this.instance.setTransform(-143.5,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.google, new cjs.Rectangle(-143.5,-43,287,86), null);


(lib.fondo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.FondoBanner();
	this.instance.setTransform(-504,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondo, new cjs.Rectangle(-504,-220,1008,440), null);


(lib.texto4Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.texto4_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto4Out, new cjs.Rectangle(-136,-20,272,40), null);


(lib.texto3Out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.texto3_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto3Out, new cjs.Rectangle(-152,-18,304,36), null);


(lib.texto2Cambio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.texto2_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto2Cambio, new cjs.Rectangle(-332,-20.5,664,41), null);


(lib.texto1Cambio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Texto1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto1Cambio, new cjs.Rectangle(-310,-48,620,96), null);


(lib.logoCambio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logoCambio, new cjs.Rectangle(-52,-50,104,100), null);


(lib.googleOut = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.google();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.googleOut, new cjs.Rectangle(-143.5,-43,287,86), null);


(lib.bannerOut = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.fondo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bannerOut, new cjs.Rectangle(-504,-220,1008,440), null);


(lib.logoOut = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.logoCambio();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logoOut, new cjs.Rectangle(-52,-50,104,100), null);


// stage content:
(lib.RECOVER_bannerApp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// googlePlay_jpg
	this.instance = new lib.google();
	this.instance.setTransform(277.5,503);
	this.instance._off = true;

	this.instance_1 = new lib.googleOut();
	this.instance_1.setTransform(277.45,283.05);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(385).to({_off:false},0).to({x:277.45,y:283.05},12).to({_off:true},55).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(452).to({_off:false},0).to({y:-56.95},10).to({_off:true},1).wait(42));

	// texto4_png
	this.instance_2 = new lib.texto4_1();
	this.instance_2.setTransform(269.95,477.95);
	this.instance_2._off = true;

	this.instance_3 = new lib.texto4Out();
	this.instance_3.setTransform(269.95,173);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(330).to({_off:false},0).to({y:173},15).to({_off:true},83).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(428).to({_off:false},0).to({y:-20},10).to({_off:true},1).wait(66));

	// texto3_png
	this.instance_4 = new lib.texto3_1();
	this.instance_4.setTransform(285.95,467.95);
	this.instance_4._off = true;

	this.instance_5 = new lib.texto3Out();
	this.instance_5.setTransform(285.95,87);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(282).to({_off:false},0).to({y:87},16).to({_off:true},125).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(423).to({_off:false},0).to({y:-219},11).to({_off:true},1).wait(70));

	// logo2_png
	this.instance_6 = new lib.logo();
	this.instance_6.setTransform(496,510);
	this.instance_6._off = true;

	this.instance_7 = new lib.logoCambio();
	this.instance_7.setTransform(496,180.05);
	this.instance_7._off = true;

	this.instance_8 = new lib.logoOut();
	this.instance_8.setTransform(707,180.05);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(185).to({_off:false},0).to({y:180.05},19).to({_off:true},26).wait(275));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(230).to({_off:false},0).to({x:707},13).to({_off:true},225).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(468).to({_off:false},0).to({x:1077.95},10).to({_off:true},1).wait(26));

	// texto2_png
	this.instance_9 = new lib.texto2_1();
	this.instance_9.setTransform(515,480.45);
	this.instance_9._off = true;

	this.instance_10 = new lib.texto2Cambio();
	this.instance_10.setTransform(515,309.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({_off:false},0).to({y:309.5},15).to({_off:true},50).wait(361));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(144).to({_off:false},0).to({x:498,y:-34.5},12).to({_off:true},1).wait(348));

	// texto1_png
	this.instance_11 = new lib.Texto1();
	this.instance_11.setTransform(500,503.95);
	this.instance_11._off = true;

	this.instance_12 = new lib.texto1Cambio();
	this.instance_12.setTransform(493,100);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(39).to({_off:false},0).to({x:493,y:100},15).to({_off:true},60).wait(391));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(114).to({_off:false},0).to({y:-57},10).to({_off:true},1).wait(380));

	// FondoBanner_png
	this.instance_13 = new lib.fondo();
	this.instance_13.setTransform(504,220);
	this.instance_13.alpha = 0.0117;

	this.instance_14 = new lib.bannerOut();
	this.instance_14.setTransform(504,220);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},29).to({_off:true},465).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(494).to({_off:false},0).to({alpha:0.0117},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(504,-17,626,577);
// library properties:
lib.properties = {
	id: '105ADA05A2993A4FA1BF28C4372C7B44',
	width: 1008,
	height: 440,
	fps: 20,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/FondoBanner.png", id:"FondoBanner"},
		{src:"images/googlePlay.jpg", id:"googlePlay"},
		{src:"images/logo2.png", id:"logo2"},
		{src:"images/texto1.png", id:"texto1"},
		{src:"images/texto2.png", id:"texto2"},
		{src:"images/texto3.png", id:"texto3"},
		{src:"images/texto4.png", id:"texto4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['105ADA05A2993A4FA1BF28C4372C7B44'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;