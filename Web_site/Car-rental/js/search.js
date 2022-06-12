
async function loadWeathers(e) {
    // weatherBlock.innerHTML =`
    // <div class="weather__loading">
    //     <img src="images/5.gif" alt="loading...">
    // </div>`;
    var valbrand = document.getElementById('elem1').value;
    var valmodel = document.getElementById('elem2').value;
    var el = `http://localhost:8080/cars/search?brand=${valbrand}&model=${valmodel}`;
    console.log(el);
    const server = el;
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();
    if (response.ok) {
        getWeathers(responseResult);
    } else {
        alert('Ошибка поиска!')
    }

}

function getWeathers(data) {
    console.log(data);
    
    
    if (data.length == 0) {
        // data.forEach(element => 
        // if (data[i].id == localStorage.test) {
        //     console.log.element
        // }
        // else {
            
        // }
        //     );
        
        let paren = document.querySelector('#parentsearchs');
        paren.innerHTML = ('');
        let tbody = document.createElement('tr');
        let parent = document.querySelector('#parentsearchs');
      
        tbody.innerHTML = `

                   
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                  
                
        `;
        
        parent.append(tbody);
        alert('Нічього не знайдено.')
     } else {
        let paren = document.querySelector('#parentsearchs');
        paren.innerHTML = ('');
        
        for (let i = 0; i < data.length; i++) { // выведет 0, затем 1, затем 2
            let tbody = document.createElement('tr');
        let parent = document.querySelector('#parentsearchs');
      
        tbody.innerHTML = `

                   
                        <td>${data[i].brand}</td>
                        <td>${data[i].model}</td>
                        <td>${data[i].body}</td>
                        <td>${data[i].number}</td>
                        <td>${data[i].fuel}</td>
                        <td>${data[i].price}</td>
                        <td>  <a href="update.html"    onclick="jsFunction(${data[i].id})">Змінити</a>  </td>
                  
                
        `;
        parent.append(tbody);
     }
        
   
    }
       
}

let paren = document.querySelector('#parentsearchs');
paren.innerHTML = ('');
let tbody = document.createElement('tr');
let parent = document.querySelector('#parentsearchs');

tbody.innerHTML = `

           
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
          
        
`;

parent.append(tbody);

function jsFunction(data) {
                        
    localStorage.setItem('test', data);
  }