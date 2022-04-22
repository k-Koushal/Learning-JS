function start(){

    var image=document.createElement('img');
    var div= document.getElementById('result');
    image.src="https://picsum.photos/200";
    div.appendChild(image);
    image.id='generatedImage'
}
function reset(){
    document.getElementById('generatedImage').remove()
}