import $ from 'jquery';
import './index.css';




const name = function(){
return `
    <div class="tea">
    <h1>Robert Perez</h1>
    </div>
    `
}

const navbar=function(){
    return `
    <ul class="container">
        <li class="circle"><a class="aligner" href="#home">Home</a></li>
        <li class="circle a"><a class="aligner" href="#projects">Projects</a></li>
        <li class="circle b"><a class="aligner" href="#contact">Contact</a></li>
    </ul>
    `

}
//<li class="circle c"><a class="aligner" href="#resume">Resume</a></li>

const aboutmepage=function(){
return `
<div class = "aboutformat" id="about">
    <div class ="info">
        <h2>About Me<h2>
        <p>I'm a Software Engineer with an Associates Degree in Computer Science.
        I like to develop with software because it reminds me of Lego bricks and rather than small
        toy bricks to make a house its unseen digital blocks that I can build with.
        Projects I would like to help with are more user accesibility and control flow since technology is always growing. I like how easier life has been by ordering online or using a  whole taxi service in my phone.These apps are made with many people so I love to code with others since they always provide insightful alternatives to problems or me providing other solutions to them. Some hobbies I have is playing and or hearing music that I like.
        I like reading manga/manhwa and like exploring through different stories.
        One of my favorite dishes in the world is orange tofu,I don't know why but I get it every time I eat out for chinese.
        </p>
        </div>
        <img class="line" src="https://www.veganricha.com/wp-content/uploads/2019/01/Vegan-Orange-Tofu-veganricha-6124.jpg" height="650px"></img>
    </div>
`
}
const projectspage=function(){
    return `
  
    <div class="projectsformat" id="projects">
        <h1>Projects</h1>
        <div class ="projects">
        <a class="nothing" href="https://thinkful-ei-jaguar.github.io/quiz-appRobert-Kristofer/" target="_blank">
            <h1>Quiz-App<h1>
            <p class="hidden">
            <br>This is a simple quiz application about Sound Physics.
            <br>The user can choose between answer choices and submit to see next question to be answered.
            <br>Jquery,HTML,and CSS.
            </p>
            </a>
            <button  type="button" class="left"  onclick="window.open('https://github.com/thinkful-ei-jaguar/quiz-appRobert-Kristofer','mywindow');">Repo</button>
        </div>

    </div>
   
    `
}
const contactpage=function(){
    return `
    <div class ="contactform" id ="contact">
    <h1>Contact<h1>
    <h2>Email Adress:</h2>
    <a href="mailto:raperez523@gmail.com" target="_top">raperez523@gmail.com</a>
    <h2>Github:</h2>
    <a href="https://github.com/ralexblue">ralexblue</a>
    <h2>LinkeIn</h2>
    <a href="https://www.linkedin.com/in/robert-perez-198622199/">Robert Perez</a>
    </div>

    `
}
/*const resumepage=function(){
    return `
    <h2>Resume<h2>
    <p>this is where all the resume go</p>
    `
}*/
const thebody=function(){
    const about=aboutmepage()+projectspage()+contactpage();
    $('.body').html(about);
    $("body").css("background-color", "#2EB6E8");
    $( "ul li" ).click(function( event ) {
        var target = $( event.target ).text();
        console.log(target);
        if ( target == 'Home' ) {
            const about=aboutmepage()+projectspage()+contactpage();
             $('.body').html(about);
             $("body").css("background-color", "#2EB6E8");
             $('html, body').animate({scrollTop: $("#about").offset().top},'slow');
        }
        else if ( target == 'Projects' ) {
            $("body").css("background-color", "#419AFF");
            $('html, body').animate({scrollTop: $("#projects").offset().top},'slow');
        }
        else if(target==`Contact`){
            $("body").css("background-color", "#2E54E8");
            $('html, body').animate({scrollTop: $("#contacts").offset().top},'slow');
        }
      });
}
const thetop = function(){
    let htmltop='';
    htmltop=name()+navbar();
    $('.head').html(htmltop);
}
const main = function(){
    thetop();
    thebody();
}
$(main);

