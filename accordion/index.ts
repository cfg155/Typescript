const header = document.querySelector('.acc-1 .header') as HTMLInputElement
const body = document.querySelector('.acc-1 .body') as HTMLInputElement

let isCollapsed: boolean = header.getAttribute('data-collapsed') === 'true'

const bodyScrollHeight:number = body.scrollHeight
const py:number = 15

const accordionTransition = (scrollHeight:number,py:number):void => {
    // Set body height
    body.style.maxHeight = `${scrollHeight + (py*2)}px`
    body.style.padding = `${py}px 10px`
}

accordionTransition(bodyScrollHeight,py)

header.addEventListener('click',(e):void=>{
    const target = e.target as HTMLInputElement
    let isCollapsed: boolean = header.getAttribute('data-collapsed') === 'true'
    if(isCollapsed){
        target.setAttribute('data-collapsed','false')
        accordionTransition(0,0)
    }else {
        target.setAttribute('data-collapsed','true')
        accordionTransition(bodyScrollHeight,py)
    }
})