const Header = (title, date, temp) => {
  const header = document.createElement("div");
  const date1 = document.createElement("span");
  const title1 = document.createElement("h1");
  const temprature = document.createElement("span");

  header.classList.add("header");
  date1.classList.add("date");
  temprature.classList.add("temp");

  header.appendChild(date1);
  header.appendChild(title1);
  header.appendChild(temprature);

  date1.textContent = date;
  title1.textContent = title;
  temprature.textContent = temp;

  return header;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
};

const headerAppender = (selector) => {
  const item = document.querySelector(selector);
  item.appendChild(Header("Lambda Times", "October 1, 2021", "64°"));

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

export { Header, headerAppender };
