import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/DamonAllen2')
.then(resp => {
  document.querySelector('.cards').appendChild(userCard(resp.data));
})
.catch(err => console.log(err));
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'caralocke',
  'jonahjtr',
  'rickmansfield',
  'crayburn18',
  'fervelgo',
];
followersArray.forEach(users => {
  axios.get(`https://api.github.com/users/${users}`)
  .then(resp => {
    document.querySelector('.cards').appendChild(userCard(resp.data));
  })
  .catch(err => console.log(err));
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function userCard(userData) {
  let divCard = document.createElement('div');
  divCard.classList.add('card');

  let imgCard = document.createElement('img');
  imgCard.src = userData.avatar_url;

let info = document.createElement('div');
info.classList.add('card-info');

let h3Name = document.createElement('h3');
h3Name.classList.add('name');
h3Name.textContent = userData.name;

let userName = document.createElement('p');
userName.classList.add('username');
userName.textContent = userData.login;

let location = document.createElement('p');
location.textContent = userData.location;

let profile = document.createElement('p');
profile.textContent = ('Profile: ');

let profileLink = document.createElement('a');
profileLink.href = userData.html_url;
profileLink.textContent = userData.html_url;

let followers = document.createElement('p');
followers.textContent = `Followers: ${userData.followers}`;

let following = document.createElement('p');
following.textContent = `Following: ${userData.following}`;

let bio = document.createElement('p');
bio.textContent = `Bio: ${userData.bio}`;

divCard.appendChild(imgCard);
divCard.appendChild(info);
info.appendChild(h3Name);
info.appendChild(userName);
info.appendChild(location);
info.appendChild(profile);
profile.appendChild(profileLink);
info.appendChild(followers);
info.appendChild(following);
info.appendChild(bio);

return divCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
