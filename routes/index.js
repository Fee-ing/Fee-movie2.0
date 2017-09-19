var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
require('superagent-charset')(superagent);

var router = express.Router();

router.get('/', function(req, res, next) {
  	superagent.get('https://www.80s.tt/')
	    .end(function (err, sres) {
	      	if (err) {
	        	return next(err);
	      	}
	      	var $ = cheerio.load(sres.text, {decodeEntities: false});
	      	var movieHotData = [], tvHotData = [], varietyHotData = [], comicHotData = [];
	      	var movieData = [], tvData = [],varietyData = [], comicData = [];
	      	$('.mlm1 .movie-item').each(function (idx, element) {
	        	var $element = $(element);
		        movieHotData.push({
		          	title: $element.find('.title h4 a').html(),
		          	subTitle: $element.find('.title em').html(),
		          	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
		          	poster: $element.find('.poster img').attr('data-original')
		        });
	      	});
	      	$('.mlm2 .movie-item').each(function (idx, element) {
	        	var $element = $(element);
		        tvHotData.push({
		          	title: $element.find('.title h4 a').html(),
		          	subTitle: $element.find('.title em').html(),
		          	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
		          	poster: $element.find('.poster img').attr('data-original')
		        });
	      	});
	      	$('.mlm3 .movie-item').each(function (idx, element) {
	        	var $element = $(element);
		        varietyHotData.push({
		          	title: $element.find('.title h4 a').html(),
		          	subTitle: $element.find('.title em').html(),
		          	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
		          	poster: $element.find('.poster img').attr('data-original')
		        });
	      	});
	      	$('.mlm4 .movie-item').each(function (idx, element) {
	        	var $element = $(element);
		        comicHotData.push({
		          	title: $element.find('.title h4 a').html(),
		          	subTitle: $element.find('.title em').html(),
		          	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
		          	poster: $element.find('.poster img').attr('data-original')
		        });
	      	});
	      	$('.mlm5 .movie-item').each(function (idx, element) {
	        	var $element = $(element);
		        movieData.push({
		          	title: $element.find('.title h4 a').html(),
		          	subTitle: $element.find('.title em').html(),
		          	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
		          	poster: $element.find('.poster img').attr('data-original')
		        });
	      	});
	      	$('.mlm6 .movie-item').each(function (idx, element) {
	        	var $element = $(element);
		        tvData.push({
		          	title: $element.find('.title h4 a').html(),
		          	subTitle: $element.find('.title em').html(),
		          	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
		          	poster: $element.find('.poster img').attr('data-original')
		        });
	      	});
	      	$('.mlm7 .movie-item').each(function (idx, element) {
	        	var $element = $(element);
		        varietyData.push({
		          	title: $element.find('.title h4 a').html(),
		          	subTitle: $element.find('.title em').html(),
		          	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
		          	poster: $element.find('.poster img').attr('data-original')
		        });
	      	});
	      	$('.mlm8 .movie-item').each(function (idx, element) {
	        	var $element = $(element);
		        comicData.push({
		          	title: $element.find('.title h4 a').html(),
		          	subTitle: $element.find('.title em').html(),
		          	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
		          	poster: $element.find('.poster img').attr('data-original')
		        });
	      	});
	      	
	      	let data = {
	      		type: '1', 
	      		page: '1',
	      		keyword: '',
	      		movieHotData: movieHotData, 
	      		tvHotData: tvHotData, 
	      		varietyHotData: varietyHotData, 
	      		comicHotData: comicHotData,
	      		movieData: movieData, 
	      		tvData: tvData, 
	      		varietyData: varietyData, 
	      		comicData: comicData
	      	}
	      	res.render('index', data);
	    });
});

