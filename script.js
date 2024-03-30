const URL = "https://newsapi.org/v2/everything?q=";
const key = "a0ab00ef830147538f2a19f23e4716a7";
let cont = document.getElementById("container");

window.addEventListener("load" , ()=>{
    let articles = getNews("india");
    // showOnScreen(articles);
    console.log(articles);
});

document.getElementById("search-button").addEventListener("click" , ()=>{
    let input = document.getElementById("news-search").innerText;
    let newsArticles = getNews(input);
    // showOnScreen(newsArticles);
});

async function getNews(query){
    let request = await fetch(`${URL}${query}&apiKey=${key}`);
    let data = await request.json();
    return data.articles;
}

function showOnScreen(articles){
    cont.innerHTML="";
    articles.forEach((element) => {
        // createCard(element);
        console.log(element);
    });
}

function createCard(el){
    //**news card
    let card = document.createElement("div");
    //*news image
    let image = document.createElement("img");
    image.src=el.urlToImage;
    //*news content
    let content = document.createElement("div");
    //title
    let title = document.createElement("h3");
    title.innerText= el.title;
    //date and time
    let date = document.createElement("p");
    date.innerText= (getDate(el.publishedAt)+"/"+getMonth(el.publishedAt)+"/"+getFullYear(el.publishedAt));
    //author
    let author = document.createElement("p");
    author.textContent = el.author;
    //description
    let description = document.createElement("p");
    description.innerText=el.description;
    //Appending
    content.append(title,date,author,description);
    card.appendChild(image);
    card.appendChild(content);

    cont.append(card);

}