
//     let speech = new SpeechSynthesisUtterance();
//     let texttag = document.getElementById('mybutton');
//     let speek = document.getElementById('mytext');

//     texttag.addEventListener('click', ()=> {
//     speech.text = speek.value;
//     window.speechSynthesis.speak(speech);
// });



// let speech= new SpeechSynthesisUtterance();
// let texttag=document.getElementById('mybutton');
// let speek=document.getElementById('mytext');
// texttag.addEventListener('click',()=>
// {
 
//   speech.text=speek.value;
//   window.speechSynthesis.speak(speek);

// }); 

// script.js

document.addEventListener('DOMContentLoaded', function () {
    let speech = new SpeechSynthesisUtterance();
    let texttag = document.getElementById('mybutton');
    let speek = document.getElementById('mytext');
    

    if ('speechSynthesis' in window) {
        texttag.addEventListener('click', function () {
            speech.text = speek.value;
            window.speechSynthesis.speak(speech);
        });
    } else {
        console.error('SpeechSynthesis is not supported in this browser.');
    }
});
 
