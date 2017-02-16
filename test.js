var test = QUnit.test;
test("Function `request` should be exist", function(t) {
    t.ok(window.request, 'it exists');
});

test("'request' function should return Array", function(t) {
    var done = t.async();
    request({
        method: "POST",
        url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
        urlImage: "http://www.drodd.com/images15/face13.jpg"
    }, function(error, data) {
        t.equal(Object.prototype.toString.call(data), '[object Array]', 'It return Array');
        done();
    });

});

test("'analyzFace' function should return the text 'we will make you so happy' if image was sad", function(t) {
    var done = t.async();
    analyzFace('https://s-media-cache-ak0.pinimg.com/236x/00/ec/17/00ec171f5122823b091cf2064a0ea14a.jpg',function(error, data) {
        t.equal(data.mess, 'we will make you so happy', 'Get right messege');
        done();
    });

});

test("'analyzFace' function should return the text 'Fantastic, Keep going in your Happiness :)' if image was happy", function(t) {
    var done = t.async();
    analyzFace('http://www.drodd.com/images15/face13.jpg', function(error, data) {
        t.equal(data.mess, 'Fantastic, Keep going in your Happiness :)', 'Get right messege');
        done();
    });

});

test("playMusic function shoud return Array", function(t) {
    var done = t.async();
    playMusic(function(error, data) {
        t.equal(Object.prototype.toString.call(data), '[object Array]', 'Array');
        done();
    });

});
