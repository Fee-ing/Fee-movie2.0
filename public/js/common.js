var FUNC = {
	toChinese: function(str) {
	    return unescape(str.replace(/&#x/g,'%u').replace(/;/g,''));
	}
}

module.exports = FUNC;