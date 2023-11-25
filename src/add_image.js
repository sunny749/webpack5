import sunny from './img/sunny.jpg'
function add_image(){
    const img=document.createElement('img')
    img.alt='sunny'
    img.width='300'
    img.src=sunny
    const body=document.querySelector('body ')
    body.appendChild(img)
}
export default add_image