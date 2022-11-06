const sections = document.querySelectorAll('.section');
const sectButtons = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSelect = document.querySelector('.main-content');

function transition(){
    //Click on the active class button
    //make a mapping function that includes a function

    // this can still be improved 
    
   for(let i = 0; i < secBtn.length; i++){
   secBtn[i].addEventListener("click", function() { 
        let currentBtn = document.querySelectorAll(".active-btn"); 
        currentBtn[0].className = currentBtn[0].className.replace("active-btn", ""); //he takes the active btn function and gives it to the other one  
         this.className += " active-btn"
    });} 
    
     //Section active class  
    
     allSelect.addEventListener("click", (e) => {
        const id = e.target.dataset.id;

        if(id){
            sectButtons.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section) =>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            return element.classList.add('active');

            
        }
     })
     document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })     
}



transition()


const CountDown = () => {

    const mintDate = new Date("December 31, 2022 00:00:00").getTime();
    const currentDate = new Date().getTime();

    const gap = mintDate - currentDate;
    console.log(gap)
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const newDay = Math.floor((gap/day));
    const newHour = Math.floor((gap % day) / hour);
    const newMinute = Math.floor((gap % hour) / minute);
    const newSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerHTML = newDay
    document.querySelector(".hour").innerHTML = newHour
    document.querySelector(".min").innerHTML = newMinute
    document.querySelector(".sec"). innerHTML = newSecond;
}

setInterval(CountDown,1000);



  


