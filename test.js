var test = QUnit.test;
test("Function `request` should be exist", function(t) {
	t.ok(window.request,'it exists');
});

test("request function should return Array",function(t){
	var done = t.async();
	console.log("One");
	analyzFace("http://www.drodd.com/images15/face13.jpg", function( error,data) {
		console.log("error",error);
		console.log("data",data);
		t.equal(data.mess,"Fantastic, Keep going in your Happiness :)",'Get right messege');
		done();
	});

});


