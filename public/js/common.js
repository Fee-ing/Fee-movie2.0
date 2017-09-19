;(function(undefined) {
	"use strict" 
    var _global;
	var FUNC = {
		explorerVersion: function() {
			let explorer = window.navigator.userAgent.toLowerCase();
		 	if (explorer.indexOf("msie") >= 0) {		//ie 
			   	let ver = explorer.match(/msie ([\d.]+)/)[1].slice(0,3);
			   	if (+ver < 11) {
			   		return false;
			   	}
			} else if (explorer.indexOf("firefox") >= 0) {		//firefox 
			   	let ver = explorer.match(/firefox\/([\d.]+)/)[1].slice(0,3);
			   	if (+ver < 31) {
			   		return false;
			   	}
			} else if(explorer.indexOf("chrome") >= 0){		//Chrome
				let ver = explorer.match(/chrome\/([\d.]+)/)[1].slice(0,3);
			   	if (+ver < 36) {
			   		return false;
			   	}
			} else if(explorer.indexOf("opera") >= 0){		//Opera
				let ver = explorer.match(/opera.([\d.]+)/)[1].slice(0,3);
				if (+ver < 29) {
			   		return false;
			   	}
			} else if(explorer.indexOf("Safari") >= 0){		//Safari
				let ver = explorer.match(/version\/([\d.]+)/)[1].slice(0,3);
				if (+ver < 8) {
			   		return false;
			   	}
			}
			return true;
		},
		toast: function(str) {
			if (document.querySelector('.toast')) {
				return;
			}
			let body = document.querySelector('body');
			let div = document.createElement('div');
			div.className = 'toast';
			div.innerHTML = str;
			body.appendChild(div);
			setTimeout(function () {
		    	div.style.opacity = 1;
		    	setTimeout(function(){
		      		div.style.opacity = 0;
		      		setTimeout(function(){
			      		div.parentNode.removeChild(div);
			    	},350);
		    	},2000);
		  	}, 300);
		}
	}

	_global = (function(){ return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = FUNC;
    } else if (typeof define === "function" && define.amd) {
        define(function(){return FUNC;});
    } else {
        !('FUNC' in _global) && (_global.FUNC = FUNC);
    }
})();