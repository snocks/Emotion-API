# [Emotion-API](https://snocks.github.io/Emotion-API/index.html)
# [Test page](https://snocks.github.io/Emotion-API/test.html)


This project is about using *two* APIs , the first API analayzing face emotion  by sending URL of image to the API , depending on the result if he was happy we write a motivation message to him but if he was sad we call the second API which is sound cloud API and play happy music.

### Note: You should have a flash player in your browser.

## User Stories:
 - when the user open the site , he should see the button.
 - when the user click on the button, random image will appear.
 - if the person in the image was happy, the motivation message will appear other , but if the person in the image was sad the music will play.

## Emotion-API:
This API from Microsoft [link](https://www.microsoft.com/cognitive-services/en-us/emotion-api).
This API analyze faces to detect a range of feelings and personalize your app's responses.
To use this API you should sign up in Microsoft and subscribe in this API to get the key.
 **Example:**
 ![alt text](https://www.programmableweb.com/sites/default/files/microsoft-computer-vision-emotion-API.jpg)
## Sound-Cloud API:
This API is from Sound-Cloud [link](https://developers.soundcloud.com/docs/api/guide).
By using this API we can stream a music or embed in our page and play it.
To use this API you should sign up in Sound-Cloud and register for a new app to get the key.

## run

To run the code you need to create a config.js file. Inside the file create a variable key.
```js
var key = {
Emotion: '<key>',
SC: '<key>',
}
