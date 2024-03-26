let cnt = document.getElementById("content");
let athr = document.getElementById("author");
let newQuote = document.getElementById("newQuote");
const url_data = "https://api.quotable.io/random";
fetch(url_data)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.author);
    console.log(data.content);
    cnt.innerText = data.content;
    athr.innerText = data.author;
  })
  .catch((e) => {
    console.log("error =", e);
  });
function newCode() {
  const url_data = "https://api.quotable.io/random";
  fetch(url_data)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.author);
      console.log(data.content);
      cnt.innerText = data.content;
      athr.innerText = data.author;
    })
    .catch((e) => {
      console.log("error =", e);
    });
}

function Tweet() {
  window.open(
    (href =
      "https://twitter.com/intent/tweet?text=" + cnt.innerText + "---- by ") +
      athr.innerText
  );
}
// newQuote.addEventListener("click", () => {
//   const url_data = "https://api.quotable.io/random";
//   fetch(url_data)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log(data.author);
//       console.log(data.content);
//       cnt.innerText = data.content;
//       athr.innerText = data.author;
//     })
//     .catch((e) => {
//       console.log("error =", e);
//     });
// });
