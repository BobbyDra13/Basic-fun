const quotes=[
    {
        name:'Eleanor Roosevelt',
        quote:'The future belongs to those who believe in the beauty of their dreams.',
        color:'red',
    },
    {
        name:'Tony Robbins',
        quote:'The only impossible journey is the one you never begin',
        color:'blue',
    },
    {
        name:'Garrison Keillor',
        quote:'When in doubt, look intelligent.',
        color:'orange',
    },
    {
        name:'Oscar Wilde',
        quote:'The only thing worse than being talked about is not being talked about.',
        color:'navy',
    },
    {
        name:'James Cameron',
        quote:'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
        color:'grey',
    },
];

const quotebtn = document.querySelector('#quotebtn');
const quoteAuthor = document.querySelector('#quAu');
const quote = document.querySelector('#qu');

quotebtn.addEventListener('click',displayQuote);
quotebtn.addEventListener('keypress',function (e){

if(e.key==='Enter'){
    displayQuote();
}
})

function displayQuote() {
    let random=Math.floor(Math.random()*quotes.length);
    console.log(random);
    quoteAuthor.innerHTML=quotes[random].name;
    quote.innerHTML=quotes[random].quote;
    quote.style.color=quotes[random].color;
}

//message project

const sendbtn= document.querySelector('#sendbtn');
const messageIn= document.querySelector('#messageIn');
const messageout= document.querySelector('#messageout');

sendbtn.addEventListener('click',sendMsg);

function sendMsg() {
        let content= messageIn.value;
        if(messageIn.value===''){
            alert('Please Enter a Valid Text');
        }else{
            console.log(content);
            messageout.innerHTML=content;
            messageout.style.color='green';
            messageIn.value='';
        }
    }

//counter project

let counter=document.querySelector('.counter');
let addcount=document.querySelector('#adbtn');
let lowercount=document.querySelector('#lobtn');
let fun=document.querySelector('#fun');

let count=0;

addcount.addEventListener('click',decreament);
lowercount.addEventListener('click',increament);

function increament() {
    count++;
    counter.innerHTML=count;
    fun.innerHTML='Click more for increasing';
    fun.style.color='yellow';
   // counter.animate([{opacity:'0.3'},{opacity:'1.0'},{duration:500,fill:'forwards'}]);
}
function decreament() {
    count--;
    counter.innerHTML=count;
    fun.innerHTML='Click more for decreasing';
    fun.style.color='pink';
}
function ageindays(){
    var birthyear=prompt('which year are you born?');
    var ageindays=(2023 - birthyear) * 365;
    var age = (2023-birthyear);
    var text=' And you are '+ageindays+' days old.'+'you are '+age+' years old';
    document.querySelector('#end').innerHTML=text;
    /*var h1=document.getElementById('age').createElement('h1');
    var textans=document.createTextNode('you are '+ ageindays +' days old');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textans);
    document.getElementById('end').appendChild(h1);*/
}
function reset(){
    document.getElementById('end').innerHTML='';
}