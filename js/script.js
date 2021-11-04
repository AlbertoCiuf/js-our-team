const members = [
  {
   name: 'Angela Caroll',
   role: 'Chief Editor',
   photo: 'img/angela-caroll-chief-editor.jpg'
  },
  {
   name: 'Angela Lopez',
   role: 'Social Media Manager',
   photo: 'img/angela-lopez-social-media-manager.jpg'
  },
  {
   name: 'Barbara Ramos',
   role: 'Graphic Designer',
   photo: 'img/angela-lopez-social-media-manager.jpg'
  },
  {
   name: 'Scott Estrada',
   role: 'Developer',
   photo: 'img/scott-estrada-developer.jpg'
  },
  {
   name: 'Walter Gordon',
   role: 'Office Manager',
   photo: 'img/walter-gordon-office-manager.jpg'
  }
];

const teamContainer=document.querySelector('.container .team-container');
const teamCard = document.createElement('div');
teamCard.className='team-card';
const cardImage = document.createElement('div');
cardImage.className='card-image';
const cardText = document.createElement('div');
cardText.className='card-text';





for (let index in members) {
  const singleMember = members[index];
  let memberName = singleMember.name;
  let memberRole = singleMember.role;
  let memberPhoto = singleMember.photo;

  generateMember(teamContainer, singleMember);



}
console.log(teamContainer);



function generateMember(target, singMemb){
  cardImage.innerHTML = `<div class="card-image"><img src="${singMemb.photo}" alt="" /></div>`;
  cardText.innerHTML = `<h3>${singMemb.name}</h3> <p>${singMemb.role}</p>`;

  teamCard.append(cardImage);
  teamCard.append(cardText);

  target.append(teamCard);

}