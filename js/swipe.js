const acceptEl = document.getElementById('accept_img')
const rejectEl = document.getElementById('reject_img')

const toSwipe = (data) => {
    const {hasBeenSwiped} = data
    if(dogArray.length > 0 && !hasBeenSwiped){
        setTimeout(() => {
            eachDog = getNewDog()
            document.getElementById('profile').innerHTML = eachDog.getCharacterHtml()
            rejectEl.classList.add('remove-reject')
            acceptEl.classList.add('remove-accept')
        }, 2000)
        data.hasBeenSwiped = true
    }
    else{
        setTimeout(() => {
            document.body.classList.add('end-message')
            document.body.innerHTML = `<p>Thanks for reviewing all the dogs, all reviews are well welcomed <br><br><br> Get more code on my github profile <span><b>@Samdek</b></span>. All corrections are welcome too.... <br><br><br><br>Enjoy!!!</p>`
        }, 4000)
    }
}
export default toSwipe()