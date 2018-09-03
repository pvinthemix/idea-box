

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
        <div class="js-user-body-text" contenteditable='true'>
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
  var upVoteButton = $('.js-up-vote-button')
  upVoteButton.on('click', changeQualityUp)
  var downVoteButton = $('.js-down-vote-button')
  downVoteButton.on('click', chaneQualityDown)
  clearInputs();
};

function clearInputs() {
  titleInput.val("");
  bodyInput.val("");
}

function deleteCard(event) {
  if (event.target.className === 'js-delete-button') {
  event.target.parentNode.parentNode.remove();
 }
}


function changeQualityUp() {
  var siblings = event.target.parentElement.childNodes;
  console.log(siblings);
  for (var i = 0; i < siblings.length; i++){
    if(siblings[i].nodeName !== "#text"){
      if (siblings[i].classList.contains('js-quality')){
        if (siblings[i].innerText === 'quality: swill') {
          siblings[i].innerText = 'quality: plausible';
        } else {
          siblings[i].innerText = 'quality: genius';
        }
      }
    }
  }
}


function chaneQualityDown(){
var $downVoteButton = $(event.target)
var siblings = $downVoteButton.siblings()
  for (var=i; i<siblings.length; i++){
    if (siblings[i].contains('js-quality')) {
      if (siblings[i].innerText === 'quality: genius')
    }


}





}



// function disableButtons() {
//   if(titleInput.value === "" || bodyInput.value=== "") {
//     saveButton.disabled = true;
//     } else {
//       saveButton.disabled = false;
//     }
//   }



