class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getCharacterHtml() {
    const {name, avatar, age, bio} = this 
        return `
            <img src="${avatar}" alt="dog 1" class="dog_image">
            <div class="dog_profile">
            <h4>${name}, ${age}</h4>
            <p>${bio}</p>
            </div> `
    }
}

export default Dog