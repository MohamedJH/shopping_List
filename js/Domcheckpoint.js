var cards=document.querySelectorAll('.item');
var heartIcons =document.querySelectorAll('.heartIcon')
var likeIcons =document.querySelectorAll('.likeIcon')
var trashIcons = document.querySelectorAll('.trashIcon')
console.log(cards)


var upBtns = document.querySelectorAll('.Up');
var downBtns = document.querySelectorAll('.Down');
var inputElements = document.querySelectorAll('.Qty');
var unitPrice = document.querySelectorAll('.UnitPrice span');
var sousTotal = document.querySelectorAll('.sousTotal span');
var Total = document.getElementById('totalValue');
var sum = 0;
// console.log(downBtns)

for (let i = 0; i < upBtns.length; i++) {
    const upBtn = upBtns[i];
    const downBtn = downBtns[i];
    const inputElement = inputElements[i];
    const heartIcon=heartIcons[i];
    const likeIcon=likeIcons[i];
    const trashIcon=trashIcons[i];
    const card=cards[i];

    function Increment(event) {
        let inputElement = event.target.nextElementSibling;
        let inputValue = Number(event.target.nextElementSibling.getAttribute('value'));
        let nextValue = event.target.nextElementSibling.setAttribute('value', inputValue + 1)
        event.target.nextElementSibling.innerHTML = nextValue
        var qte = event.target.nextElementSibling.getAttribute('value');  
        let unitPriceValue = Number(unitPrice[i].innerHTML);
        sousTotal[i].textContent = unitPriceValue * Number(qte)
        sum+=unitPriceValue;
        Total.firstElementChild.textContent = Number(sum);
    }

    function Decrement(event) {
        let inputElement = event.target.previousElementSibling;
        let inputValue = Number(event.target.previousElementSibling.getAttribute('value'));
        if (inputValue <= 0) {
            var previousValue = event.target.previousElementSibling.setAttribute('value', 0);
            sousTotal[i].textContent = unitPriceValue * Number(qte);
            sum-=(unitPriceValue);
            Total.firstElementChild.textContent = Number(sum);

        } else {
            var previousValue = event.target.previousElementSibling.setAttribute('value', inputValue - 1);
            event.target.previousElementSibling.innerHTML = previousValue;
            let qte = event.target.previousElementSibling.getAttribute('value');
            let unitPriceValue = Number(unitPrice[i].innerHTML);
            sousTotal[i].textContent = unitPriceValue * Number(qte);
            sum-=(unitPriceValue);
            Total.firstElementChild.textContent = Number(sum);
            
        }
        
    }

    trashIcon.addEventListener('click',function remove(event) {
        card.remove();
        let valueToDelete=Number(sousTotal[i].innerHTML);
        sum-=valueToDelete;
        Total.firstElementChild.textContent =Number(sum)
    })
    
    likeIcon.addEventListener('click',function likes(event) {
        // event.target.style.color="blue";
        event.target.classList.toggle("likeIconMagmt")
        
    })

    heartIcon.addEventListener('click',function hearts(event) {
        // event.target.style.color="red";
        event.target.classList.toggle("heartIconMagmt")
    })
   
 

  

    upBtn.addEventListener('click', Increment)
    downBtn.addEventListener('click',Decrement)
    
    



}
