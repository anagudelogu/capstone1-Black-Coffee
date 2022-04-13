const { body } = document;
const hamburger = document.querySelector('.navbar__hamburger');
const menu = document.querySelector('.navbar__links');
const closeMenu = document.querySelector('.navbar__close');
const menuLinks = document.querySelectorAll('.navbar__link');

function toggleMenu() {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  closeMenu.classList.toggle('active');
  body.classList.toggle('noScroll');
}

function linkClicked() {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
  closeMenu.classList.remove('active');
  body.classList.remove('noScroll');
}

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
menuLinks.forEach((link) => link.addEventListener('click', linkClicked));

// Dynamically generate the artists cards.

const artists = [
    {
        name: 'Black Coffee',
        style: 'Tech-house beats',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
        photo: ['./images/artist01-bc.png', 'Black Coffee photo']
    },
    {
        name: 'Amelie Lens',
        style: 'Tech-house beats',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
        photo: ['./images/artist01-bc.png', 'Black Coffee photo']
    },
    {
        name: 'Richie Hawtin',
        style: 'Tech-house beats',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
        photo: ['./images/artist01-bc.png', 'Black Coffee photo']
    },
    {
        name: 'Carl Cox',
        style: 'Tech-house beats',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
        photo: ['./images/artist01-bc.png', 'Black Coffee photo']
    },
    {
        name: 'Anastasia Kristen',
        style: 'Tech-house beats',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
        photo: ['./images/artist01-bc.png', 'Black Coffee photo']
    },
    {
        name: 'Boris Brejcha',
        style: 'Tech-house beats',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
        photo: ['./images/artist01-bc.png', 'Black Coffee photo']
    }
]


const cardsContainer = document.querySelector('.artist__cards');
const article = document.createElement('article');
const img = document.createElement('img');
const div = document.createElement('div');
const h3 = document.createElement('h3');
const p = document.createElement('p');


function createCard(artist){
    const artistCard = article.cloneNode(true);
    const artistPhoto = img.cloneNode(true);
    const artistInfo = div.cloneNode(true);
    const artistName = h3.cloneNode(true);
    const artistStyle = p.cloneNode(true);
    const artistDesc = p.cloneNode(true);

    cardsContainer.append(artistCard);
    artistCard.classList.add('artist__card');
    artistCard.append(artistPhoto, artistInfo);
    artistPhoto.classList.add('artist__image');
    artistPhoto.src = artist.photo[0];
    artistPhoto.setAttribute('alt', artist.photo[1]);
    artistInfo.classList.add('artist__info');
    artistInfo.append(artistName, artistStyle, artistDesc);
    artistName.classList.add('artist__name');
    artistName.innerText = artist.name;
    artistStyle.classList.add('artist__style');
    artistStyle.innerText = artist.style;
    artistDesc.classList.add('artist__desc');
    artistDesc.innerText = artist.desc;
}

artists.forEach(artist => createCard(artist));



