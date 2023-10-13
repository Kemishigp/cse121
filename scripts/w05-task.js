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
const getTemples = async () => {
    try {
      // Use the fetch method to retrieve temple data from the specified URL
      const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  
      // Check if the response is OK (status code 200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Convert the fetch response to a JavaScript object
      const templeData = await response.json();
  
      // Assign the temple data to the global templeList array
      templeList = templeData;
      // Call the displayTemples function and pass the templeList
      displayTemples(templeList);
    } catch (error) {
      console.error('Error fetching temple data:', error);
    }
  };
  
  // Call the getTemples function to fetch and populate temple data
  getTemples();
/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