router.get('/two', function(req, res, next) {
	superagent.get('http://www.dytt8.net/index.htm')
		.charset('gbk') 
	    .end(function (err, sres) {
	      	if (err) {
	        	return next(err);
	      	}
	      	var $ = cheerio.load(sres.text, {decodeEntities: false});
	      	var newData = [], thunderData = [], chmovieData = [], enmovieData = [], varietyData = [], comicData = [];
	      	$('.bd3r').eq(0).find('.bd3rl .co_area2').eq(0).find('ul').find('a').each(function (idx, element) {
	        	var $element = $(element);
	        	if(idx%2 !== 0) {
	        		newData.push({
		          		title: $element.html(),
		          		href: encodeURIComponent($element.attr('href')),
		          		time: $element.parent().next().find('font').html()
		        	});
	        	}
	      	});
	      	$('.bd3r').eq(0).find('.bd3rl .co_area2').eq(1).find('ul').find('a').each(function (idx, element) {
	        	var $element = $(element);
	        	if(idx%2 !== 0) {
	        		thunderData.push({
		          		title: $element.html(),
		          		href: encodeURIComponent($element.attr('href')),
		          		time: $element.parent().next().find('font').html()
		        	});
	        	}
	      	});
	      	$('.bd3r').eq(0).find('.bd3rl .co_area2').eq(2).find('ul').find('a').each(function (idx, element) {
	        	var $element = $(element);
	        	if(idx%2 !== 0) {
	        		chmovieData.push({
		          		title: $element.html(),
		          		href: encodeURIComponent($element.attr('href')),
		          		time: $element.parent().next().find('font').html()
		        	});
	        	}
	      	});
	      	$('.bd3r').eq(0).find('.bd3rl .co_area2').eq(3).find('ul').find('a').each(function (idx, element) {
	        	var $element = $(element);
	        	if(idx%2 !== 0) {
	        		enmovieData.push({
		          		title: $element.html(),
		          		href: encodeURIComponent($element.attr('href')),
		          		time: $element.parent().next().find('font').html()
		        	});
	        	}
	      	});
	      	$('.bd3r').eq(1).find('.bd3rl .co_area2').eq(0).find('ul').find('a').each(function (idx, element) {
	        	var $element = $(element);
	        	if(idx%2 !== 0) {
	        		varietyData.push({
		          		title: $element.html(),
		          		href: encodeURIComponent($element.attr('href')),
		          		time: $element.parent().next().find('font').html()
		        	});
	        	}
	      	});
	      	$('.bd3r').eq(1).find('.bd3rl .co_area2').eq(1).find('ul').find('a').each(function (idx, element) {
	        	var $element = $(element);
	        	if(idx%2 !== 0) {
	        		comicData.push({
		          		title: $element.html(),
		          		href: encodeURIComponent($element.attr('href')),
		          		time: $element.parent().next().find('font').html()
		        	});
	        	}
	      	});
	      	let data = {
	      		type: '2',
	      		page: '1',
	      		keyword: '',
	      		newData: newData,
	      		thunderData: thunderData,
	      		chmovieData: chmovieData,
	      		enmovieData: enmovieData,
	      		varietyData: varietyData,
	      		comicData: comicData
	      	};
	      	res.render('two', data);
	    });
});

