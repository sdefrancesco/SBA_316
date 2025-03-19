
// My Favorite Dogs List!
// Add Your Favorite Dog to a seperate list!
const content = document.getElementById('content')

const createCard = (title, body, img) => {
    let col = document.createElement('div')
    let newCard = document.createElement('div')
    let cardTitle = document.createElement('div')
    let cardBody = document.createElement('div')
    let cardImg = document.createElement('img')

    col.classList.add('col-md-3')
    newCard.classList.add('card')
    cardTitle.classList.add('card-header')
    cardBody.classList.add('card-body')

    cardImg.classList.add('card-img-top')
    cardImg.src = img


    cardTitle.innerHTML = title
    cardBody.innerHTML = body

    newCard.appendChild(cardImg)
    newCard.appendChild(cardTitle)
    newCard.appendChild(cardBody)
    col.appendChild(newCard)

    content.children[0].appendChild(col)
}

const dogs = [
    {breed: 'Pitbull', description: 'They are Ferocious and Loveable!', img:'https://petdogowner.com/wp-content/uploads/2022/10/Photo-of-a-blue-eyed-pitbull.png'},
    {breed: 'English Bulldog', description: 'They are very cuddaleable, goofy, and cute.', img: 'https://th.bing.com/th/id/R.b9519144f6c398fbfaae3ff8f086b898?rik=CAjSWEwg3CpLwg&riu=http%3a%2f%2fmydoggy.rocks%2fwp-content%2fuploads%2f2014%2f09%2fEnglish-bulldog-face.jpg&ehk=xqtXFPTIWs2u1Z7sXHy3YR2gu8%2bGKNd2PsCH2HAguvA%3d&risl=&pid=ImgRaw&r=0'},
    {breed: 'French Bulldog',description: 'They are extremely adorable', img: 'https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg'},
    {breed: 'Staffordshire Terrier',description: 'Just like the Pitbull, they are loveable, king, and mighty.', img: 'https://cdn.britannica.com/01/198001-050-AC33057E/ancestry-American-Staffordshire-Terrier-bulldogs-Staffie-mastiffs.jpg'}
]

dogs.forEach((dog) => {
    console.log(dog)
    createCard(dog.breed, dog.description, dog.img)
})