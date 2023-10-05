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
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


