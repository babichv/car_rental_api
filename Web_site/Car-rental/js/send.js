const requestURL = 'http://localhost:8080/cars/create'


function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)

    xhr.responseType = 'json'
    xhr.setRequestHeader( 'Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
        alert('Помилка. Такий номерний знак вже є.')
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

const form = document.getElementById('myForm');
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
      body: body.value,
        model: model.value,
        fuel: fuel.value,
        price: price.value,
    };

    console.log('v1', values);
    createCars(values);
}
// var subm =  document.getElementById('form-subm');
form.addEventListener('submit', retrieveFormValue);

function createCars(data) {
    sendRequest('Post', requestURL, data)
    .then(data => alert('Авто додано.'))
    .catch(err => console.log(err))
  } 