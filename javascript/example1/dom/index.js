// const incButton= document.querySelector('#inc')
// const decButton= document.querySelector('#dec')
// const output= document.querySelector('#output')

// let num=0
// incButton.addEventListener('click',()=>{
//     num=num+1
//     output.innerHTML=num;

// })

// decButton.addEventListener('click',()=>{
//     num=num-1
//     output.innerHTML=num;
    
// })

// userinput=document.querySelector('#userinput')
// userinput.addEventListener('change',()=>{
//     input=userinput.value
//     const colors=['red', 'blue','pink','yellow',]
//     document.body.style.backgroundColor=colors[input]
// })

bgChange=document.querySelector('#bgChange')
const bgColors = ['red','blue','pink','yellow']
bgChange.addEventListener('click',()=>{
    const ranNum=Math.floor(Math.random()*bgColors.length)
    const finalColor=bgColors[ranNum]
    document.body.style.backgroundColor=finalColor
})