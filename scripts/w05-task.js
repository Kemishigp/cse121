/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples'); // Assuming you have a div element with the id "temples"
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    // Your function code here
    // You can access the list of temples using the templeList parameter
  };

// Iterate through the array of temples using forEach
temples.forEach((temple) => {
    // Create an HTML <article> element
    templesElement.appendChild(article);
    
    const articleElement = document.createElement('article');
  
    // Create an HTML <h3> element and add the temple's templeName property to it
    const h3Element = document.createElement('h3');
    h3Element.textContent = temple.templeName;
  
    // Create an HTML <img> element
    const imgElement = document.createElement('img');
    imgElement.src = temple.imageUrl; // Add the imageUrl property to the src attribute
    imgElement.alt = temple.location;  // Add the location property to the alt attribute
  
    // Append the <h3> element and the <img> element to the <article> element
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
  
    // Append the <article> element to the global templesElement variable
    templesElement.appendChild(articleElement);
  });
  

/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
