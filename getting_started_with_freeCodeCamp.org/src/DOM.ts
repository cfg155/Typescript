const someElement = document.querySelector('.foo') as HTMLInputElement
console.log('someElement',someElement)

// Adding listener
someElement.addEventListener('click',(event)=>{
    const target = event.target as HTMLInputElement
    console.log('event',target)
})