// hamburguer menu//
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close-menu-icon');

menuIcon.addEventListener('click', () => {
  menu.style.display = 'block';
  closeIcon.style.display = 'block';
  menuIcon.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
  menu.style.display = 'none';
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
});

// performers title//

const perTitle = document.getElementById('performer-title');
perTitle.innerHTML = `<div id="performer-title d-flex justify-content-center">
<h2 class="perTitle d-flex">Performers</h2>
<div class="red-line"></div>
</div>`;

// performers array//

const allArtists = [
  {
    id: 'performer 1',
    name: 'TAWA',
    from: 'Band formed in Argentina in 2013.',
    genre: 'They play traditional music with a modern approach.',
    image: './capstoneimgs/tawaimg.png',
  },
  {
    id: 'performer 2',
    name: 'Tetráfono Ensamble',
    from: 'Ensemble formed in 2018.',
    genre: 'Dedicated to research, composition and diffusion of latin-american music.',
    image: './capstoneimgs/tetrafonoensamble.jpg',
  },
  {
    id: 'performer 3',
    name: 'Changuitas (Arg.)',
    from: 'Vocal ensemble formed in 2016.',
    genre: 'They sing complex vocal arrangements of popular music a capella.',
    image: './capstoneimgs/changuitas.jpg',
  },
  {
    id: 'performer 4',
    name: 'Otros Demonios',
    from: 'Musical and theater company formed in 2012.',
    genre: 'Focused on tale-telling about national traditions.',
    image: './capstoneimgs/Tambores.jpg',
  },
  {
    id: 'performer 5',
    name: 'Sendero',
    from: 'Formed in Ecuador in 2013.',
    genre: 'They recollect history of the forgotten provinces of their homeland.',
    image: './capstoneimgs/sendero.jpg',
  },
  {
    id: 'performer 6',
    name: 'JAYAC',
    from: 'Folklore music band from the north of Ecuador.',
    genre: 'They represent ecuadorian ancestral culture from the north.',
    image: './capstoneimgs/jayac.jpg',
  },
];

// dynamic cards//

const performerContainer = document.getElementById('all-performers');

allArtists.map((performer) => {
  performerContainer.innerHTML += `<div class='card fl flex-md-row pt-3'>
 
  <img  src='${performer.image}' class='card-img-top' 
    alt='...'>
  
  <div class = "band-detail card-body col-12">
      <h4 class="band-name">${performer.name}</h4>
      <div class="band-brief-info">${performer.from} </div>
      <div class="grey-line"></div>
      <p class="artist-intro">${performer.genre}</p>
  </div>

</div>`;

  return ('');
});

// more-less button//

const buttonShow = document.getElementById('showMore');
const artistsBlock = document.getElementById('all-performers');

buttonShow.addEventListener('click', () => {
  artistsBlock.classList.toggle('more-lessExpand');
  buttonShow.classList.toggle('arrowDown');
  if (buttonShow.innerHTML === 'MORE') {
    buttonShow.innerHTML = 'LESS';
  } else {
    buttonShow.innerHTML = 'MORE';
  }
});
