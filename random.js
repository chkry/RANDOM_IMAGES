document.getElementById("yesButton").addEventListener("click", chkry);



function chkry() {

    var images = ["http://kindersay.com/files/images/goat.png", "http://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23262_entlebucher-mountain-dog-460x290.jpg", "http://animal-dream.com/data_images/cat/cat3.jpg", "http://images.all-free-download.com/images/graphiclarge/cartoon_cow_clip_art_6772.jpg"]


    var presentImage = document.getElementById("sourceImage").src;
    console.log(presentImage);

    var index = images.indexOf(presentImage);
    console.log(index);


    if (index == -1) {

        console.log("index in if condition"+index);
        var randomValue = calculate();
        console.log("RandomValue in if condition"+randomValue);
        var imagesrc = images[randomValue];
        console.log(imagesrc);
        document.getElementById("sourceImage").src = imagesrc;


    } else {


        console.log("index in else condition"+index);

        do{
            var randomValue = calculate();
        }while(index == randomValue)
        console.log("RandomValue in else condition"+randomValue);

        var imagesrc = images[randomValue];
        document.getElementById("sourceImage").src = imagesrc;
    }




}


function calculate() {
        var random = Math.random() * 3;
        var random = random.toFixed(0);
    return random;

}
