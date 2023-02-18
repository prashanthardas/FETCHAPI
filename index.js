/* 
function show() {
    fetch('https://dummyjson.com/products')
        .then((respo) => {
            return respo.json();
        })
        .then((info) => {
            let products = info.products;
            products.forEach(element => {
                let title = (element.title);
                let thumbnail = (element.thumbnail);

                let li = document.createElement('li');
                li.innerText = (title);

                let img = document.createElement('img');
                img.innertext = (thumbnail);

                document.getElementById('li').appendChild(li);
                document.getElementById('img').appendChild(img);
            });
        })
}
document.getElementById('btn').onclick = show;

 */


let ul = document.querySelector('ul');
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        let products = data.products;
        products.forEach(product => {
            let li = document.createElement('li');
            li.innerText = product.title;
            let img = document.createElement('img');
            img.src = product.thumbnail;
            let span = document.createElement('span');
            span.innerText = product.description;
            img.onclick = () => {
                li.appendChild(span)
            }
            ul.appendChild(li);
            ul.appendChild(img)
        })
    })



































































































