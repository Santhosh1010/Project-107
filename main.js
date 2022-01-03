// https://teachablemachine.withgoogle.com/models/dvN7McQej/ //

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1SWFwpmyW/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error, results)
{
    console.log("got Results")
    
}