"use strict"

// Блок з погодою
const weatherBlock = document.querySelector('.cars__info'); 

async function loadWeather(e) {
    // weatherBlock.innerHTML =`
    // <div class="weather__loading">
    //     <img src="images/5.gif" alt="loading...">
    // </div>`;

    const server = 'http://localhost:8080/cars/'
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();
    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.massege;
    }

}

function getWeather(data) {
    console.log(data);
    
    
   
    for (let i = 0; i < data.length; i++) { 
        if (data[i].id == `${localStorage.test}`) {
          localStorage.setItem('test', i);
        }
    }

    
   
    let paren = document.querySelector('#parent');
        paren.innerHTML = ('');
        let div = document.createElement('div');
        let parent = document.querySelector('#parent');
        div.className = `car__info car__update`;
        div.innerHTML = `<div id="car-id" value="${data[localStorage.test].id}"></div>
        <p>Номерний знак: <span>${data[localStorage.test].number}</span> ;</p> 
        <p>Марка авто:  <span>${data[localStorage.test].brand}</span>;
        <p>Модель авто: <span>${data[localStorage.test].model}</span>;
        <p>Тип кузова: <span>${data[localStorage.test].body}</span>;
        <p>Тип топлива: <span>${data[localStorage.test].fuel}</span>;</p>
        <p>Ціна: <span>${data[localStorage.test].price}</span>;</p> 
         
        <button class="btn-del"   onclick="jsdel(${localStorage.test}) , cardel(), sendRequest('GET', requestURL)">Видалити</button>`;

        parent.append(div);
   
        localStorage.setItem('idcar', data[localStorage.test].id);
        
    
    
 
}

if (weatherBlock) {
    loadWeather();
}







const requestURL = 'http://localhost:8080/cars/'


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
function carUpdate() {
  sendRequest('GET', requestURL)
  .then(data => createCars(data))
  .catch(err => console.log(err))
} 



function creatRequest(method, url, body = null) {
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








const form = document.getElementById('updateForm');

function retrieveFormValue(event) {
    event.preventDefault();
    const brand = form.querySelector('[name="brand"]'),
        model = form.querySelector('[name="model"]'),
        body = form.querySelector('[name="body"]'),
        number = form.querySelector('[name="number"]'),
        fuel = form.querySelector('[name="fuel"]'),
        price = form.querySelector('[name="price"]');

    const values = {
      number: number.value,
      brand: brand.value,
        model: model.value,
        body: body.value,
        fuel: fuel.value,
        price: price.value,
    };

    console.log('v1', values);
    createCars(values)
}

form.addEventListener('submit', retrieveFormValue);

function createCars(data) {
 
  const createURL = `http://localhost:8080/cars/${localStorage.idcar}/edit`
  console.log(createURL)
  const body = {
    // 'number': 'Vl25434', 
    // 'brand': '1Vladilen', 
    // 'model': '2Vladilen', 
    // 'color': '3Vladilen',
    // 'rate': 45
   }
   console.log(data)
  creatRequest('Put', createURL, data)
  .then(data => alert('Успішно змінено.'))
  .catch(err => alert('Помилка.'))
  
  loadWeather();

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

// loadWeather();
}
