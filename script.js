$(document).ready(getFromLocalStorage);


var titleInput        = $('.title-input');
var bodyInput         = $('.body-input');
var saveButton        = $('.save-button');
var searchInput       = $('.search-input');
var newIdeaContainer  = $('.new-idea-container');


saveButton.on('click', createIdeaList);

function createIdeaList() {
  event.preventDefault();
  var cardHTML = 
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
    </div>`
  addCardToPage(cardHTML);
  addToLocalStorage($(titleInput).val(), cardHTML);
  clearInputs();
};

function addCardToPage(cardHTML) {
  newIdeaContainer.prepend(cardHTML);
  var deleteButton = $('.js-delete-button');
  deleteButton.on('click', deleteCard);
  var upVoteButton = $('.js-up-vote-button')
  upVoteButton.on('click', changeQualityUp)
  var downVoteButton = $('.js-down-vote-button')
  downVoteButton.on('click', changeQualityDown)
};

function clearInputs() {
  titleInput.val("");
  bodyInput.val("");
};

function deleteCard(event) {
  if (event.target.className === 'js-delete-button') {
    event.target.parentNode.parentNode.remove();
    var $deleteButton = $(event.target);
    var userTitleElement = $deleteButton.siblings('.js-user-title-text')[0]; 
    var titleText = $(userTitleElement).text();
    deleteFromLocalStorage(titleText);
 }
};

function changeQualityUp() {
  var siblings = event.target.parentElement.childNodes;
  for (var i = 0; i < siblings.length; i++){
    if(siblings[i].nodeName !== "#text"){
      if (siblings[i].classList.contains('js-quality')){
        if (siblings[i].innerText === 'quality: swill') {
          siblings[i].innerText = 'quality: plausible';
        } else {
          siblings[i].innerText = 'quality: genius';
        };
      };
    };
  };
};

function changeQualityDown(){
  var $downVoteButton = $(event.target)
  var qualityElement = $downVoteButton.siblings('.js-quality')[0];
  var qualityText = $(qualityElement).text()
    if (qualityText === 'quality: genius') {
      $(qualityElement).text('quality: plausible');
    } else {
      $(qualityElement).text('quality: swill');
  };
};

function addToLocalStorage(title, cardHTML){
  localStorage.setItem(title, cardHTML); 
};

function deleteFromLocalStorage(title){
  localStorage.removeItem(title);
};

function getFromLocalStorage() {
  for (var i = 0; i < localStorage.length; i++) {
    var keyTitle = localStorage.key(i);
    var cardHTML = localStorage.getItem(keyTitle);
    addCardToPage(cardHTML);
  };
};