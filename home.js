// Dynamically generate the artists cards.

const artists = [
  {
    name: 'Black Coffee',
    style: 'Afro-House beats',
    desc: 'Black Coffee is an outstanding DJ who has proven a succesful brand on the international scene, is celebrating a long-held ambition after winning a Grammy award for Best Dance/Electronic Album.',
    photo: './images/artist01-bc.png',
  },
  {
    name: 'Amelie Lens',
    style: 'Techno',
    desc: 'Truly one of the most exciting export products Belgium has to offer Amelie Lens is taking the scene by storm ever since releasing her solid debut EP on the Italian Lyase Recordings. ',
    photo: './images/artist02-al.png',
  },
  {
    name: 'Richie Hawtin',
    style: 'Electro-house',
    desc: 'Hawtin is British-born and Canadian-raised. Created a unique techno sound, electro house, is very minimal, yet highly danceable.',
    photo: './images/artist03-rh.png',
  },
  {
    name: 'Carl Cox',
    style: 'Tech-house',
    desc: 'A British inspiration to the existing and upcoming Techno artists and producers, was born in 1962 and is an industry veteran that has won numerous awards.',
    photo: './images/artist04-cc.png',
  },
  {
    name: 'Solomun',
    style: 'Techno, Deep house',
    desc: 'For Solomun, music isn’t just a tool to make people dance. Music is as diverse as life itself: many different shades, moments, and memories to be made.',
    photo: './images/artist05-s.png',
  },
  {
    name: 'Charlotte de Witte',
    style: 'Acid - minimal techno',
    desc: 'Charlotte de Witte’s a Belgian born DJ whose surge on the scene has resulted in her being one of the most sought-after names in electronic music today.',
    photo: './images/artist06-cw.png',
  },
];

const cardsContainer = document.querySelector('.artist__cards');
const article = document.createElement('article');
const img = document.createElement('img');
const div = document.createElement('div');
const h3 = document.createElement('h3');
const p = document.createElement('p');

const createCard = (artist) => {
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
  artistPhoto.src = artist.photo;
  artistPhoto.setAttribute('alt', `${artist.name} Photo`);
  artistInfo.classList.add('artist__info');
  artistInfo.append(artistName, artistStyle, artistDesc);
  artistName.classList.add('artist__name');
  artistName.innerText = artist.name;
  artistStyle.classList.add('artist__style');
  artistStyle.innerText = artist.style;
  artistDesc.classList.add('artist__desc');
  artistDesc.innerText = artist.desc;
};

artists.forEach((artist) => createCard(artist));