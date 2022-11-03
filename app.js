const sections = document.querySelectorAll('.selection');
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
    
     allSelect.addEventListener("click", (item) => {
        const id = item.target.dataset.id;

        if(id) {
            sectButtons.forEach((btn) => {
                btn.classList.remove("active")
            });
            
            item.target.classList.add("active")

            sections.forEach((section) =>{
                sections.classList.remove("active");
            } )

            const element = document.getElementById(id)
            element.classList.add("active")
        }
     });
        
}



transition()