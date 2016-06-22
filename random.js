document.getElementById("yesButton").addEventListener("click", chkry);


var ArrayStore = [];

var images = ["http://kindersay.com/files/images/goat.png", "http://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23262_entlebucher-mountain-dog-460x290.jpg", "http://animal-dream.com/data_images/cat/cat3.jpg", "http://images.all-free-download.com/images/graphiclarge/cartoon_cow_clip_art_6772.jpg"];

function chkry() {

    var presentImage = document.getElementById("sourceImage").src;
    console.log(presentImage);

    var index = images.indexOf(presentImage);
    console.log(index);

    var prevIndex = images.indexOf(presentImage);

    var storePrevIndex = PushArray(prevIndex);

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
        var random = Math.random() * 4;
        var random = Math.floor(random)
    return random;

}


// Storing Values in array

function PushArray(prevIndex){

    ArrayStore.push(prevIndex)
    console.log(ArrayStore);
}





//Storing values in array end

document.getElementById("noButton").addEventListener("click", NoClicked);

function NoClicked(){

    var prevIndex = ArrayStore[ArrayStore.length-1];
    var imagesrc = images[prevIndex];

    document.getElementById("sourceImage").src = imagesrc;


}

