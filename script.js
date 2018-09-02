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
        <button class ="js-delete-svg"></button>
      </div>
      <div class="js-user-body">
        <p>${bodyInput.val()}</p>
      </div>
      <div>
        <button class="js-up-vote-button"></button>
        <button class="js-down-vote-button"></button>
      </div>
    </div>`)
    clearInputs();
};



function clearInputs(){
titleInput.val("");
bodyInput.val("");
}




