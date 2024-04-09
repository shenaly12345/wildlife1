function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; // Re-throwing the error for further handling
        });
}


fetch('Animals.json')
            .then(response => response.json())
            .then(data => {
                const animalsList = document.getElementById('animals-List');
                data.forEach(animal => {
                    const animalElement = document.createElement('div');
                    animalElement.innerHTML = `
                        <h2>${animal.name}</h2>
                        <p>${animal.description}</p>
                        <img src="${animal.image}" alt="${animal.name}">
                        <br><br>
                    `;
                    animalsList.appendChild(animalElement);
                });
            })
            .catch(error => console.error('Error fetching data:', error));

function local() {
        fetch('Animals.json')
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('AnimalsData', JSON.stringify(data));
                      console.log('Data stored in localStorage successfully!');
                    })
            }
             
local()