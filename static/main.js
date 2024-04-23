function show(){
    document.querySelector('.menuTab').style.display = "block";
    document.querySelector('.contentTab').style.display = "none";
    const hiddentElements = document.querySelectorAll('li');
    hiddentElements.forEach((el) => observer.observe(el));
}

function hide(){
    document.querySelector('.menuTab').style.display = "none";
    document.querySelector('.contentTab').style.display = "block";
    
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddentElements = document.querySelectorAll('.presentation');
    hiddentElements.forEach((el) => observer.observe(el));