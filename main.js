console.log('app has started');
const container=document.querySelector('.container');
const input=document.querySelector('input');
const title=document.querySelector('.title-text');
const icon=document.querySelector('.btn-enter');
const listItems=document.querySelector('.listItems');
const allClear=document.querySelector('.allClear');

input.addEventListener('click',()=>{
    container.classList.add('background');
    allClear.style.display="block";
console.log('input is pressed');
})

// working on a click button 
icon.addEventListener('click',()=>{
   addLi();  
})
// working on a enter button 
document.addEventListener('keypress',(e)=>{
    if(e.keyCode===13||event.which===13){
        addLi();
    }
})

// working on a all clear button
allClear.addEventListener('click',()=>{
const listItem=document.querySelectorAll('.listItem');
Array.from(listItem).forEach(e=>{
    e.style.display='none';
})
})
// working on a delete button
listItems.addEventListener('click',(e)=>{
    // console.log('ul is pressed');
    if(e.target.className=='delete'){
        console.log('delete button is pressed');
        const li=e.target.parentNode;
        li.parentNode.removeChild(li);
    }
})
const addLi=()=>{
    const newli=document.createElement('li');
    const newSpan1=document.createElement('span');
    const newSpan2=document.createElement('span');
    const newListMenu=input.value;
    if(newListMenu!==""){
        newli.classList.add('listItem');
        newSpan1.classList.add('name');
        newSpan2.classList.add('delete');
        newSpan1.textContent=newListMenu;
        newSpan2.textContent='delete';
        newli.appendChild(newSpan1);
        newli.appendChild(newSpan2);
        listItems.appendChild(newli);
    } 
    clearField();
    
}
const clearField=()=>{
    input.value="";
}