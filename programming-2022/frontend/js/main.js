const items = document.getElementsByClassName('item');
const paras = document.getElementsByTagName('p');
const itemDescs = document.getElementsByClassName('item-desc');

const getButton = document.getElementById('get-button');

let movies = [];

const HOST = 'http://127.0.0.1:80';

const getMovies = async () => {
  const result = await fetch(`${HOST}/products`);
  const json = await result.json();
  movies = json;
  return json;
}

for (let i = 0; i < itemDescs.length; i++) {
  itemDescs[i].addEventListener('click', () => {
    let defaultText = itemDescs[i].innerHTML;
    itemDescs[i].innerHTML = movies[i].price;
    setTimeout(() => {
      itemDescs[i].innerHTML = defaultText;
    }, 1000);
  })
}

const nav = document.getElementsByTagName('nav')[0];
const authorizeButton = nav.getElementsByTagName('li')[4];
const outerForm = document.getElementsByClassName('outer')[0];
const closeButton = document.getElementsByClassName('close-button')[0];
const blockBackground = document.getElementsByClassName('block-background')[0];
blockBackground.style.height = document.body.offsetHeight + 'px';

authorizeButton.addEventListener('click', () => {
  blockBackground.style.display = 'block';
  outerForm.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  blockBackground.style.display = 'none';
  outerForm.style.display = 'none';
});

const tabs = document.getElementsByClassName('tab');
const vhodTab = tabs[0];
const regTab = tabs[1];
const vhodForm = document.getElementById('vhod-form');
const regForm = document.getElementById('reg-form');

const vhodFormLoginField = vhodForm.getElementsByTagName('input')[0];
const vhodFormPassField = vhodForm.getElementsByTagName('input')[1];
let vhodFormLoginFieldText = '';
let vhodFormPassFieldText = '';

const regFormLoginField = regForm.getElementsByTagName('input')[0];
const regFormPassField = regForm.getElementsByTagName('input')[1];
let regFormLoginFieldText = '';
let regFormPassFieldText = '';

function tabClickListener(tab, secondTab, form, secondForm) {
  tab.addEventListener('click', () => {
    if (secondTab.classList.contains('active-tab')) {
      secondTab.classList.remove('active-tab');
      tab.classList.add('active-tab');
      form.style.display = 'none';
      secondForm.style.display = 'flex';
    }
  })
}

tabClickListener(vhodTab, regTab, regForm, vhodForm);
tabClickListener(regTab, vhodTab, vhodForm, regForm);

const vhodButton = document.getElementById('vhod-button');
const regButton = document.getElementById('reg-button');

/*vhodButton*/

regButton.addEventListener('click', async () => {
  regFormLoginFieldText = regFormLoginField.value;
  regFormPassFieldText = regFormPassField.value;
  alert(regFormLoginFieldText + ' ' + regFormPassFieldText);
  const details = {
    login: regFormLoginFieldText,
    pass: regFormPassFieldText,
  };

  let formBody = [];
  for (const property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  const result = await fetch(`${HOST}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  });

  const data = await result.text();

  const result1 = await fetch(`${HOST}/users`);
  const json1 = await result1.json();

});