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
<h1 class="perTitle d-flex">Performers</h1>
<div class="red-line"></div>
</div>`;

// performers array//

const allArtists = [
  {
    id: 'performer 1',
    name: 'TAWA',
    from: 'Ecuadorian band formed in Argentina in 2013.',
    genre: 'TAWAs artistic persuit has led them to represent Ecuador in international festivals playing traditional music with a modern approach.',
    image: './capstoneimgs/tawaimg.png',
  },
  {
    id: 'performer 2',
    name: 'Tetráfono Ensamble',
    from: 'Instrumental ensemble formed in Ecuador in 2018.',
    genre: 'Conformed by professionals dedicated to music research, composition and diffusion of latin-american music.',
    image: './capstoneimgs/tetrafonoensamble.jpg',
  },
  {
    id: 'performer 3',
    name: 'Changuitas (Arg.)',
    from: 'Female vocal ensemble formed in Argentina in 2016.',
    genre: 'Singing a capella and accompanied by percussion, Changuitas sing complex vocal arrangements of popular music from all the southern continent.',
    image: './capstoneimgs/changuitas.jpg',
  },
  {
    id: 'performer 4',
    name: 'Tambores y Otros Demonios',
    from: 'Musical and theater company. Formed in Ecuador in 2012.',
    genre: 'Tambores y Otros Demonios is a musical company focused on tale-telling about national traditions through theater and music.',
    image: './capstoneimgs/Tambores.jpg',
  },
  {
    id: 'performer 5',
    name: 'Grupo Sendero',
    from: 'Formed in Ecuador in 2013.',
    genre: 'A different approach to music from the coast of Ecuador. Their music recollects history of the forgotten provinces of their homeland.',
    image: './capstoneimgs/sendero.jpg',
  },
  {
    id: 'performer 6',
    name: 'JAYAC',
    from: 'Folklore music band from the north of Ecuador.',
    genre: 'From Imbabura province Jayac travels internationally representing ecuadorian ancestral culture and folklore from the north.',
    image: './capstoneimgs/jayac.jpg',
  },
];

// dynamic cards//

const performerContainer = document.getElementById('all-performers');

// allArtists.map((performer) => {
//   performerContainer.innerHTML += `
//     <div class="performer-card d-flex" id="${performer.id}">
//           <div class="checkerbg">
//             <img src="${performer.image}" alt="Changuitas singers in red"  class="artist-img">
//           </div>
//           <div class = band-detail>
//               <h4 class="band-name">${performer.name}</h4>
//               <div class="band-brief-info">${performer.from}</div>
//               <div class="grey-line"></div>
//               <p class="artist-intro">${performer.genre}</p>
//           </div>
//       </div>`;

//   return ('');
// });
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