router.get('/three/:page', function(req, res, next) {
	superagent.get('http://www.hdwan.net/page/'+req.params.page)
    	.end(function (err, sres) {
      		if (err) {
        		return next(err);
      		}
      		var $ = cheerio.load(sres.text, {decodeEntities: false});
      		var movieData = {
      			data: [],
      			pageData: []
      		};
      		$('#post_container .post').each(function (idx, element) {
	        	var $element = $(element);
		        movieData.data.push({
		          	title: $element.find('img').attr('alt'),
		          	poster: $element.find('img').attr('src'),
		          	id: $element.find('.zoom').attr('href').replace(/http:\/\/www.hdwan.net\//g, '').replace(/\.html/g, '')
		        });
	      	});
	      	$('.pagination a').each(function (idx, element) {
	        	var $element = $(element);
	        	let page = $element.attr('href').replace(/http:\/\/www.hdwan.net\//g, '').replace(/page\//g, '');
	        	page === '' ? page = '1' : page = page;
	        	let isCurrent = false;
	        	$element.hasClass('current') ? isCurrent = true : isCurrent = false;
		        movieData.pageData.push({
		          	page: page,
		          	name: $element.html(),
		          	isCurrent: isCurrent
		        });
	      	});
      		res.render('three', { type: '3', page: req.params.page, keyword: '', movieData: movieData });
    	});
});

router.get('/four/:page', function(req, res, next) {
	let link = '';
	if(req.params.page === '1'){
		link = 'https://gaoqing.fm/';
	}else {
		link = 'https://gaoqing.fm/ajax.php?type=&country=&director=&actor=&year=&p='+req.params.page+'&sort=';
	}
	superagent.get(link)
	    .end(function (err, sres) {
	      	if (err) {
	        	return next(err);
	      	}
	      	var $ = cheerio.load(sres.text, {decodeEntities: false});
	      	var movieData = [];
	      	if(req.params.page === '1'){
	      		$('#result1 li').each(function (idx, element) {
		        	var $element = $(element);
			        movieData.push({
			          	title: $element.find('img').attr('alt'),
			          	poster: $element.find('img').attr('src'),
			          	id: $element.find('.z-movie-playlink').attr('href').replace(/https:\/\/gaoqing.fm\/view\//g, '')
			        });
		      	});
	      		page = '1';
	      	}else{
	      		$('li').each(function (idx, element) {
		        	var $element = $(element);
			        movieData.push({
			          	title: $element.find('img').attr('alt'),
			          	poster: $element.find('img').attr('src'),
			          	id: $element.find('.z-movie-playlink').attr('href').replace(/https:\/\/gaoqing.fm\/view\//g, '')
			        });
		      	});
	      		page = req.params.page;
	      	}
	      	res.render('four', { type: '4', page: req.params.page, keyword: '', movieData: movieData });
	    });
});

router.get('/five', function(req, res, next) {
	superagent.get('http://www.dygang.net/')
		.charset('gbk') 
	    .end(function (err, sres) {
	      	if (err) {
	        	return next(err);
	      	}
	      	var $ = cheerio.load(sres.text, {decodeEntities: false});
	      	var movieData = [], tvData = [], highMovieData = [];
	      	$('#tab1_div_0 img').each(function (idx, element) {
	        	var $element = $(element);
		        movieData.push({
		          	title: $element.attr('alt'),
		          	poster: $element.attr('src'),
		          	id: encodeURIComponent($element.parent().attr('href').replace(/http:\/\/www.dygang.net\//g, ''))
		        });
	      	});
	      	$('#tab1_div_1 img').each(function (idx, element) {
	        	var $element = $(element);
		        tvData.push({
		          	title: $element.attr('alt'),
		          	poster: $element.attr('src'),
		          	id: encodeURIComponent($element.parent().attr('href').replace(/http:\/\/www.dygang.net\//g, ''))
		        });
	      	});
	      	$('#tab1_div_2 img').each(function (idx, element) {
	        	var $element = $(element);
		        highMovieData.push({
		          	title: $element.attr('alt'),
		          	poster: $element.attr('src'),
		          	id: encodeURIComponent($element.parent().attr('href').replace(/http:\/\/www.dygang.net\//g, ''))
		        });
	      	});
	      	res.render('five', { type: '5', page: '1', keyword: '', movieData: movieData, tvData: tvData, highMovieData: highMovieData });
	    });
});

router.get('/six/:page', function(req, res, next) {
	let link = '';
	if(req.params.page === '1'){
		link = 'http://www.quzhuanpan.com/source/loadSourceList.do?type=1';
	}else {
		link = 'http://www.quzhuanpan.com/source/loadSourceList.do?type=1&currentPage='+req.params.page;
	}
	superagent.get(link)
	    .end(function (err, sres) {
	      	if (err) {
	        	return next(err);
	      	}
	      	var $ = cheerio.load(sres.text, {decodeEntities: false});
	      	var movieData = [];
	      	$('.source-table .hidden-phone').each(function (idx, element) {
	        	var $element = $(element);
		        movieData.push({
		          	title: $element.find('.source-name .source-title').attr('title'),
		          	href: 'http://www.quzhuanpan.com' + $element.find('.source-name .source-title').attr('href'),
		          	time: $element.find('.source-download-times').next().html(),
		          	type: $element.find('.source-download-times').next().next().html()
		        });
	      	});
	      	res.render('six', { type: '6', page: req.params.page, keyword: '', movieData: movieData });
	    });
});

router.get('/onedetail/:type/:id', function(req, res, next) {
    superagent.get('https://www.80s.tt/movie/'+req.params.id)
    	.end(function (err, sres) {
      		if (err) {
        		return next(err);
      		}
      		var $ = cheerio.load(sres.text, {decodeEntities: false});
      		var detail = {
      			title: $('.movie-info .right .title').html(),
      			subTitle: $('.movie-info .right .sub-title').html(),
      			poster: $('.movie-info .left a').attr('href'),
      			description: $('.description').html(),
      			score: $('.movie-info .right .title .score').html(),
      			screenshot: $('.screenshot img').attr('src'),
      			sign: [],
      			member: [],
      			time: [],
      			normal: [],
      			high: [],
      			higher: []
      		};
      		$('.movie-info .right .attr').eq(0).find('a').each(function (idx, element) {
	        	var $element = $(element);
	        	detail.sign.push($element.html());
      		});
      		$('.movie-info .right .attr').eq(1).find('a').each(function (idx, element) {
	        	var $element = $(element);
	        	detail.member.push($element.html());
      		});
      		$('.movie-info .right .attr').eq(2).find('li').each(function (idx, element) {
	        	var $element = $(element);
	        	detail.time.push($element.html());
      		});
      		$('.download .download-list').each(function (idx, element) {
	        	var $element = $(element);
	        	if($element.find('.title').hasClass('title-5')) {
	        		$element.find('.dl-items').each(function (idx, element) {
			        	var $element1 = $(element);
			        	detail.higher.push({
			        		name: $element1.find('.dl-name').html(),
			        		format: $element1.find('.label-ext-1').html(),
			        		size: $element1.find('.label-file-size').html(),
			        		link: $element1.find('.dl-name').attr('href')
			        	})
		      		});
	        	}
	        	if($element.find('.title').hasClass('title-4')) {
	        		$element.find('.dl-items').each(function (idx, element) {
			        	var $element1 = $(element);
			        	detail.high.push({
			        		name: $element1.find('.dl-name').html(),
			        		format: $element1.find('.label-ext-1').html(),
			        		size: $element1.find('.label-file-size').html(),
			        		link: $element1.find('.dl-name').attr('href')
			        	})
		      		});
	        	}
	        	if($element.find('.title').hasClass('title-3')) {
	        		$element.find('.dl-items').each(function (idx, element) {
			        	var $element1 = $(element);
			        	detail.normal.push({
			        		name: $element1.find('.dl-name').html(),
			        		format: $element1.find('.label-ext-1').html(),
			        		size: $element1.find('.label-file-size').html(),
			        		link: $element1.find('.dl-name').attr('href')
			        	})
		      		});
	        	}
      		});
      		res.render('onedetail', {type: req.params.type, page: '1', keyword: '', detail: detail});
    	});
})

router.get('/twodetail/:link', function(req, res, next) {
	superagent.get('http://www.dytt8.net'+decodeURIComponent(req.params.link))
		.charset('gbk') 
    	.end(function (err, sres) {
      		if (err) {
        		return next(err);
      		}
      		var $ = cheerio.load(sres.text, {decodeEntities: false});
      		$('#Zoom>span a').each(function (idx, element) {
      			var $element = $(element);
  				let html = $element.attr('href');
  				$element.attr('href', 'javascript:void(0);');
  				$element.html(html);
      		});
      		let html = $('#Zoom>span').html().split('img');
      		html[1] = ' class="poster"' + html[1];
      		var detail = {
      			content: html.join('img').replace(/下载地址/g, '下载地址（复制后用迅雷打开）')
      		};
      		res.render('twodetail', { type: '2', page: '1', keyword: '', detail: detail });
    	});
});

router.get('/threedetail/:id', function(req, res, next) {
	superagent.get('http://www.hdwan.net/'+req.params.id+'.html')
    	.end(function (err, sres) {
      		if (err) {
        		return next(err);
      		}
      		var $ = cheerio.load(sres.text, {decodeEntities: false});
      		var detail = {
      			title: $('.article_container h1').html(),
      			poster: $('#post_content img').eq(0).attr('src'),
      			info: $('#post_content p').eq(1).html(),
      			description: $('#post_content p').eq(2).html().replace(/\s+/g, ''),
      			imgs: [],
      			href: ''
      		};
      		$('#post_content img').each(function (idx, element) {
      			if(idx > 0) {
      				var $element = $(element);
		        	detail.imgs.push($element.attr('src'));
      			}
	      	});
	      	if($('.dw-box.dw-box-info a')){
	      		detail.href = $('.dw-box.dw-box-info a').eq(0).attr('href');
	      	}
      		res.render('threedetail', { type: '3', page: '1', keyword: '', detail: detail });
    	});
});

router.get('/fourdetail/:id', function(req, res, next) {
	superagent.get('https://gaoqing.fm/view/'+req.params.id)
    	.end(function (err, sres) {
      		if (err) {
        		return next(err);
      		}
      		var $ = cheerio.load(sres.text, {decodeEntities: false});
      		$('#viewfilm a').removeAttr('href');
      		var detail = {
      			title: $('h2 a').html(),
      			poster: $('.x-m-poster img').attr('src'),
      			info: $('#viewfilm').html(),
      			description: $('#des-full').html().replace(/\s+/g, ''),
      			download: []
      		};
      		$('#cili td').each(function (idx, element) {
  				var $element = $(element);
	        	detail.download.push({
	        		name: $element.find('b').html(),
	        		size: $element.find('.label-warning').html(),
	        		type: $element.find('.label-danger').html(),
	        		link1: $element.find('a.btn-info.btn-sm').attr('href'),
	        		link2: $element.find('a.btn-primary.btn-sm').attr('href')
	        	});
	      	});
      		res.render('fourdetail', { type: '4', page: '1', keyword: '', detail: detail });
    	});
});

router.get('/fivedetail/:id', function(req, res, next) {
	superagent.get('http://www.dygang.net/'+req.params.id)
		.charset('gbk') 
    	.end(function (err, sres) {
      		if (err) {
        		return next(err);
      		}
      		var $ = cheerio.load(sres.text, {decodeEntities: false});
      		$('#dede_content p').eq(3).find('a').removeAttr('href');
      		var detail = {
      			title: $('.title a').html(),
      			poster: $('#dede_content img').eq(0).attr('src'),
      			info: $('#dede_content p').eq(1).html(),
      			description: $('#dede_content p').eq(3).html().replace(/\s+/g, ''),
      			imgs: [],
      			download: []
      		};
      		$('#dede_content img').each(function (idx, element) {
      			if(idx > 0) {
      				var $element = $(element);
		        	detail.imgs.push($element.attr('src'));
      			}
	      	});
	      	$('#dede_content table').eq(0).find('tr td').each(function (idx, element) {
      			var $element = $(element);
      			let obj = {};
      			obj.name = $element.find('a').html();
      			obj.href = $element.find('a').attr('href');
      			$element.find('a').remove();
      			obj.size = $element.html().replace(/(\()|(\))/g, ' ').split('：');
      			detail.download.push(obj);
	      	});
      		res.render('fivedetail', { type: '5', page: '1', keyword: '', detail: detail });
    	});
});


//80s搜索
function searchOne(req){
    let p = new Promise(function(resolve, reject){
        let searchData1 = [];
        superagent.post('https://www.80s.tt/search')
	    	.send({keyword: req.body.keyword} )
	    	.end(function (err, sres) {
	      		if (!err) {
	        		let $ = cheerio.load(sres.text, {decodeEntities: false});
			      	$('.movie-item').each(function (idx, element) {
			        	let $element = $(element);
				        searchData1.push({
				          	title: $element.find('.title h4 a').html(),
				          	subTitle: $element.find('.title em').html(),
				          	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
				          	poster: $element.find('.poster img').attr('data-original')
				        });
			      	});
	      		}
	      		resolve(searchData1);
	      	});
    });
    return p;            
}
//海盗湾搜索
function searchTwo(req){
    let p = new Promise(function(resolve, reject){
        let searchData2 = [];
        superagent.get('http://www.hdwan.net/')
			.query({s: req.body.keyword})
	    	.end(function (err, sres) {
	      		if (!err) {
	        		let $ = cheerio.load(sres.text, {decodeEntities: false});
			      	$('#post_container .post').each(function (idx, element) {
		        		let $element = $(element);
				        searchData2.push({
				          	title: $element.find('img').attr('alt'),
				          	poster: $element.find('img').attr('src'),
				          	id: $element.find('.zoom').attr('href').replace(/http:\/\/www.hdwan.net\//g, '').replace(/\.html/g, '')
				        });
			      	});
	      		}
	      		resolve(searchData2);
	      	});
    });
    return p;            
}
//高清电影网搜索
function searchThree(req){
    let p = new Promise(function(resolve, reject){
        let searchData3 = [];
        superagent.get('https://gaoqing.fm/s.php')
			.query({q: req.body.keyword})
	    	.end(function (err, sres) {
	      		if (!err) {
	        		let $ = cheerio.load(sres.text, {decodeEntities: false});
			      	$('#result1 .row').each(function (idx, element) {
		        		let $element = $(element);
				        searchData3.push({
				          	title: $element.find('.x-m-poster img').attr('alt'),
				          	poster: $element.find('.x-m-poster img').attr('src'),
				          	id: $element.find('.x-m-side>a').attr('href').replace(/https:\/\/gaoqing.fm\/view\//g, '')
				        });
			      	});
	      		}
	      		resolve(searchData3);
	      	});
    });
    return p;            
}
//去转盘网搜索
function searchFour(req){
    let p = new Promise(function(resolve, reject){
        let searchData4 = [];
        superagent.get('http://www.quzhuanpan.com/source/search.action')
			.query({q: req.body.keyword, currentPage: req.params.page})
	    	.end(function (err, sres) {
	      		if (!err) {
	        		let $ = cheerio.load(sres.text, {decodeEntities: false});
			      	$('.search-classic.visible-desktop').each(function (idx, element) {
		        		let $element = $(element);
				        searchData4.push({
				          	title: $element.find('.source-title').attr('title'),
				          	href: 'http://www.quzhuanpan.com' + $element.find('.source-title').attr('href'),
				          	size: $element.find('.next-row').eq(2).html().split('|')
				        });
			      	});
	      		}
	      		resolve(searchData4);
	      	});
    });
    return p;            
}

var searchObj = {};
router.post('/search/:type/:page', function(req, res, next) {
	searchObj = {};
	Promise
	.all([searchOne(req), searchTwo(req), searchThree(req), searchFour(req)])
	.then(function(results){
		let data = {
	    	type: req.params.type,
	    	page: req.params.page,
	    	keyword: req.body.keyword,
	    	searchData1: results[0],
	    	searchData2: results[1],
	    	searchData3: results[2],
	    	searchData4: results[3]
	    };
	    searchObj = data;
	  	res.render('search', data);
	});
});
//去转盘网搜索详情
router.get('/search/:type/:page/:keyword', function(req, res, next) {
	superagent.get('http://www.quzhuanpan.com/source/search.action')
		.query({q: req.params.keyword, currentPage: req.params.page})
    	.end(function (err, sres) {
      		if (err) {
        		return next(err);
      		}
      		var $ = cheerio.load(sres.text, {decodeEntities: false});
	      	var searchData = [];
	      	$('.search-classic.visible-desktop').each(function (idx, element) {
        		var $element = $(element);
		        searchData.push({
		          	title: $element.find('.source-title').attr('title'),
		          	href: 'http://www.quzhuanpan.com' + $element.find('.source-title').attr('href'),
		          	size: $element.find('.next-row').eq(2).html().split('|')
		        });
	      	});
	      	searchObj.type = req.params.type;
	      	searchObj.page = req.params.page;
	      	searchObj.searchData4 = searchObj.searchData4.concat(searchData);
	      	res.render('search', searchObj);
      	});
});

module.exports = router;
