function request(config, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Ocp-Apim-Subscription-Key", key.Emotion);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText);
            cb(undefined, result);
        } else if (xhr.readyState == 4 && xhr.status !== 200) {
            alert("Fail");
        }
    };
    var data = '{"url":"' + config.urlImage + '"}';
    xhr.send(data);
}

function analyzFace(faceUrl, cb) {
    request({
            method: "POST",
            url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
            urlImage: faceUrl //randomImages(images)
        },
        function(error, data) {
            if (isHappy(data)) {
                cb(undefined, {
                    isHappy: true,
                    mess: "Fantastic, Keep going in your Happiness :)"
                });
            } else {
                cb(undefined, {
                    isHappy: false,
                    mess: 'we will make you so happy'
                });
            }
        });
}

function isHappy(data) {
    return data[0].scores.happiness > data[0].scores.sadness;
}

function randomImages(list) {
    return list[Math.floor(Math.random() * list.length)];

}

window.onload = function() {
    SC.initialize({
        client_id: key.SC
    });
};

function playMusic(cb) {
    SC.get('/tracks', { genres: 'happy' })
        .then(function(tracks) {
            var random = Math.floor(Math.random() * 9);
            SC.oEmbed(tracks[random].uri, { element: document.getElementById("target") });
            cb(undefined, tracks);
        });

};


// var images = [  'http://www.drodd.com/images15/face13.jpg',
// 				'https://i.imgflip.com/z1s6k.jpg',
// 				'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYw3g5ng-GSkxdAMj--vagiT2WXTV2HjUV791q0Dbw6bpLCQuH',
// 				'https://s-media-cache-ak0.pinimg.com/236x/8d/22/83/8d2283fba6942b8c073c14ee61e3dd28.jpg',
// 				'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtebs7rwGfDGLimv2wcGnOrBkjlYkTSTxMrIYvnKqFetIlgWYK',
// 				'http://www.iwallfree.com/wp-content/uploads/2013/12/cute_baby_pics_face_girl_hd_wallpaper_4___cool_bab_10951_wallpaper-1024x768.jpg',
// 				'https://www.brown-eyedgirlphotography.ca/blog/wp-content/uploads/2011/12/happy-face-baby-regina-photographer(pp_w880_h586).jpg',
// 				'http://webneel.com/daily/sites/default/files/images/project/baby-photography%20(1).jpg',
// 				'https://s-media-cache-ak0.pinimg.com/236x/00/ec/17/00ec171f5122823b091cf2064a0ea14a.jpg'
// ];
