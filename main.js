
let btnFoo = document.querySelector("#btnFoo");
let btnBar = document.querySelector("#btnBar");
let btnFooBar = document.querySelector("#btnFooBar");


let mainContent = document.querySelector("#mainContent");


btnFoo.addEventListener('click', () => {
    let h3 = document.createElement('h3');
    h3.textContent = 'Foo';
    mainContent.appendChild(h3);
});


btnBar.addEventListener('click', () => {
    let h3 = document.createElement('h3');
    h3.textContent = 'Bar';
    mainContent.appendChild(h3);
});


btnFooBar.addEventListener('click', () => {
    let h2 = document.createElement('h2');
    h2.textContent = 'FooBar';
    mainContent.appendChild(h2);
});
