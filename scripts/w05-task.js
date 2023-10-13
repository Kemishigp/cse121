/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples'); // Assuming you have a div element with the id "temples"
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const articleElement = document.createElement('article');
      
      const h3Element = document.createElement('h3');
      h3Element.textContent = temple.templeName;
      
      const imgElement = document.createElement('img');
      imgElement.src = temple.imageUrl;
      imgElement.alt = temple.location;
      
      articleElement.appendChild(h3Element);
      articleElement.appendChild(imgElement);
      
      templesElement.appendChild(articleElement);
    });
  };
  
  // Call the function with the array of temples
  displayTemples(temples);
  
  

/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
