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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Mi sit amet mauris 
        commodo quis imperdiet massa tincidunt nunc. Purus sit amet luctus 
        venenatis lectus magna fringilla. Sed nisi lacus sed viverra tellus
         in hac. Leo integer malesuada nunc vel risus commodo. Nascetur 
         ridiculus mus mauris vitae ultricies leo integer. Scelerisque 
         fermentum dui faucibus in ornare. Et netus et malesuada fames ac 
         turpis egestas maecenas pharetra. Donec ac odio tempor orci. Luctus
          venenatis lectus magna fringilla urna porttitor rhoncus. Vel 
          fringilla est ullamcorper eget. Mattis rhoncus urna neque viverra 
          justo nec ultrices dui sapien. Morbi non arcu risus quis. Turpis
           in eu mi bibendum neque. Nibh mauris cursus mattis molestie a 
           iaculis at erat. Est ullamcorper eget nulla facilisi etiam 
           dignissim diam. Elementum tempus egestas sed sed risus.ofu,
           I don't know why but I get it everytime for some reason.</p>
        
    </div>
    
    </div>
`
}
const projectspage=function(){
    return `
    <div class="projectsformat" id="projects">
        <h1>Projects</h1>
        <div class ="projects" onclick="window.open('https://thinkful-ei-jaguar.github.io/quiz-appRobert-Kristofer/','mywindow');" style="cursor: pointer;">
            <h1>Quiz-App<h1>
            <p class="hidden">
            <br>This is a simple quiz application about Sound Physics.
            <br>The user can choose between answer choices and submit to see next question to be answered.
            <br>Jquery,HTML,and CSS.
            </p>
            <button  type="button" class="left" onclick="window.open('https://github.com/thinkful-ei-jaguar/quiz-appRobert-Kristofer','mywindow');">Repo</button>
        </div>
        
    </div>
    `
}
const contactpage=function(){
    return `
    <div class ="contactform" id ="contact">
    <h1>Contact<h1>
    <h2>Email Adress:</h2>
    <p>raperez523@gmail.com</p>
    <h2>Github:</h2>
    <p>ralexblue</p>
    <//div>
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

