const toggleBtn = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const annualHead = document.querySelectorAll('.annual-head');
const monthlyHead = document.querySelectorAll('.month-head')
console.log(monthlyHead);




toggleBtn.addEventListener('click',function(){
    if(circle.classList.contains("monthly")){
        circle.classList.replace("monthly","annually");
        for(const head of annualHead){
            head.classList.remove('d-none');
            head.classList.add('d-block');
        }

        for(const head of monthlyHead){
            head.classList.add('d-none');
            head.classList.remove('d-block');
        }
    }else{
        
        circle.classList.replace("annually","monthly");
        for(head of annualHead){
            head.classList.add('d-none');
            head.classList.remove('d-block');
        }

        for(const head of monthlyHead){
            head.classList.remove('d-none');
            head.classList.add('d-block');
        }
    }
    
    })
    
   