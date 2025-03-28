const accordians = document.querySelectorAll(".accordian");

accordians.forEach((acc)=>{
    const icon = acc.querySelector(".icon");
    const ans = acc.querySelector(".answer");

    acc.addEventListener("click",()=>{
        // icon.classList.toggle("active");
        // ans.classList.toggle("active");

        if(icon.classList.contains("active")){
            icon.classList.remove("active");
            ans.style.maxHeight=null;
        }
        else{
            icon.classList.add("active");
            ans.style.maxHeight=ans.scrollHeight + "px";
        }
    })
})