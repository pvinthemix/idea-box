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
      <div class="js-user-title">
        <h2>${titleInput.val()}</h2>
        <button class ="js-delete-button"></button>
      </div>
      <div class="js-user-body">
        <p>${bodyInput.val()}</p>
      </div>
      <div>
        <button class="js-up-vote-button"></button>
        <button class="js-down-vote-button"></button>
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



