

var titleInput        = $('.title-input');
var bodyInput         = $('.body-input');
var saveButton        = $('.save-button');
var searchInput       = $('.search-input');
var newIdeaContainer  = $('.new-idea-container');

saveButton.on('click', createIdeaList);

function createIdeaList() {
  event.preventDefault();
  newIdeaContainer.prepend(
    `<div class="js-single-idea-container">

      <div class="js-user-title-container">
        <h2 class= "js-user-title-text">${titleInput.val()}</h2>
        <button class ="js-delete-button"></button>
      </div>

      <div class="js-user-body-container">
        <p class="js-user-body-text">${bodyInput.val()}</p>
        <br>
        <button class="js-up-vote-button"></button>
        <button class="js-down-vote-button"></button>
        <br>
        <p class="js-quality">quality: swill</p>
      </div>

      <hr>
    </div>`)
  var deleteButton = $('.js-delete-button');
  deleteButton.on('click', deleteCard);
  clearInputs();
};

function clearInputs() {
  titleInput.val("");
  bodyInput.val("");
}

function deleteCard(event) {
  console.log('hello');
  if (event.target.className === 'js-delete-button') {
  event.target.parentNode.parentNode.remove();
 }
}

// function disableButtons() {
//   if(titleInput.value === "" || bodyInput.value=== "") {
//     saveButton.disabled = true;
//     } else {
//       saveButton.disabled = false;
//     }
//   }



