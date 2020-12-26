var r = document.querySelector(':root');

hoveredButton = document.querySelectorAll('button');
const showNumber = document.querySelector('.num');

let nArray = [1,2,3,4,5];


let image = [
    {
        name:'plants',
        color: '#2B4C2B',
        img: ['img/plant1.jpg','img/plant2.jpg','img/plant5.jpg','img/plant4.jpg']
    },
    {
      name:'ocean',
      color: '#2F80C9',
      img: ['img/ocean1.jpg','img/ocean2.jpg','img/ocean3.jpg','img/ocean4.jpg']
    },
  {
      name:'walls',
      color: '#E0843F',
      img: ['img/wall1.jpg','img/wall2.jpg','img/wall3.jpg','img/wall4.jpg']
    }
];

for (var i = 0; i < hoveredButton.length; i++)
{

    (function(index){

        let removeimg;

        var imageCont = document.querySelectorAll('.myimg');
        hoveredButton[i].addEventListener('mouseover', function(){
            console.log(index);
            tl.play();            
            
            r.style.setProperty('--background', image[index].color);


            for (let j = 0; j < imageCont.length; j++) {

                imageCont[j].setAttribute('src', image[index].img[Math.floor(Math.random() * 4)])
                imageCont[j].style.display='block'
                
            }

            showNumber.textContent = nArray[index];

            clearTimeout(removeimg);


        }) 
        hoveredButton[i].addEventListener('mouseout', function(){
            tl.reverse();

            for (let j = 0; j < imageCont.length; j++) {

                // removeimg = setTimeout(()=>{imageCont[j].style.display='none'},800);
                
            }
            
            
        })
        
    })(i);

}

var slices = document.querySelectorAll(".uncover_slice");


var tl = gsap.timeline();
tl
.to(".uncover_slice", 0.3 , {scaleX :"0", transformOrigin:"100% 50%", onStart:()=>{
    
}}, 0.1 )
.to(".myimg", 0.3, { scale: 1.2 } ,0);

tl.pause();

