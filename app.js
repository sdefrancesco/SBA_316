// My Favorite Dogs List!
// Add Your Favorite Dog to a separate list!
const content = document.getElementById('content')
const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const textareas = document.querySelectorAll('textarea')
const modalElement = document.getElementById('modal');
const modal = new bootstrap.Modal(modalElement);
const userFavs = document.getElementById('user-favs')
const notifyUser = document.getElementById('notify-user')

let userDogs = [];

// Function to create dog cards
const createCard = (title, body, img, parent) => {
    let col = document.createElement('div');
    let newCard = document.createElement('div');
    let cardTitle = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardImg = document.createElement('img');

    col.classList.add('col-md-3');
    newCard.classList.add('card');
    newCard.classList.add('hover');
    newCard.classList.add('shadow-lg');
    cardTitle.classList.add('card-header');
    cardBody.classList.add('card-body');

    cardImg.classList.add('card-img-top');
    cardImg.src = img;

    cardTitle.innerHTML = title;
    cardBody.innerHTML = body;

    newCard.appendChild(cardImg);
    newCard.appendChild(cardTitle);
    newCard.appendChild(cardBody);
    col.appendChild(newCard);

    // Animating card click (scale up and then return to normal size)
    newCard.addEventListener('click', () => {
        anime({
            targets: newCard,
            before: ()=> {
                newCard.classList.add('animating..')
            },
            scale: [1, 1.2],
            duration: 100,
            easing: 'easeInOutSine',
            complete: () => {
                newCard.classList.remove('animating..')
                anime({
                    targets: newCard,
                    scale: [1.2, 1],  // Return to original size
                    duration: 200,
                    easing: 'easeInOutQuad'
                });
            }
        });
    });

    parent.children[0].appendChild(col);
};

// Sample dog data
const dogs = [
    { breed: 'Pitbull', description: 'They are Ferocious and Loveable!', img: 'https://petdogowner.com/wp-content/uploads/2022/10/Photo-of-a-blue-eyed-pitbull.png' },
    { breed: 'English Bulldog', description: 'They are very cuddly, goofy, and cute.', img: 'https://th.bing.com/th/id/R.b9519144f6c398fbfaae3ff8f086b898?rik=CAjSWEwg3CpLwg&riu=http%3a%2f%2fmydoggy.rocks%2fwp-content%2fuploads%2f2014%2f09%2fEnglish-bulldog-face.jpg&ehk=xqtXFPTIWs2u1Z7sXHy3YR2gu8%2bGKNd2PsCH2HAguvA%3d&risl=&pid=ImgRaw&r=0' },
    { breed: 'French Bulldog', description: 'They are extremely adorable', img: 'https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg' },
    { breed: 'Staffordshire Terrier', description: 'Just like the Pitbull, they are lovable, kind, and mighty.', img: 'https://cdn.britannica.com/01/198001-050-AC33057E/ancestry-American-Staffordshire-Terrier-bulldogs-Staffie-mastiffs.jpg' }
];

// Loop through dog data and create cards
dogs.forEach(dog => {
    createCard(dog.breed, dog.description, dog.img, content);
});


// Handle form submission to add new dog
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = inputs[0].value;
    let dogImg = inputs[1].value;
    let description = textareas[0].value;

    if (title == '' || description == '' || dogImg == '') {
        console.log('Inputs cannot be blank');
        alert('Inputs cannot be blank!');
        return false;
    }

    let newDog = {
        breed: title,
        description: description,
        img: dogImg
    };

    userDogs.push(newDog);

    alert('Your dog was successfully added');
    alertUser('success', 'Your dog was successfully added!');
    modal.hide();

    // Clear form inputs
    inputs[0].value = ''; // Clear title input
    inputs[1].value = ''; // Clear dog image input
    textareas[0].value = ''; // Clear description textarea

    // Ensure userFavs is visible
    userFavs.classList.remove('hidden');

    // Add the new dog card to userFavs
    createCard(newDog.breed, newDog.description, newDog.img, userFavs);
});


// Alert user function
const alertUser = (type, msg) => {
    let newAlert = document.createElement('div');
    let closeBtn = document.createElement('button');
    newAlert.classList.add('alert');
    newAlert.classList.add('fade');
    newAlert.classList.add('show');
    newAlert.classList.add('alert-dismissable');
    newAlert.classList.add(`alert-${type}`);

    closeBtn.setAttribute('data-bs-dismiss', 'alert');
    closeBtn.setAttribute('aria-label', "Close");
    closeBtn.setAttribute('role', 'alert');
    closeBtn.classList.add('btn-close');

    newAlert.setAttribute('role', 'alert');
    newAlert.innerHTML = msg;
    newAlert.appendChild(closeBtn);

    notifyUser.appendChild(newAlert);
};

// BOM Event: Before Unload (Warn the user if they have unsaved changes)
window.onbeforeunload = function (e) {
    if (userDogs.length > 0) {
        // Custom message may not always appear, but it provides a helpful warning
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
    }
};

// BOM load animations once the page loads)
window.onload = function () {
    // Animating page content and elements after loading
    anime({
        targets: 'h1',
        translateX: [50, 0],
        opacity: [0, 1],
    });

    anime({
        targets: 'h3',
        translateX: [50, 0],
        opacity: [0, 1],
        delay: 1700
    });

    anime({
        targets: 'h6',
        translateX: [50, 0],
        opacity: [0, 1],
        delay: 2000
    });

    anime({
        targets: document.getElementsByTagName('button'),
        translateY: [150, 0],
        opacity: [0, 1],
        delay: 2500
    });

    anime({
        targets: 'h5',
        translateX: [50, 0],
        delay: 300,
        opacity: [0, 1],
    });

    anime({
        targets: '#content',
        translateX: [50, 0],
        delay: 500,
        opacity: [0, 1],
    });

    anime({
        targets: '.card',
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeInOutQuart',
        delay: (el, i) => i * 300
    });
};

// Theme toggle function
const toggleTheme = (e) => {
    if (e.target.checked) {
        document.querySelector('html').setAttribute('data-bs-theme', 'dark');
        e.target.nextElementSibling.children[0].innerHTML = 'Dark';
    } else {
        document.querySelector('html').setAttribute('data-bs-theme', 'light');
        e.target.nextElementSibling.children[0].innerHTML = 'Light';
    }
};
