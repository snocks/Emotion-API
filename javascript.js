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
document.getElementById("imageButton").onclick = start;

function analyzFace(cb) {
    var imgUrl = randomImages(images);
    document.getElementById('imgId').src = imgUrl;
    request({
            method: "POST",
            url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
            urlImage: imgUrl
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

function start() {
    analyzFace(function(error, data) {
        if (data.mess === "Fantastic, Keep going in your Happiness :)") {
            document.getElementById("message").innerHTML = data.mess;

        } else {
            playMusic();
        }
    });
}

function isHappy(data) {
    console.log("HAPPY");
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

function playMusic() {
    SC.get('/tracks', { genres: 'happy' })
        .then(function(tracks) {
            var random = Math.floor(Math.random() * 9);
            SC.oEmbed(tracks[random].uri, { element: document.getElementById("message") });
        });

};
