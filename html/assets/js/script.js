const openUl = document.querySelector(".page-list");

openUl.addEventListener("click",(e)=>{
    // console.log(e.target.innerText);
    // console.log(e.target.nextSibling.target);
    // console.log(e.target.nextElementSibling);
    let val = e.target.nextElementSibling;
    val.classList.toggle("hideShow");

})