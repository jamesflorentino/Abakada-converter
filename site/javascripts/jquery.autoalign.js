(function( $ ) {
	var m = {
		l:[],e:null,bw:0, bh:0,
		update : function(){
			if(!m.e) return; // stop if disabled
			for(var i in m.l){
				var _w,_a,_l,_t,_h; _a = m.l[i].l; _w = m.l[i].i.width(); _h = m.l[i].i.height();
				var _ox, _oy; _ox = m.l[i].ox; _oy = m.l[i].oy;
				  
				if( _a.indexOf('center')>-1) _l = $(window).width() * .5 - _w * .5 + _ox; else
				if( _a.indexOf('left')>-1) _l = 0 + _ox; else
				if( _a.indexOf('right')>-1) _l = $(window).width() - _w + _ox;
				if( _a.indexOf('middle')>-1) _t = $(window).height() * .5 - _h * .5 + _oy; else
				if( _a.indexOf('top')>-1) _t = 0 + _oy; else
				if( _a.indexOf('bottom')>-1) _t = $(window).height() - _h + _oy;
				m.l[i].i.offset({left:_l,top:_t});
			}
		},
		add:function(i, o){
			i.css('position', 'absolute');
			m.l.push({i:i, ox:o.offsetX||0, oy:o.offsetY||0,l:o.location||"center middle"});
			m.update();
		},
		init:function(){
			$(window).resize(m.update);
			m.start();
			m.update();
		},
		stop:function(){ m.e = false; },
		start:function(){ m.e = true; }
	}
	$.fn.autoalign = function ( location, options ) {
		if(options) options.location = location; else options = {location:location};
		m.add(this, options);
		if(m.e==null) m.init();
	}
	$.autoalign = function(method){
		switch(method){
			case 'stop': m.stop(); break;
			case 'start': m.start(); break;
			default:
				if(method['baseWidth']) m.bw = parseInt(method['baseWidth']);
				if(method['baseHeight']) m.bh = parseInt(method['baseHeight']); 
				break;
		}
	}
})( jQuery );
