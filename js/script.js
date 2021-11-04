//dichiaro le variabili

//array contenente gli obj per i vari membri
const members = [
  {
   name: 'Dwight Schrute',
   role: 'Assistant to the Regional Manager',
   photo: 'Dwight_Schrute.jpeg'
  },
  {
   name: 'Jim Halpert',
   role: 'Salesman',
   photo: 'Jim-halpert.jpeg'
  },
  {
   name: 'Kevin Malone',
   role: 'Accountant',
   photo: 'Kevin.jpeg'
  },
  {
   name: 'Pam Beesley',
   role: 'Office Administrator',
   photo: 'Pam_Beesley.jpeg'
  },
  {
   name: 'Stanley Hudson',
   role: 'Salesman',
   photo: 'stanley.jpeg'
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

const newMemberButton = document.getElementById('addMemberButton');
const newMemberName = document.getElementById('name');
const newMemberRole = document.getElementById('role');
const newMemberImg = document.getElementById('image');


//funzione al click del pulsante "Add" del form che genera nuovo membro custom
newMemberButton.addEventListener('click', function(){
  let customMemberName = newMemberName.value;
  let customMemberRole = newMemberRole.value;
  let customMemberImg = newMemberImg.value;

  //controllo validità dati inseriti nel form
  if (
    (customMemberName !=='') && (customMemberRole !=='') && (customMemberImg !=='')
  ) {

    const customMember = {
      name : customMemberName,
      role: customMemberRole,
      photo: customMemberImg
    };
  
    generateMember(teamContainer, customMember);
    members.push(customMember);

    //log per verificare il corretto inserimento del nuovo membro
    // console.log(members);
  } else {
    alert('Inserisci dei valori validi nel form e riprova.');
  }

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