import dogs from './data'
import Dog from './Dog'
import toSwipe from './swipe'


const acceptEl = document.getElementById('accept_img')
const rejectEl = document.getElementById('reject_img')
let dogArray = ['teddy', 'bella', 'rex', 'dane', 'many', 'bernard']

function getNewDog(){
    nextDogData = dogs[dogArray.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}


const toLike = (data) => {
    const {hasBeenLiked} = data
    if(!hasBeenLiked){
        acceptEl.classList.remove('remove-accept')
        data.hasBeenLiked = true
        toSwipe(data)
    }
}

const toReject = (data) => {
    const {hasBeenLiked} = data
    if(!hasBeenLiked){
        rejectEl.classList.remove('remove-reject')
        data.hasBeenLiked = true
        toSwipe(data)
    } 
}

document.getElementById('accept_btn').addEventListener('click', () => toLike(eachDog))
document.getElementById('reject_btn').addEventListener('click', () => toReject(eachDog))

eachDog = getNewDog()
document.getElementById('profile').innerHTML = eachDog.getCharacterHtml()