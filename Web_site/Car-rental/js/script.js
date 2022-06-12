const requestURL = 'http://localhost:8080/cars/'

// Обработка сервера
function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)

    xhr.responseType = 'json'
    xhr.setRequestHeader( 'Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    xhr.send(JSON.stringify(body))
  })
}

//Вывод авто 
sendRequest('GET', requestURL)
  .then(data => createCars(data))
  .catch(err => console.log(err))


// Функция вывода всех авто 
function createCars(data) {
    console.log(data);
    if (data.length == 0) {
        let paren = document.querySelector('#parent');
        paren.innerHTML = ('');
        let div = document.createElement('div');
        let parent = document.querySelector('#parent');
        div.className = `patients__info`;
        div.innerHTML = `<div>База данних порожня</div>`;
        parent.append(div);
    } else {
        let paren = document.querySelector('#parent');
        paren.innerHTML = ('');
        
    for (let i = 0; i < data.length; i++) { // выведет 0, затем 1, затем 2
        // let div = document.createElement('div');
        // let parent = document.querySelector('#parent');
        // div.className = `car__info car__info-${data[i].number}`;
        // div.innerHTML = `<div id="car-id" value="${data[i].id}"></div><p>Номерний знак: <span>${data[i].number}</span> ;</p> <p>Марка авто:  <span>${data[i].brand}</span>;<p>Модель авто: <span>${data[i].model}</span>;<p>Тип топлива: <span>${data[i].fuel}</span>;</p><p>Ціна: <span>${data[i].price}</span>;</p> <a href="update.html" class="btn-info"   onclick="jsFunction(${i})">Змінити</a> 
        // <button class="btn-del"   onclick="jsdel(${i}) , cardel(), sendRequest('GET', requestURL)">Видалити</button>`;

        // parent.append(div);

        let tbody = document.createElement('tr');
        let parent = document.querySelector('#parent');
      
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


function jsFunction(data) {
                        
    localStorage.setItem('test', data);
  }
  
  function jsdel(data) {
                          
      localStorage.setItem('jsdel', data);
    }
      
  
    const requestDelURL = 'http://localhost:8080/cars/'
  
  
  function sendDelRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
  
      xhr.open(method, url)
  
      xhr.responseType = 'json'
      xhr.setRequestHeader( 'Content-Type', 'application/json')
  
      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response)
        } else {
          resolve(xhr.response)
        }
      }
  
      xhr.onerror = () => {
        reject(xhr.response)
      }
  
      xhr.send(JSON.stringify(body))
    })
  }
  function delRequest(method, url, body = null) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
    
        xhr.open(method, url)
    
        xhr.responseType = 'json'
        xhr.setRequestHeader( 'Content-Type', 'application/json')
    
        xhr.onload = () => {
          if (xhr.status >= 400) {
            reject(xhr.response)
          } else {
            resolve(xhr.response)
          }
        }
    
        xhr.onerror = () => {
          reject(xhr.response)
        }
    
        xhr.send(JSON.stringify(body))
      })
    }
  function cardel() {
    sendDelRequest('GET', requestDelURL)
    .then(data => delCars(data))
    .catch(err => console.log(err))
  } 
  
  function delCars(data) {
      console.log(data[localStorage.jsdel]['id'])
      const createDelURL = `http://localhost:8080/cars/${data[localStorage.jsdel]['id']}`
    console.log(createDelURL)
    const body = {}
     console.log(data)
    delRequest('Delete', createDelURL, body)
    .then(data => alert('Успішно видалено.'))
    .catch(err => console.log(err))
    // // let parent = document.querySelector('#parent');
    sendRequest('GET', requestURL)
  .then(data => createCars(data))
  .catch(err => console.log(err))
    // document.getElementById('parent').innerHTML = '';
    // loadWeather();
  }

  