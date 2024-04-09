

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


// Fetch data once
fetchData('intro.json')
.then(response=> response.json())
    .then(data => {
        const udawalaweDataElement = document.getElementById('udawalawe-data');
        const minneriyaDataElement = document.getElementById('minneriya-data');
        const sinharajaDataElement = document.getElementById('sinharaja-data');
        const hortanDataElement = document.getElementById('hortan-data');

        
        udawalaweDataElement.innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.description}</p>
        `;

        
        minneriyaDataElement.innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.description}</p>
        `;

        
        sinharajaDataElement.innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.description}</p>
        `;

        
        hortanDataElement.innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.description}</p>
        `;
    })
    .catch(error => {
        // Handle error for fetch
        console.error('Error fetching data:', error);
    });
    function local() {
        fetch('intro.json')
            .then(res => res.json())
            .then(data => {
              localStorage.setItem('Sri Lankan Wildlife introductionData', JSON.stringify(data));
              console.log('Data stored in localStorage successfully!');
            })
    }
     
    local()