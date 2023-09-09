if(localStorage.getItem("basket") == null)
{
  localStorage.setItem("basket", JSON.stringify([]));  
}

let btns = document.querySelectorAll(".add-btn");

btns.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        let cartName = e.target.parentElement.parentElement.children[0].children[0].textContent;
        let cartCurrency= e.target.parentElement.parentElement.children[0].children[2].children[1].children[1].textContent;
        let cartCashback= e.target.parentElement.parentElement.children[0].children[2].children[2].children[1].textContent;


            let basketList = JSON.parse(localStorage.getItem("basket"));
             basketList.push({
                 name: cartName,
                 currency: cartCurrency,
                 cashback: cartCashback
             })
            localStorage.setItem("basket",JSON.stringify(basketList))
    })
});