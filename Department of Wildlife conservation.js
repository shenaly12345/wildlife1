//url from which the data is fetched.This initiates a network request to fetch data from the specified URL.The fetch function returns a promise obj
function fetchData(url) {
    return fetch(url)//then is a method chained to the fetch call
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();//if the response is ok, it parses the response body as JSON USING THIS CODE
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; // Re-throwing the error for further handling
        });//the catch block is used if there is an error
}


// Fetch and process JSON data for protected areas
fetch('Department of Wildlife conservation.json')
  .then(response => response.json())
  .then(data => {
    const protectedAreasContainer = document.getElementById('protected-areas');
    data.forEach(area => {
      const areaElement = document.createElement('div');
      areaElement.innerHTML = `
        <img src="${area.image}" alt="${area.name}">
        <p>${area.name}</p>
      `;
      protectedAreasContainer.appendChild(areaElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

function local() {
    fetch('Department of Wildlife conservation.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('Department of Wildlife conservationData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
        })
}
 
local()