var images = [  'http://www.drodd.com/images15/face13.jpg',
				'https://i.imgflip.com/z1s6k.jpg',
				'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYw3g5ng-GSkxdAMj--vagiT2WXTV2HjUV791q0Dbw6bpLCQuH',
				'https://s-media-cache-ak0.pinimg.com/236x/8d/22/83/8d2283fba6942b8c073c14ee61e3dd28.jpg',
				'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtebs7rwGfDGLimv2wcGnOrBkjlYkTSTxMrIYvnKqFetIlgWYK',
				'http://www.iwallfree.com/wp-content/uploads/2013/12/cute_baby_pics_face_girl_hd_wallpaper_4___cool_bab_10951_wallpaper-1024x768.jpg',
				'https://www.brown-eyedgirlphotography.ca/blog/wp-content/uploads/2011/12/happy-face-baby-regina-photographer(pp_w880_h586).jpg',
				'http://webneel.com/daily/sites/default/files/images/project/baby-photography%20(1).jpg',
				'https://s-media-cache-ak0.pinimg.com/236x/00/ec/17/00ec171f5122823b091cf2064a0ea14a.jpg'
];
var test = QUnit.test;
test("Function `request` should be exist", function(t) {
	t.ok(window.request,'it exists');
});

test("'request' function should return Array",function(t){
	var done = t.async();
	request({
		method: "POST",
		url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
		urlImage: "http://www.drodd.com/images15/face13.jpg"
		}, function(error, data) {
			t.equal(Object.prototype.toString.call(data),'[object Array]','Get right messege');
			done();
	});
  
});
	
test("'analyzFace' function should return the text 'we will make you so happy' if image was sad",function(t){
	var done = t.async();
	analyzFace(images, function( error,data) {
		t.equal(data.mess,'we will make you so happy','Get right messege');
		done();
	});

});

test("'analyzFace' function should return the text 'Fantastic, Keep going in your Happiness :)' if image was happy",function(t){
	var done = t.async();
	analyzFace(images, function( error,data) {
		t.equal(data.mess,'Fantastic, Keep going in your Happiness :)','Get right messege');
		done();
	});

});

