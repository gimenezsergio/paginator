let getData = (page, limit) => {
    let url = `https://jsonplaceholder.typicode.com/posts/?_page=${page}&_limit=20`
    console.log(url)
    let data = fetch(url)
        .then(response => response.json())
        .then(json => templateHtml(json))
    console.log(data)
}

let templateHtml = (response) => {
    // document.querySelector("#results").innerHTML = "No se encontraron resultados"
    if (response.length > 0) {
        // document.querySelector("#results").innerHTML = "Hay resultados"
        let table = `
                 
              ${response.map(data =>
            `
                  <tr>
                      <td>${data.userId}</td>
                      <td>${data.id}</td>
                      <td>${data.title}</td>
                  </tr>`

        ).join('')}
                  
             
  `;

        document.querySelector("#results").innerHTML += table;
    }
}

// getData(1);