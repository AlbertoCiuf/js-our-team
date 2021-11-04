//dichiaro le variabili

//array contenente gli obj per i vari membri
const members = [
  {
   name: 'Angela Caroll',
   role: 'Chief Editor',
   photo: 'angela-caroll-chief-editor.jpg'
  },
  {
   name: 'Angela Lopez',
   role: 'Social Media Manager',
   photo: 'angela-lopez-social-media-manager.jpg'
  },
  {
   name: 'Barbara Ramos',
   role: 'Graphic Designer',
   photo: 'angela-lopez-social-media-manager.jpg'
  },
  {
   name: 'Scott Estrada',
   role: 'Developer',
   photo: 'scott-estrada-developer.jpg'
  },
  {
   name: 'Walter Gordon',
   role: 'Office Manager',
   photo: 'walter-gordon-office-manager.jpg'
  }
];

const teamContainer=document.querySelector('.container .team-container');

//ciclo che genera i vari membri richiamando la funzione apposita index volte

for (let index in members) {
  const singleMember = members[index];
  let memberName = singleMember.name;
  let memberRole = singleMember.role;
  let memberPhoto = singleMember.photo;

  generateMember(teamContainer, singleMember);

}
//console.log(teamContainer);


const newMemberButton = document.getElementById('addMemberButton');
const newMemberName = document.getElementById('name');
const newMemberRole = document.getElementById('role');
const newMemberImg = document.getElementById('image');



newMemberButton.addEventListener('click', function(){
  
  let customMemberName = newMemberName.value;
  let customMemberRole = newMemberRole.value;
  let customMemberImg = newMemberImg.value;

  const customMember = {
    name : customMemberName,
    role: customMemberRole,
    photo: customMemberImg
  };

  generateMember(teamContainer, customMember);

});







//funzione che genera i membri in base ai dati presenti nell'array di oggetti dichiarato all'inizio
function generateMember(target, singMemb) {

  const teamCard = document.createElement('div');
  teamCard.className='team-card';
  const cardImage = document.createElement('div');
  cardImage.className='card-image';
  const cardText = document.createElement('div');
  cardText.className='card-text';

  //metto img/ fisso nell'src dell'immagine per poter indicare l'immagine stessa solo tramite il nome e non il percorso relativo
  cardImage.innerHTML = `<div class="card-image"><img src="img/${singMemb.photo}" alt="" /></div>`;
  cardText.innerHTML = `<h3>${singMemb.name}</h3> <p>${singMemb.role}</p>`;

  teamCard.append(cardImage);
  teamCard.append(cardText);

  target.append(teamCard);

}