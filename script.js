var titleInput        = $('.title-input');
var bodyInput         = $('.body-input');
var saveButton        = $('.save-button');
var searchInput       = $('.search-input');
var newIdeaContainer  = $('.new-idea-container');




saveButton.on('click', createIdeaList);



function createIdeaList() {
  event.preventDefault();
  newIdeaContainer.prepend(
    `<div class="single-idea-container">
      <div class="user-title">
        <h2>${titleInput.val()}</h2>
      </div>
      <div class="user-body">
        <p>${bodyInput.val()}</p>
      </div>
      <div>
        <button>delete</button>
        <button>hello</button>
      </div>
    </div>`)
};



// $(".save-button").on("click",function(e){
//   event.preventDefault();
//   var title = $('.title-input').val();
//   var body  = $('body-input').val();

// }
// );

// $('new-idea-container').prepend(`<section>



//   </section>`)
