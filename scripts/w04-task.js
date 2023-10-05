/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {name:"Kemish",
photo:"/Users/kemish/Documents/CODING_HW/cse121b/images/Nevado.jpg",
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
/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


