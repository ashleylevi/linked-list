// variables
var websiteTitle = document.querySelector('.website-title');
var websiteUrl = document.querySelector('.website-url');
var enterButton = document.querySelector('.enter-button');
var readButton = document.querySelector('.unread');
var deleteButton = document.querySelector('.delete');
var readNumber = document.querySelector('.read-number');
var bookmarkNumber = document.querySelector('.bookmark-number');
var outputSection = document.querySelector('#output-section')
var readCount = 0;
var bookmarkCount = 0;


// event listeners
websiteTitle.addEventListener('keyup', enableSubmitButton);
websiteUrl.addEventListener('keyup', enableSubmitButton);
enterButton.addEventListener('click', createBookmark);
outputSection.addEventListener('click', markAsRead);
// readButton.addEventListener('click', markAsRead);



// functions
function createBookmark(event) {
 event.preventDefault();
 var bookmark = document.createElement('div');
 bookmark.innerHTML =
 `<h1>${websiteTitle.value}</h1>
 <hr />
 <h2><a href="${websiteUrl.value}" target="_blank">${websiteUrl.value}</a></h2>
 <hr />
 <button class='unread'>Read</button>
 <button class="delete">Delete</button>`
 document.getElementById('output-section').prepend(bookmark);

 var readButton = document.querySelector('.unread');
 var deleteButton = document.querySelector('.delete');

 // readButton.addEventListener('click', markAsRead);
 deleteButton.addEventListener('click', deleteBookmark);

 bookmarkCount++;
 console.log(bookmarkCount);
 bookmarkNumber.innerText = bookmarkCount;
};

function markAsRead(event) {
  console.log(event.target.className)
  if (event.target.className === 'read') {
   event.target.className = 'unread';
   readCount--;
   } 
   else if (event.target.className === 'unread') {
   event.target.className = 'read';
   readCount++;
   console.log(readCount);
   } 
   readNumber.innerText = readCount;
};

function enableSubmitButton() {
 if (websiteTitle.value.length === 0 || websiteUrl.value.length === 0) {
   enterButton.disabled = true;
 } else {
   enterButton.disabled = false;
 }
};


function deleteBookmark(event) {
   if (event.target.className === 'delete') {
   event.target.parentNode.remove();
   bookmarkCount --;
 }
 bookmarkNumber.innerText = bookmarkCount;
};

