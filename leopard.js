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

fetchData('leopard.json')
      .then(response => response.json())
      .then(data => {
        const leopardFacts = data.leopardFacts;
        const threats = data.threats;
  
        // Populate leopard facts section
        const leopardFactsSection = document.querySelector('.leopard-facts');
        leopardFacts.forEach(fact => {
          const factElement = document.createElement('div');
          factElement.innerHTML = `
            <h2>${fact.title}</h2>
            <p>${fact.description}</p>
          `;
          leopardFactsSection.appendChild(factElement);
        });
  
        // Populate threats section
        const threatsSection = document.querySelector('.threats');
        threats.forEach(threat => {
          const threatElement = document.createElement('div');
          threatElement.innerHTML = `
            <h3>${threat.title}</h3>
            <p>${threat.description}</p>
          `;
          threatsSection.appendChild(threatElement);
        });
      })
      .catch(error => console.error('Error fetching data:', error));

      function local() {
        fetch('leopard.json')
            .then(res => res.json())
            .then(data => {
              localStorage.setItem('SriLankan leopardData', JSON.stringify(data));
              console.log('Data stored in localStorage successfully!');
            })
    }
     
    local()