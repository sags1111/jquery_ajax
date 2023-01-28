// var para1 = document.getElementById("para1");
// para1.innerHTML = "Welcome"
//for jquery
// $('#para1').html('Welcome');
// $('#para2').hide();






// $(document).ready(function() {
//     getData();
// })

// function getData() {
//     $.ajax({
//         url: 'sample.html',
//         type: 'GET',
//         dataType: 'text',
//         success: successFn,
//         error: Error,
//         complete: function(xhr, status) {
//             console.log("request complete");
//         }
//     })
// }

// function successFn(result) {
//     console.log("console sucess");
//     $("AjaxMessage").append(result);
// }

// function Error() {
//     console.log("incomplete here");
// }
// function fetchDogImage() {
//     var xhrRequest = new XMLHttpRequest();
//     xhrRequest.onload = function() {
//         console.log(xhrRequest.response);
//         var responseJson = JSON.parse(xhrRequest.response);
//         var imgUrl = this.responseJson.message;
//         $('#dog-image').attr('src', imgUrl);
//     };
//     xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
//     xhrRequest.send();
// }
// $('#fetch-dog-image-button').click(fetchDogImage);
function displayImage(data) {
    // $('<img>', {
    //     src: data.url
    // }).appendTo('#image-container');
    $(document.createElement('img')).attr('src', data.url).appendTo('#image-container');
}
$.ajax({
    url: ' 	http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json',
    method: 'Get',
    success: displayImage,
    data: {
        date: '2023-2-22',
    }
});



// https://api.publicapis.org/entries