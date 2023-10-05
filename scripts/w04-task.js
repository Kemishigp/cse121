/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {name:"Kemish Gomez",
photo:"images/Nevado.jpg",
favoriteFoods:["Pizza", "Sushi", "Tacos"],
hobbies:["Reading", "Running", "Piano"],
placesLived:[]
};
/* Populate Profile Object with placesLive objects */
// This occurs outside of the object definition.
myProfile.placesLived.push(
  {
    place: 'Mexico City',
    length: '13 years'
  }
);
myProfile.placesLived.push(
    {
      place: 'Rexburg, Idaho',
      length: '3 years'
    }
  );
  myProfile.placesLived.push(
    {
      place: 'Lima,Peru',
      length: '7 years'
    }
  );
/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;


/* Favorite Foods List*/
// Object -> Property -> foreach loop -> function(food): create ali element: li has contect = food: append food into fav foods
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('ul');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });


/* Places Lived DataList */


