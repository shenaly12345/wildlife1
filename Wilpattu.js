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

fetch('Wilpattu.json')
.then(response => response.json())
.then(data => {
    document.getElementById('historySection').innerHTML = `<p>${data.history}</p>`;
    document.getElementById('wildlifeSection').innerHTML = `<p>${data.wildlife}</p>`;
    document.getElementById('locationSection').innerHTML = `<p>${data.location}</p>`;
    document.getElementById('attireSection').innerHTML = `<p>${data.attire}</p>`;
})
.catch(error => console.error('Error fetching data:', error));

function local() {
    fetch('Wilpattu.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('WilpattuData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
        })
}
 
local()