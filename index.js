fetch('index.json')
    .then(response => response.json())//converts to JSON format
    .then(data => {//iterates through each item in the JSON data and creates HTML elements
        const wildlifeContainer = document.getElementById('wildlife-container');//append HTML elements to a container
        // Iterate through each item in the JSON data
        data.forEach(animal => {
            // Create HTML elements to display each item
            const animalElement = document.createElement('div');
            animalElement.innerHTML = `
                <h2>${animal.name}</h2> 
                <p><strong>Habitat:</strong> ${animal.habitat}</p> 
                <p><strong>Conservation Status:</strong> ${animal.conservationStatus}</p> 
            `;
            // Append the HTML elements to the container
            wildlifeContainer.appendChild(animalElement); //so animalelement appears a spart of the content displayed within that container
        });
    })
    .catch(error => console.error('Error fetching data:', error));

    function local() {
        fetch('index.json')
            .then(res => res.json())//converts to JSON format
            .then(data => {
              localStorage.setItem('IndexData', JSON.stringify(data));
              console.log('Data stored in localStorage successfully!');
            }) //receives the fetched JSON data and stores in local storage
    }
     
    local() //triggers the fetch operation and stores the data in the local storage