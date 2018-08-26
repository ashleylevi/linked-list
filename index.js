// variables
var websiteTitle = document.querySelector('.website-title');
var websiteUrl = document.querySelector('.website-url');
var enterButton = document.querySelector('.enter-button');
// var readButton = document.querySelector('.unread');
// var readButton = document.querySelector('.unread');
//   var deleteButton = document.querySelector('.delete');


// event listeners
// websiteTitle.addEventListener('keyup', enableSubmitButton);
// websiteUrl.addEventListener('keyup', enableSubmitButton);
enterButton.addEventListener('click', createBookmark);
// readButton.addEventListener('click', markAsRead);



// functions
function createBookmark(event) {
  event.preventDefault();
  var bookmark = document.createElement('div');
  bookmark.innerHTML = 
  `<h1>${websiteTitle.value}</h1> 
  <hr />
  <h2><a href="https://${websiteUrl.value}" target="_blank">${websiteUrl.value}</a></h2>
  <hr />
  <button class='unread'>Read</button>
  <button class="delete">Delete</button>`
  document.getElementById('output-section').prepend(bookmark); 
  
  var readButton = document.querySelector('.unread');
  var deleteButton = document.querySelector('.delete');
  
  readButton.addEventListener('click', markAsRead); 
  deleteButton.addEventListener('click', deleteBookmark);

  function markAsRead() {
    if (readButton.className === 'read') {
      readButton.className = 'unread';
    } else {
      readButton.className = 'read';
    } 
}

  function deleteBookmark(event) {
    if (event.target.className === 'delete') {
    event.target.parentNode.remove();
  }

}
}

function enableSubmitButton() {
  if (websiteTitle.value.length === 0 || websiteUrl.value.length === 0) {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
}



// function errorMessage() {
//   if (websiteTitle.value === '' && websiteUrl.value === '') {
//     var errorMessage = document.createElement('p');
//     errorMessage.innerHTML = '<p>Please enter a website title and a valid URL!</p>'
//     document.querySelector('.error-message').prepend(errorMessage);

//   }
// }



