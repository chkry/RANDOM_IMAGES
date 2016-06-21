

document.getElementById("yesButton").addEventListener("click", chkry);



function chkry(){

            var images = ["http://kindersay.com/files/images/goat.png","http://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23262_entlebucher-mountain-dog-460x290.jpg","http://animal-dream.com/data_images/cat/cat3.jpg","http://images.all-free-download.com/images/graphiclarge/cartoon_cow_clip_art_6772.jpg"]


            if(randomValue == null){
                randomValue = 0;
            }

            var randomValue = calculate(randomValue);

            var imagesrc = images[randomValue];

            document.getElementById("sourceImage").src=imagesrc;
            document.getElementById("sourceImage").alt=randomValue;


}


function calculate(oldValue){

    var random = Math.random()*3;
    var random = random.toFixed(0);
    console.log("The Random value is :"+random);
    console.log("The oldValue is "+oldValue);
    if(oldValue !== random){
       return random
    }
    return -1;

}
