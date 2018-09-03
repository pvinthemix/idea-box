

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
        <div class="js-user-body-text">
          <p>${bodyInput.val()}</p>
        </div>
        <div class="js-quality-control">
          <button class="js-up-vote-button"></button>
          <button class="js-down-vote-button"></button>
          <p class="js-quality">quality: swill</p>
         </div> 
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



