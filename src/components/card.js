import axios from "axios";
const Card = (article) => {
  const card1 = document.createElement("div");
  const newsHeadline = document.createElement("div");
  const newsAuthor = document.createElement("div");
  const imageCon = document.createElement("div");
  const image = document.createElement("img");
  const nameAuthor = document.createElement("span");

  card1.appendChild(newsHeadline);
  card1.appendChild(newsAuthor);
  newsAuthor.appendChild(imageCon);
  newsAuthor.appendChild(nameAuthor);
  imageCon.appendChild(image);

  card1.classList.add("card");
  newsHeadline.classList.add("headline");
  newsAuthor.classList.add("author");
  imageCon.classList.add("img-container");

  newsHeadline.textContent = article.headline;
  nameAuthor.textContent = ` By ${article.authorName}`;
  image.src = article.authorPhoto;

  card1.addEventListener("click", () => {
    console.log(article.headline);
  });

  return card1;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
};

const cardAppender = (selector) => {
  axios.get(`http://localhost:5000/api/articles`).then((resp) => {
    let articleData = resp.data.articles;
    console.log(resp);
    for (let topic in articleData) {
      console.log(topic);
      resp.data.articles[topic].forEach((item) => {
        let newCard = Card(item);
        const classSelector = document.querySelector(selector);
        classSelector.appendChild(newCard);
      });
    }
  });
};
// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//

export { Card, cardAppender };
