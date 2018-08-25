// variables
var websiteTitle = document.querySelector('.website-title');
var websiteUrl = document.querySelector('.website-url');
var enterButton = document.querySelector('.enter-button', createBookmark);

console.log(websiteTitle);
console.log(websiteUrl);
console.log(enterButton);

// event listeners
// websiteTitle.addEventListener('keyup', )
// websiteUrl.addEventListener('keyup', )
enterButton.addEventListener('click', createBookmark)

// functions
function createBookmark(event) {
  event.preventDefault();
  var bookmark = document.createElement('div');
  bookmark.innerHTML = `<h1 >${websiteTitle.value}</h1> 
                        <hr />
                        <h2><a href="${websiteUrl.value}">${websiteUrl.value}</a></h2>
                        <hr />
                        <button class="read">Read</button>
                        <button class="delete">Delete</button>`
  document.getElementById('output-section').appendChild(bookmark);  
}

console.log(createBookmark);