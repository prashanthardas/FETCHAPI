document.getElementById('btn').addEventListener('click', () => {
    let p = fetch('https://dummyjson.com/quotes');
    p.then((resp) => {
        return resp.json();
    })
        .then((data) => {
            let quotes = data.quotes;
            quotes.forEach(element => {
                let quote = element.quote;
                let li = document.createElement('li');
                li.innerText = quote;
                document.getElementById('list1').appendChild(li);
            });
        })
})



fetch('https://dummyjson.com/products')
    .then((respo) => {
        return respo.json();
    })
    .then((info) => {
        let products = info.products;
        products.forEach(element => {
            console.log(element.title, element.description);
        });
    })











function fetcher() {
    fetch('https://dummyjson.com/comments')
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let comments = data.comments;
            comments.forEach(element => {
                let body = element.body;

                let li = document.createElement('li');
                li.innerText = body;

                document.getElementById('list2').appendChild(li);
            })
        })
}
document.getElementById('bttn').onclick = fetcher;

