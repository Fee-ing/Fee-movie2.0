var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
require('superagent-charset')(superagent);

var URLCONFIG = require('../public/js/urlconfig');

var router = express.Router();

router.get('/', function(req, res, next) {
  	superagent.get(URLCONFIG.one.home)
	    .end(function (err, sres) {
	    	let movieHotData = [], tvHotData = [], varietyHotData = [], comicHotData = [];
	      	let movieData = [], tvData = [],varietyData = [], comicData = [];
	      	if (!err) {
	        	let $ = cheerio.load(sres.text, {decodeEntities: false});
	      	
		      	// $('.mlm1 .movie-item').each(function (idx, element) {
		       //  	let $element = $(element);
			      //   movieHotData.push({
			      //     	title: $element.find('.title h4 a').html(),
			      //     	subTitle: $element.find('.title em').html(),
			      //     	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
			      //     	poster: $element.find('.poster img').attr('data-original')
			      //   });
		      	// });
		      	// $('.mlm2 .movie-item').each(function (idx, element) {
		       //  	let $element = $(element);
			      //   tvHotData.push({
			      //     	title: $element.find('.title h4 a').html(),
			      //     	subTitle: $element.find('.title em').html(),
			      //     	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
			      //     	poster: $element.find('.poster img').attr('data-original')
			      //   });
		      	// });
		      	// $('.mlm3 .movie-item').each(function (idx, element) {
		       //  	let $element = $(element);
			      //   varietyHotData.push({
			      //     	title: $element.find('.title h4 a').html(),
			      //     	subTitle: $element.find('.title em').html(),
			      //     	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
			      //     	poster: $element.find('.poster img').attr('data-original')
			      //   });
		      	// });
		      	// $('.mlm4 .movie-item').each(function (idx, element) {
		       //  	let $element = $(element);
			      //   comicHotData.push({
			      //     	title: $element.find('.title h4 a').html(),
			      //     	subTitle: $element.find('.title em').html(),
			      //     	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
			      //     	poster: $element.find('.poster img').attr('data-original')
			      //   });
		      	// });
		      	// $('.mlm5 .movie-item').each(function (idx, element) {
		       //  	let $element = $(element);
			      //   movieData.push({
			      //     	title: $element.find('.title h4 a').html(),
			      //     	subTitle: $element.find('.title em').html(),
			      //     	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
			      //     	poster: $element.find('.poster img').attr('data-original')
			      //   });
		      	// });
		      	// $('.mlm6 .movie-item').each(function (idx, element) {
		       //  	let $element = $(element);
			      //   tvData.push({
			      //     	title: $element.find('.title h4 a').html(),
			      //     	subTitle: $element.find('.title em').html(),
			      //     	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
			      //     	poster: $element.find('.poster img').attr('data-original')
			      //   });
		      	// });
		      	// $('.mlm7 .movie-item').each(function (idx, element) {
		       //  	let $element = $(element);
			      //   varietyData.push({
			      //     	title: $element.find('.title h4 a').html(),
			      //     	subTitle: $element.find('.title em').html(),
			      //     	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
			      //     	poster: $element.find('.poster img').attr('data-original')
			      //   });
		      	// });
		      	// $('.mlm8 .movie-item').each(function (idx, element) {
		       //  	let $element = $(element);
			      //   comicData.push({
			      //     	title: $element.find('.title h4 a').html(),
			      //     	subTitle: $element.find('.title em').html(),
			      //     	id: $element.find('.title h4 a').attr('href').replace(/\/movie\//g, ''),
			      //     	poster: $element.find('.poster img').attr('data-original')
			      //   });
		      	// });

		      	$('#tt1 .lpelmt2').each(function (idx, element) {
		        	let $element = $(element);
			        movieHotData.push({
			          	title: $element.find('.h3 a').html(),
			          	subTitle: $element.find('.tip').html(),
			          	id: URLCONFIG.one.href + $element.find('.h3 a').attr('href'),
			          	poster: $element.find('img').attr('_src')
			        });
		      	});
		      	$('#tt2 .lpelmt2').each(function (idx, element) {
		        	let $element = $(element);
			        tvHotData.push({
			          	title: $element.find('.h3 a').html(),
			          	subTitle: $element.find('.tip').html(),
			          	id: URLCONFIG.one.href + $element.find('.h3 a').attr('href'),
			          	poster: $element.find('img').attr('_src')
			        });
		      	});
		      	$('#tt3 .lpelmt2').each(function (idx, element) {
		        	let $element = $(element);
			        comicHotData.push({
			          	title: $element.find('.h3 a').html(),
			          	subTitle: $element.find('.tip').html(),
			          	id: URLCONFIG.one.href + $element.find('.h3 a').attr('href'),
			          	poster: $element.find('img').attr('_src')
			        });
		      	});
		      	$('#tt4 .lpelmt2').each(function (idx, element) {
		        	let $element = $(element);
			        varietyHotData.push({
			          	title: $element.find('.h3 a').html(),
			          	subTitle: $element.find('.tip').html(),
			          	id: URLCONFIG.one.href + $element.find('.h3 a').attr('href'),
			          	poster: $element.find('img').attr('_src')
			        });
		      	});
		      	$('.me1').eq(0).find('li').each(function (idx, element) {
		        	let $element = $(element);
			        movieData.push({
			          	title: $element.find('.h3 a').html(),
			          	subTitle: $element.find('.tip').html(),
			          	id: URLCONFIG.one.href + $element.find('.h3 a').attr('href'),
			          	poster: $element.find('img').attr('_src')
			        });
		      	});
		      	$('.me1').eq(1).find('li').each(function (idx, element) {
		        	let $element = $(element);
			        tvData.push({
			          	title: $element.find('.h3 a').html(),
			          	subTitle: $element.find('.tip').html(),
			          	id: URLCONFIG.one.href + $element.find('.h3 a').attr('href'),
			          	poster: $element.find('img').attr('_src')
			        });
		      	});
		      	$('.me1').eq(2).find('li').each(function (idx, element) {
		        	let $element = $(element);
			        comicData.push({
			          	title: $element.find('.h3 a').html(),
			          	subTitle: $element.find('.tip').html(),
			          	id: URLCONFIG.one.href + $element.find('.h3 a').attr('href'),
			          	poster: $element.find('img').attr('_src')
			        });
		      	});
		      	$('.me1').eq(3).find('li').each(function (idx, element) {
		        	let $element = $(element);
			        varietyData.push({
			          	title: $element.find('.h3 a').html(),
			          	subTitle: $element.find('.tip').html(),
			          	id: URLCONFIG.one.href + $element.find('.h3 a').attr('href'),
			          	poster: $element.find('img').attr('_src')
			        });
		      	});
	      	}
	      	
	      	let data = {
	      		type: '1', 
	      		page: '1',
	      		searchType: '1',
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
	superagent.get(URLCONFIG.two.home)
		.charset('gbk') 
	    .end(function (err, sres) {
	    	let newData = [], thunderData = [], chmovieData = [], enmovieData = [], varietyData = [], comicData = [];
	      	if (!err) {
	        	let $ = cheerio.load(sres.text, {decodeEntities: false});
	      	
		      	$('.bd3r').eq(0).find('.bd3rl .co_area2').eq(0).find('ul').find('a').each(function (idx, element) {
		        	let $element = $(element);
		        	if(idx%2 !== 0) {
		        		newData.push({
			          		title: $element.html(),
			          		href: encodeURIComponent($element.attr('href')),
			          		time: $element.parent().next().find('font').html()
			        	});
		        	}
		      	});
		      	$('.bd3r').eq(0).find('.bd3rl .co_area2').eq(1).find('ul').find('a').each(function (idx, element) {
		        	let $element = $(element);
		        	if(idx%2 !== 0) {
		        		thunderData.push({
			          		title: $element.html(),
			          		href: encodeURIComponent($element.attr('href')),
			          		time: $element.parent().next().find('font').html()
			        	});
		        	}
		      	});
		      	$('.bd3r').eq(0).find('.bd3rl .co_area2').eq(2).find('ul').find('a').each(function (idx, element) {
		        	let $element = $(element);
		        	if(idx%2 !== 0) {
		        		chmovieData.push({
			          		title: $element.html(),
			          		href: encodeURIComponent($element.attr('href')),
			          		time: $element.parent().next().find('font').html()
			        	});
		        	}
		      	});
		      	$('.bd3r').eq(0).find('.bd3rl .co_area2').eq(3).find('ul').find('a').each(function (idx, element) {
		        	let $element = $(element);
		        	if(idx%2 !== 0) {
		        		enmovieData.push({
			          		title: $element.html(),
			          		href: encodeURIComponent($element.attr('href')),
			          		time: $element.parent().next().find('font').html()
			        	});
		        	}
		      	});
		      	$('.bd3r').eq(1).find('.bd3rl .co_area2').eq(0).find('ul').find('a').each(function (idx, element) {
		        	let $element = $(element);
		        	if(idx%2 !== 0) {
		        		varietyData.push({
			          		title: $element.html(),
			          		href: encodeURIComponent($element.attr('href')),
			          		time: $element.parent().next().find('font').html()
			        	});
		        	}
		      	});
		      	$('.bd3r').eq(1).find('.bd3rl .co_area2').eq(1).find('ul').find('a').each(function (idx, element) {
		        	let $element = $(element);
		        	if(idx%2 !== 0) {
		        		comicData.push({
			          		title: $element.html(),
			          		href: encodeURIComponent($element.attr('href')),
			          		time: $element.parent().next().find('font').html()
			        	});
		        	}
		      	});
	      	}
	      	
	      	let data = {
	      		type: '2',
	      		page: '1',
	      		searchType: '1',
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
	superagent.get(URLCONFIG.three.home + req.params.page)
    	.end(function (err, sres) {
    		let movieData = {
      			data: [],
      			pageData: []
      		};
      		if (!err) {
        		let $ = cheerio.load(sres.text, {decodeEntities: false});
      		
	      		$('#post_container .post').each(function (idx, element) {
		        	let $element = $(element);
			        movieData.data.push({
			          	title: $element.find('img').attr('alt'),
			          	poster: $element.find('img').attr('src'),
			          	id: $element.find('.zoom').attr('href').replace(/http:\/\/www.hdwan.net\//g, '').replace(/\.html/g, '')
			        });
		      	});
		      	$('.pagination a').each(function (idx, element) {
		        	let $element = $(element);
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
      		}
      		
      		res.render('three', { type: '3', page: req.params.page, searchType: '1', keyword: '', movieData: movieData });
    	});
});

router.get('/four/:page', function(req, res, next) {
	let link = '';
	if(req.params.page === '1'){
		link = URLCONFIG.four.home;
	}else {
		link = URLCONFIG.four.home + 'ajax.php?type=&country=&director=&actor=&year=&p=' + req.params.page+'&sort=';
	}
	superagent.get(link)
	    .end(function (err, sres) {
	    	let movieData = [];
	      	if (!err) {
	        	let $ = cheerio.load(sres.text, {decodeEntities: false});
	      	
		      	if(req.params.page === '1'){
		      		$('#result1 li').each(function (idx, element) {
			        	let $element = $(element);
				        movieData.push({
				          	title: $element.find('img').attr('alt'),
				          	poster: $element.find('img').attr('src'),
				          	id: $element.find('.z-movie-playlink').attr('href').replace(/https:\/\/gaoqing.fm\/view\//g, '')
				        });
			      	});
		      		page = '1';
		      	}else{
		      		$('li').each(function (idx, element) {
			        	let $element = $(element);
				        movieData.push({
				          	title: $element.find('img').attr('alt'),
				          	poster: $element.find('img').attr('src'),
				          	id: $element.find('.z-movie-playlink').attr('href').replace(/https:\/\/gaoqing.fm\/view\//g, '')
				        });
			      	});
		      		page = req.params.page;
		      	}
	      	}
	      	
	      	res.render('four', { type: '4', page: req.params.page, searchType: '1', keyword: '', movieData: movieData });
	    });
});

router.get('/five', function(req, res, next) {
	superagent.get(URLCONFIG.five.home)
		.charset('gbk') 
	    .end(function (err, sres) {
	    	let movieData = [], tvData = [], highMovieData = [];
	      	if (!err) {
	        	let $ = cheerio.load(sres.text, {decodeEntities: false});
	      	
		      	$('#tab1_div_0 img').each(function (idx, element) {
		        	let $element = $(element);
			        movieData.push({
			          	title: $element.attr('alt'),
			          	poster: $element.attr('src'),
			          	id: encodeURIComponent($element.parent().attr('href').replace(/http:\/\/www.dygang.net\//g, ''))
			        });
		      	});
		      	$('#tab1_div_1 img').each(function (idx, element) {
		        	let $element = $(element);
			        tvData.push({
			          	title: $element.attr('alt'),
			          	poster: $element.attr('src'),
			          	id: encodeURIComponent($element.parent().attr('href').replace(/http:\/\/www.dygang.net\//g, ''))
			        });
		      	});
		      	$('#tab1_div_2 img').each(function (idx, element) {
		        	let $element = $(element);
			        highMovieData.push({
			          	title: $element.attr('alt'),
			          	poster: $element.attr('src'),
			          	id: encodeURIComponent($element.parent().attr('href').replace(/http:\/\/www.dygang.net\//g, ''))
			        });
		      	});
	      	}
	      	
	      	res.render('five', { type: '5', page: '1', searchType: '1', keyword: '', movieData: movieData, tvData: tvData, highMovieData: highMovieData });
	    });
});

router.get('/six/:page', function(req, res, next) {
	let link = '';
	if(req.params.page === '1'){
		link = URLCONFIG.six.home;
	}else {
		link = URLCONFIG.six.home + '&currentPage='+req.params.page;
	}
	superagent.get(link)
	    .end(function (err, sres) {
	    	let movieData = [];
	      	if (!err) {
	        	let $ = cheerio.load(sres.text, {decodeEntities: false});
	      	
		      	$('.source-table .hidden-phone').each(function (idx, element) {
		        	let $element = $(element);
			        movieData.push({
			          	title: $element.find('.source-name .source-title').attr('title'),
			          	href: URLCONFIG.six.href + $element.find('.source-name .source-title').attr('href'),
			          	time: $element.find('.source-download-times').next().html(),
			          	type: $element.find('.source-download-times').next().next().html()
			        });
		      	});
	      	}
	      	
	      	res.render('six', { type: '6', page: req.params.page, searchType: '1', keyword: '', movieData: movieData });
	    });
});

router.get('/seven', function(req, res, next) {
  	superagent.get(URLCONFIG.seven.home)
	    .end(function (err, sres) {
	    	let tvData1 = [], tvData2 = [], tvData3 = [], tvData4 = [];
	      	if (!err) {
	        	let $ = cheerio.load(sres.text, {decodeEntities: false});
	      	
		      	$('.top24 .top').each(function (idx, element) {
		        	let $element = $(element);
			        tvData1.push({
			          	title: $element.find('.fl-info a').html(),
			          	subTitle: $element.find('.fl-info p').eq(0).html(),
			          	id: URLCONFIG.seven.href + ($element.find('.fl-img a').attr('href'))
			        });
		      	});
		      	$('.top24 li').each(function (idx, element) {
		        	let $element = $(element);
		        	if(!$element.hasClass('top')) {
		        		tvData1.push({
				          	title: $element.find('a').html(),
				          	subTitle: $element.find('em').html(),
				          	id: URLCONFIG.seven.href + ($element.find('a').attr('href'))
				        });
		        	}
		      	});
		      	$('.lastest-release li').each(function (idx, element) {
		        	let $element = $(element);
			        tvData2.push({
			          	title: $element.find('p a').html(),
			          	subTitle: $element.find('.f4').eq(0).html(),
			          	id: URLCONFIG.seven.href + ($element.find('.imglink').attr('href').replace(/resource/g, 'gresource')),
			          	poster: $element.find('.imglink img').attr('src')
			        });
		      	});
		      	$('.top-update li').each(function (idx, element) {
		        	let $element = $(element);
			        tvData3.push({
			          	title: $element.find('.t .f14 a strong').html(),
			          	subTitle: $element.find('.t .f14').html().split('<')[0],
			          	id: URLCONFIG.seven.href + ($element.find('.img a').attr('href')),
			          	poster: $element.find('.img img').attr('src')
			        });
		      	});
		      	$('.top-tv li').each(function (idx, element) {
		        	let $element = $(element);
			        tvData4.push({
			          	title: $element.find('.fl-info h3 a').html(),
			          	id: URLCONFIG.seven.href + ($element.find('.fl-img a').attr('href').replace(/http:\/\/www.zimuzu.tv/g, '')),
			          	poster: $element.find('.fl-img img').attr('src')
			        });
		      	});
	      	}
	      	
	      	let data = {
	      		type: '7', 
	      		page: '1',
	      		searchType: '1',
	      		keyword: '',
	      		tvData1: tvData1, 
	      		tvData2: tvData2, 
	      		tvData3: tvData3, 
	      		tvData4: tvData4
	      	}
	      	res.render('seven', data);
	    });
});

router.get('/eight/:page', function(req, res, next) {
	superagent.get(URLCONFIG.eight.home + req.params.page)
    	.end(function (err, sres) {
    		let movieData = {
      			data: [],
      			pageData: []
      		};
      		if (!err) {
        		let $ = cheerio.load(sres.text, {decodeEntities: false});
      		
	      		$('.excerpt').each(function (idx, element) {
		        	let $element = $(element);
			        movieData.data.push({
			          	title: $element.find('.focus img').attr('alt'),
			          	subTitle: $element.find('.meta .pv').html(),
			          	poster: $element.find('.focus img').attr('data-src'),
			          	href: $element.find('.focus').attr('href').replace(/http:\/\/www.hanfan.cc\//g, '').replace(/\.html/g, '')
			        });
		      	});
		      	$('.pagination li').each(function (idx, element) {
		        	let $element = $(element);
		        	if($element.hasClass('active')) {
		        		movieData.pageData.push({
				          	page: $element.find('span').html(),
				          	name: $element.find('span').html(),
				          	isCurrent: true
				        });
		        	}else {
		        		if($element.children().is('a')) {
		        			let page = $element.find('a').attr('href').replace(/http:\/\/www.hanfan.cc\//g, '').replace(/page\//g, '').replace(/\//g, '')
		        			page ? page : page = '1';
		        			movieData.pageData.push({
					          	page: page,
					          	name: $element.find('a').html(),
					          	isCurrent: false
					        });
		        		}
		        	}
		      	});
		      	movieData.totalPage = $('.pagination li').last().find('span').html();
      		}
      		
      		res.render('eight', { type: '8', page: req.params.page, searchType: '1', keyword: '', movieData: movieData });
    	});
});

router.get('/nine', function(req, res, next) {
	superagent.get(URLCONFIG.nine.home)
		.charset('gbk') 
    	.end(function (err, sres) {
    		let today = [], newMovie = '', newTv = '', newComic = '', newVariety = '';
      		if (!err) {
        		let $ = cheerio.load(sres.text, {decodeEntities: false});
      		
	      		$('.kandian .commend ul li').each(function (idx, element) {
		        	let $element = $(element);
			        today.push({
			          	title: $element.find('.db').attr('title'),
			          	subTitle: $element.find('p').html(),
			          	poster: $element.find('.db img').attr('src'),
			          	id: encodeURIComponent($element.find('.db').attr('href').replace(/\.html/g, ''))
			        });
		      	});

		      	$('.zuoce .xinfenlei').eq(0).find('ul li').each(function (idx, element) {
		        	let $element = $(element);
			        $element.attr('title', $element.find('a').html());
			        let href = '/ninedetail/' + encodeURIComponent($element.find('a').attr('href').replace(/\.html/g, ''));
			        $element.find('a').attr('href', href);
		      	});

		      	$('.zuoce .xinfenlei').eq(1).find('ul li').each(function (idx, element) {
		        	let $element = $(element);
			        $element.attr('title', $element.find('a').html());
			        let href = '/ninedetail/' + encodeURIComponent($element.find('a').attr('href').replace(/\.html/g, ''));
			        $element.find('a').attr('href', href);
		      	});

		      	$('.zuocez .xxfl').eq(0).find('ul li').each(function (idx, element) {
		        	let $element = $(element);
			        $element.attr('title', $element.find('a').html());
			        let href = '/ninedetail/' + encodeURIComponent($element.find('a').attr('href').replace(/\.html/g, ''));
			        $element.find('a').attr('href', href);
		      	});

		      	$('.zuocez .xxfl').eq(1).find('ul li').each(function (idx, element) {
		        	let $element = $(element);
			        $element.attr('title', $element.find('a').html());
			        let href = '/ninedetail/' + encodeURIComponent($element.find('a').attr('href').replace(/\.html/g, ''));
			        $element.find('a').attr('href', href);
		      	});

		      	newMovie = $('.zuoce .xinfenlei').eq(0).find('ul').html();
		      	newTv = $('.zuoce .xinfenlei').eq(1).find('ul').html();
		      	newComic = $('.zuocez .xxfl').eq(0).find('ul').html();
		      	newVariety = $('.zuocez .xxfl').eq(1).find('ul').html();
		      	
      		}

      		let data = {
      			type: '9', 
      			page: req.params.page, 
      			searchType: '1', 
      			keyword: '', 
      			today: today,
      			newMovie: newMovie,
      			newTv: newTv,
      			newComic: newComic,
      			newVariety: newVariety
      		}
      		
      		res.render('nine', data);
    	});
});

router.get('/onedetail/:type/:id', function(req, res, next) {
    superagent.get(URLCONFIG.one.detail + req.params.id)
    	.end(function (err, sres) {
    		let detail = {
      			title: '',
      			subTitle: '',
      			poster: '',
      			description: '',
      			score: '',
      			screenshot: '',
      			sign: [],
      			member: [],
      			time: [],
      			low: [],
      			normal: [],
      			high: [],
      			higher: []
      		};
      		if (!err) {
        		let $ = cheerio.load(sres.text, {decodeEntities: false});

      			detail.title = $('.movie-info .right .title').html();
      			detail.subTitle = $('.movie-info .right .sub-title').html();
      			detail.poster = $('.movie-info .left a').attr('href');
      			detail.description = $('.description').html();
      			detail.score = $('.movie-info .right .title .score').html();
      			detail.screenshot = $('.screenshot img').attr('src');

	      		$('.movie-info .right .attr').eq(0).find('a').each(function (idx, element) {
		        	let $element = $(element);
		        	detail.sign.push($element.html());
	      		});
	      		$('.movie-info .right .attr').eq(1).find('a').each(function (idx, element) {
		        	let $element = $(element);
		        	detail.member.push($element.html());
	      		});
	      		$('.movie-info .right .attr').eq(2).find('li').each(function (idx, element) {
		        	let $element = $(element);
		        	detail.time.push($element.html());
	      		});
	      		$('.download .download-list').each(function (idx, element) {
		        	let $element = $(element);
		        	if($element.find('.title').hasClass('title-5')) {
		        		$element.find('.dl-items').each(function (idx, element) {
				        	let $element1 = $(element);
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
				        	let $element1 = $(element);
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
				        	let $element1 = $(element);
				        	detail.normal.push({
				        		name: $element1.find('.dl-name').html(),
				        		format: $element1.find('.label-ext-1').html(),
				        		size: $element1.find('.label-file-size').html(),
				        		link: $element1.find('.dl-name').attr('href')
				        	})
			      		});
		        	}
		        	if($element.find('.title').hasClass('title-2')) {
		        		$element.find('.dl-items').each(function (idx, element) {
				        	let $element1 = $(element);
				        	detail.low.push({
				        		name: $element1.find('.dl-name').html(),
				        		format: $element1.find('.label-ext-1').html(),
				        		size: $element1.find('.label-file-size').html(),
				        		link: $element1.find('.dl-name').attr('href')
				        	})
			      		});
		        	}
	      		});
      		}
      		
      		res.render('onedetail', {type: req.params.type, page: '1', searchType: '1', keyword: '', detail: detail});
    	});
})

router.get('/twodetail/:link', function(req, res, next) {
	superagent.get(URLCONFIG.two.detail + decodeURIComponent(req.params.link))
		.charset('gbk') 
    	.end(function (err, sres) {
    		let detail = {
      			content: ''
      		};
      		if (!err) {
        		let $ = cheerio.load(sres.text, {decodeEntities: false});
	      		$('#Zoom>span a').each(function (idx, element) {
	      			let $element = $(element);
	  				let html = $element.attr('href');
	  				$element.attr('href', 'javascript:void(0);');
	  				$element.html(html);
	      		});
	      		let html = $('#Zoom>span').html().split('img');
	      		html[1] = ' class="poster"' + html[1];
	      		detail.content = html.join('img').replace(/下载地址/g, '下载地址（复制后用迅雷打开）');
      		}
      		
      		res.render('twodetail', { type: '2', page: '1', searchType: '1', keyword: '', detail: detail });
    	});
});

router.get('/threedetail/:id', function(req, res, next) {
	superagent.get(URLCONFIG.three.detail + req.params.id + '.html')
    	.end(function (err, sres) {
    		let detail = {
      			title: '',
      			poster: '',
      			info: '',
      			description: '',
      			imgs: [],
      			href: ''
      		};
      		if (!err) {
        		let $ = cheerio.load(sres.text, {decodeEntities: false});
	      		
      			detail.title = $('.article_container h1').html();
      			detail.poster = $('#post_content .aligncenter.size-full').eq(0).attr('src');
      			detail.info = $('#post_content p').eq(1).html();
      			detail.description = $('#post_content p').eq(2).html().replace(/\s+/g, '');

	      		$('#post_content .aligncenter.size-full').each(function (idx, element) {
	      			if(idx > 0) {
	      				let $element = $(element);
			        	detail.imgs.push($element.attr('src'));
	      			}
		      	});
		      	if($('.dw-box.dw-box-info a')){
		      		detail.href = $('.dw-box.dw-box-info a').eq(0).attr('href');
		      	}
      		}
      		
      		res.render('threedetail', { type: '3', page: '1', searchType: '1', keyword: '', detail: detail });
    	});
});

router.get('/fourdetail/:id', function(req, res, next) {
	superagent.get(URLCONFIG.four.detail + req.params.id)
    	.end(function (err, sres) {
    		let detail = {
      			title: '',
      			poster: '',
      			info: '',
      			description: '',
      			download: []
      		};
      		if (!err) {
        		let $ = cheerio.load(sres.text, {decodeEntities: false});
	      		$('#viewfilm a').removeAttr('href');
	      		
      			detail.title = $('h2 a').html();
      			detail.poster = $('.x-m-poster img').attr('src');
      			detail.info = $('#viewfilm').html();
      			detail.description = $('#des-full').html().replace(/\s+/g, '');

	      		$('#cili td').each(function (idx, element) {
	  				let $element = $(element);
		        	detail.download.push({
		        		name: $element.find('b').html(),
		        		size: $element.find('.label-warning').html(),
		        		type: $element.find('.label-danger').html(),
		        		link1: $element.find('a.btn-info.btn-sm').attr('href'),
		        		link2: $element.find('a.btn-primary.btn-sm').attr('href')
		        	});
		      	});
      		}
      		
      		res.render('fourdetail', { type: '4', page: '1', searchType: '1', keyword: '', detail: detail });
    	});
});

router.get('/fivedetail/:id', function(req, res, next) {
	superagent.get(URLCONFIG.five.detail + req.params.id)
		.charset('gbk') 
    	.end(function (err, sres) {
    		let detail = {
      			title: '',
      			poster: '',
      			info: '',
      			description: '',
      			imgs: [],
      			download: []
      		};
      		if (!err) {
        		let $ = cheerio.load(sres.text, {decodeEntities: false});
	      		$('#dede_content p').eq(3).find('a').removeAttr('href');
	      		
      			detail.title = $('.title a').html();
      			detail.poster = $('#dede_content img').eq(0).attr('src');
      			detail.info = $('#dede_content p').eq(1).html();
      			detail.description = $('#dede_content p').eq(3).html().replace(/\s+/g, '');
	      			
	      		$('#dede_content img').each(function (idx, element) {
	      			if(idx > 0) {
	      				let $element = $(element);
			        	detail.imgs.push($element.attr('src'));
	      			}
		      	});
		      	$('#dede_content table').eq(0).find('tr td').each(function (idx, element) {
	      			let $element = $(element);
	      			let obj = {};
	      			obj.name = $element.find('a').html();
	      			obj.href = $element.find('a').attr('href');
	      			$element.find('a').remove();
	      			obj.size = $element.html().replace(/(\()|(\))/g, ' ').split('：');
	      			detail.download.push(obj);
		      	});
      		}
      		
      		res.render('fivedetail', { type: '5', page: '1', searchType: '1', keyword: '', detail: detail });
    	});
});

router.get('/eightdetail/:id', function(req, res, next) {
	superagent.get(URLCONFIG.eight.detail + req.params.id + '.html')
    	.end(function (err, sres) {
    		let detail = {
      			title: '',
      			poster: '',
      			info: [],
      			video: '',
      			download: []
      		};
      		if (!err) {
        		let $ = cheerio.load(sres.text, {decodeEntities: false});
	      		
      			detail.title = $('.article-title a').html();
      			detail.poster = $('.article-content img').eq(0).attr('src');
      			detail.video = $('.article-content iframe').attr('src');

      			let part = $('.part_content .part').eq(1);
      			if(part.html()) {
      				$('.part_content .part strong').remove();
	      			$('.part_content .part br').remove();
	      				
	      			part.find('a').each(function (idx, element) {
		      			let $element = $(element);
		      			detail.download.push({href: $element.attr('href')});
			      	});
			      	$('.part_content .part a').remove();

			      	let part_html = part.html().replace(/(天使_TSKS：)|(幻想乐园：)|(\|)|(\s)/g, '').split('密码');
			      	let k = 0;
			      	for(let i = 1;i < part_html.length; i++) {
			      		if(part_html[i] && detail.download[k]) {
			      			detail.download[k].password = part_html[i];
			      			k++;
			      		}
			      	}
      			}
      			

      			$('.article-content center').remove();
      			$('.article-content div').remove();
      			$('.article-content img').remove();
	      		$('.article-content p').each(function (idx, element) {
	      			let $element = $(element);
	      			if($element.is('p')){
			        	detail.info.push($element.html());
	      			}
		      	});
      		}
      		
      		res.render('eightdetail', { type: '8', page: '1', searchType: '1', keyword: '', detail: detail });
    	});
});

router.get('/ninedetail/:id', function(req, res, next) {
	console.log(URLCONFIG.nine.detail + decodeURIComponent(req.params.id) + '.html')
	superagent.get(URLCONFIG.nine.detail + decodeURIComponent(req.params.id) + '.html')
		.charset('gbk') 
    	.end(function (err, sres) {
    		let detail = {
      			title: '',
      			poster: '',
      			info: '',
      			download: []
      		};
      		if (!err) {
        		let $ = cheerio.load(sres.text, {decodeEntities: false});
	      		
      			detail.title = $('h1 a').html();
      			detail.poster = $('.haibao img').attr('src');
      			$('.neirong').children().last().remove();
      			detail.info = $('.neirong').html();

      			$('.downurl').each(function (idx, element) {
		        	let $element = $(element);

			        $element.find('li').each(function (idx, element1) {
			        	let $element1 = $(element1);
			        	let name = $element1.find('a').eq(0).html();
			        	if(name === 'HD') {
			        		name = '高清版';
			        	}else if(name === 'TS') {
			        		name = '准枪版';
			        	}else if(name === 'CAM') {
			        		name = '枪版';
			        	}else if(name === 'BD') {
			        		name = '蓝光版';
			        	}
				        detail.download.push({
				        	name: name,
				        	link: $element1.find('a').eq(0).attr('href')
				        })
			      	});
		      	});

		      	

      		}
      		
      		res.render('ninedetail', { type: '9', page: '1', searchType: '1', keyword: '', detail: detail });
    	});
});


//80s搜索
function searchOne(req){
    let p = new Promise(function(resolve, reject){
        let searchData1 = [];
        superagent.post(URLCONFIG.one.search)
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
        superagent.get(URLCONFIG.three.search)
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
        superagent.get(URLCONFIG.four.search)
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
        superagent.get(URLCONFIG.six.search)
			.query({q: req.body.keyword, currentPage: req.params.page})
	    	.end(function (err, sres) {
	      		if (!err) {
	        		let $ = cheerio.load(sres.text, {decodeEntities: false});
			      	$('.search-classic.visible-desktop').each(function (idx, element) {
		        		let $element = $(element);
				        searchData4.push({
				          	title: $element.find('.source-title').attr('title'),
				          	href: URLCONFIG.six.href + $element.find('.source-title').attr('href'),
				          	size: $element.find('.next-row').eq(2).html().split('|')
				        });
			      	});
	      		}
	      		resolve(searchData4);
	      	});
    });
    return p;            
}
//DiggBT搜索
function searchFive(req){
    let p = new Promise(function(resolve, reject){
        let searchData5 = {
        	data: [],
        	pageData: [],
        	totalPage: '1'
        };
        superagent.post(URLCONFIG.dt.search)
	    	.send({keyword: req.body.keyword} )
	    	.type('form')
	    	.end(function (err, sres) {
	      		if (!err) {
	        		let $ = cheerio.load(sres.text, {decodeEntities: false});
			      	$('.list-area .item').each(function (idx, element) {
			        	let $element = $(element);
				        searchData5.data.push({
				          	title: $element.find('.item-title a').html(),
				          	subTitle: $element.find('.item-title .category').html(),
				          	href: $element.find('.item-title a').attr('href'),
				          	download: $element.find('.item-detail span').eq(0).find('a').attr('href'),
				          	downloadType: $element.find('.item-detail span').eq(0).find('a').html(),
				          	time: $element.find('.item-detail span').eq(1).html().replace(/收录日期:/g, ''),
				          	size: $element.find('.item-detail span').eq(2).html().replace(/大小:/g, ''),
				          	num: $element.find('.item-detail span').eq(3).html().replace(/文件数:/g, ''),
				          	speed: $element.find('.item-detail span').eq(4).html().replace(/速度:/g, '')
				        });
			      	});
			      	$('.pagination').children().each(function (idx, element) {
			        	let $element = $(element);
			        	if(idx === 0) {
			        		searchData5.totalPage = $element.html();
			        	}
			        	if($element.is('a')) {
			        		searchData5.pageData.push({
					          	name: $element.html().replace(/»/g, '尾页'),
					          	link: encodeURIComponent($element.attr('href').replace(/http:\/\/diggbt.fyi/g, '').replace(/\.html/g, '')),
					          	isCurrent: false
					        });
			        	}
				        if($element.is('strong')) {
			        		searchData5.pageData.push({
					          	name: $element.html(),
					          	link: '',
					          	isCurrent: true
					        });
			        	}
			      	});
	      		}
	      		resolve(searchData5);
	      	});
    });
    return p;            
}
//韩饭网搜索
function searchSix(req, c_page){
    let p = new Promise(function(resolve, reject){
        let searchData6 = {
        	data: [],
        	pageData: [],
        	totalPage: '1'
        };
        superagent.get(URLCONFIG.eight.search)
			.query({s: req.body.keyword})
	    	.end(function (err, sres) {
	      		if (!err) {
	        		let $ = cheerio.load(sres.text, {decodeEntities: false});
			      	$('.excerpt').each(function (idx, element) {
		        		let $element = $(element);
				        searchData6.data.push({
				          	title: $element.find('.focus img').attr('alt'),
				          	subTitle: $element.find('.meta .pv').html(),
				          	poster: $element.find('.focus img').attr('data-src'),
				          	href: $element.find('.focus').attr('href')
				        });
			      	});
			      	$('.pagination li').each(function (idx, element) {
			        	var $element = $(element);
			        	if($element.hasClass('active')) {
			        		searchData6.pageData.push({
					          	page: $element.find('span').html(),
					          	name: $element.find('span').html(),
					          	isCurrent: true
					        });
			        	}else {
			        		if($element.children().is('a')) {
			        			let page = $element.find('a').attr('href').replace(/http:\/\/www.hanfan.cc\//g, '').replace(/page\//g, '').replace(/\//g, '').replace(/\?.*/g, '');
			        			page ? page : page = '1';
			        			searchData6.pageData.push({
						          	page: page,
						          	name: $element.find('a').html(),
						          	isCurrent: false
						        });
			        		}
			        	}
			      	});
			      	searchData6.totalPage = $('.pagination li').last().find('span').html();
	      		}
	      		resolve(searchData6);
	      	});
    });
    return p;            
}
//LOL电影天堂搜索
function searchSeven(req){
    let p = new Promise(function(resolve, reject){
        let searchData7 = [];
        superagent.post(URLCONFIG.nine.search)
        	.charset('gbk')
	    	.send({keyboard: req.body.keyword})
	    	.type('form')
	    	.end(function (err, sres) {
	      		if (!err) {
	        		let $ = cheerio.load(sres.text, {decodeEntities: false});

			      	$('ol').each(function (idx, element) {
		        		let $element = $(element);
				        searchData7.push({
				          	title: $element.find('.label a').html(),
				          	type: $element.find('b').html(),
				          	source: $element.find('span').html(),
				          	time: $element.find('strong').html(),
				          	id: encodeURIComponent($element.find('.label a').attr('href').replace(/\.html/g, '')),
				        });
			      	});
	      		}
	      		resolve(searchData7);
	      	});
    });
    return p;            
}

var searchObj = {};
router.post('/search/:type/:page', function(req, res, next) {
	searchObj = {};
	let data = {
    	type: req.params.type,
    	page: req.params.page,
    	keyword: req.body.keyword,
    	searchType: req.body.searchType,
    	searchData1: [],
    	searchData2: [],
    	searchData3: [],
    	searchData4: [],
    	searchData5: null,
    	searchData6: null,
    	searchData7: []
    };
	if(req.body.searchType === '1') {
		// Promise
		// .all([searchOne(req), searchTwo(req), searchThree(req), searchFour(req)])
		// .then(function(results){
		// 	data.searchData1 = results[0];
		// 	data.searchData2 = results[1];
		// 	data.searchData3 = results[2];
		// 	data.searchData4 = results[3];
		// 	searchObj = data;
		// 	res.render('search', data);
		// });
		Promise
		.all([searchTwo(req), searchThree(req), searchFour(req), searchSeven(req)])
		.then(function(results){
			data.searchData2 = results[0];
			data.searchData3 = results[1];
			data.searchData4 = results[2];
			data.searchData7 = results[3];
			searchObj = data;
			res.render('search', data);
		});
	} else if(req.body.searchType === '2') {
		searchFive(req).then(function(result){
			data.searchData5 = result;
			searchObj = data;
			res.render('search', data);
		})
	}else if(req.body.searchType === '3') {
		searchSix(req, req.params.page).then(function(result){
			data.searchData6 = result;
			searchObj = data;
			res.render('search', data);
		})
	}
});
//韩饭网搜索详情
router.get('/search/:searchType/:type/:page/:keyword', function(req, res, next) {
	searchObj.type = req.params.type;
	searchObj.page = req.params.page;
  	searchObj.searchType = req.params.searchType;
	if(req.params.searchType === '2') {
		superagent.get(URLCONFIG.dt.home + decodeURIComponent(req.params.page) + '.html')
	    	.end(function (err, sres) {
	    		let searchData5 = {
		        	data: [],
		        	pageData: [],
		        	totalPage: '1'
		        };
	      		if (!err) {
	        		let $ = cheerio.load(sres.text, {decodeEntities: false});
			      	$('.list-area .item').each(function (idx, element) {
			        	let $element = $(element);
				        searchData5.data.push({
				          	title: $element.find('.item-title a').html(),
				          	subTitle: $element.find('.item-title .category').html(),
				          	href: $element.find('.item-title a').attr('href'),
				          	download: $element.find('.item-detail span').eq(0).find('a').attr('href'),
				          	downloadType: $element.find('.item-detail span').eq(0).find('a').html(),
				          	time: $element.find('.item-detail span').eq(1).html().replace(/收录日期:/g, ''),
				          	size: $element.find('.item-detail span').eq(2).html().replace(/大小:/g, ''),
				          	num: $element.find('.item-detail span').eq(3).html().replace(/文件数:/g, ''),
				          	speed: $element.find('.item-detail span').eq(4).html().replace(/速度:/g, '')
				        });
			      	});
			      	$('.pagination').children().each(function (idx, element) {
			        	let $element = $(element);
			        	if(idx === 0) {
			        		searchData5.totalPage = $element.html();
			        	}
			        	if($element.is('a')) {
			        		searchData5.pageData.push({
					          	name: $element.html().replace(/»/g, '尾页').replace(/«/g, '首页'),
					          	link: encodeURIComponent($element.attr('href').replace(/http:\/\/diggbt.fyi/g, '').replace(/\.html/g, '')),
					          	isCurrent: false
					        });
			        	}
				        if($element.is('strong')) {
			        		searchData5.pageData.push({
					          	name: $element.html(),
					          	link: '',
					          	isCurrent: true
					        });
			        	}
			      	});
	      		}
		      	searchObj.searchData5 = searchData5;
		      	res.render('search', searchObj);
	      	});
	}else if(req.params.searchType === '3') {
		superagent.get(URLCONFIG.eight.home + req.params.page+'/')
			.query({s: req.params.keyword})
	    	.end(function (err, sres) {
	    		let searchData6 = {
		        	data: [],
		        	pageData: [],
		        	totalPage: '1'
		        };
	      		if (!err) {
	        		let $ = cheerio.load(sres.text, {decodeEntities: false});
			      	$('.excerpt').each(function (idx, element) {
		        		let $element = $(element);
				        searchData6.data.push({
				          	title: $element.find('.focus img').attr('alt'),
				          	subTitle: $element.find('.meta .pv').html(),
				          	poster: $element.find('.focus img').attr('data-src'),
				          	href: $element.find('.focus').attr('href')
				        });
			      	});
			      	$('.pagination li').each(function (idx, element) {
			        	var $element = $(element);
			        	if($element.hasClass('active')) {
			        		searchData6.pageData.push({
					          	page: $element.find('span').html(),
					          	name: $element.find('span').html(),
					          	isCurrent: true
					        });
			        	}else {
			        		if($element.children().is('a')) {
			        			let page = $element.find('a').attr('href').replace(/http:\/\/www.hanfan.cc\//g, '').replace(/page\//g, '').replace(/\//g, '').replace(/\?.*/g, '');
			        			page ? page : page = '1';
			        			searchData6.pageData.push({
						          	page: page,
						          	name: $element.find('a').html(),
						          	isCurrent: false
						        });
			        		}
			        	}
			      	});
			      	searchData6.totalPage = $('.pagination li').last().find('span').html();
	      		}
		      	searchObj.searchData6 = searchData6;
		      	res.render('search', searchObj);
	      	});
	}
});

module.exports = router;
