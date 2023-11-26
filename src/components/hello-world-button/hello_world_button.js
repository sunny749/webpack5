import './hello_world_button.scss' 
class Hello_world_button{
    buttonCssClass='hello_world_button'
    render(){
        const button=document.createElement('button')
        button.innerHTML='Hello World'
        
        const body=document.querySelector('body')
        button.onclick=function(){
            const p=document.createElement('p')
            p.innerHTML='Hello World is clicked'
            p.classList.add('hello_world_text')
            body.appendChild(p)
        }
        button.classList.add(this.buttonCssClass)
        body.appendChild(button)
    }
}
export default Hello_world_button