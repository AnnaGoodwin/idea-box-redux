// querySelectors buttons
// var showStarred = document.querySelector('#show-starred-btn')
// var swillBtn = document.querySelector('#swill-btn')
// var plausibleBtn = document.querySelector('#plausible-btn')
// var geniusBtn = document.querySelector('#genius-btn')
// var addQuality = document.querySelector('#add-quality')
var saveBtn = document.querySelector('#save-btn')
// var searchBtn = document.querySelector('#search-btn')
var inactiveStr = document.querySelector('#inactive-star')
var activeStr = document.querySelector('#active-star')
// var inactiveDlt = document.querySelector('#inactive-delete')
// var activeDlt = document.querySelector('#active-delete')
// var inactiveDwn = document.querySelector('#inactive-down')
// var activeDwn = document.querySelector('#active-down')
// var inactiveUp = document.querySelector('#inactive-up')
// var activeUp = document.querySelector('#active-up')

var cardPopulator = document.getElementById('card-populate');
// querySelectors inputs

// var newIdea = new Idea(titleInput.value, bodyInput.value, star, Date.now())
// newIdea.saveToStorage(array)

// function for inseerting values from inputs to cards

//insertAdjacentHTML
var titleInput = document.getElementById('input-title');
var bodyInput = document.getElementById('text-body');

//eventListeners
// document.addEventListener('click', showStarred)
// document.addEventListener('click', swillBtn)
// document.addEventListener('click', plausibleBtn)
// document.addEventListener('click', geniusBtn)
// document.addEventListener('click', addQuality)
// document.addEventListener('click', saveBtn)
// document.addEventListener('click', searchBtn)
// document.addEventListener('keyup', )
saveBtn.addEventListener('click', saveAll);
bodyInput.addEventListener('keyup', buttonToggle);

function saveAll() {
  var newIdea = new Idea(titleInput.value, bodyInput.value, Date.now(), )
  console.log(newIdea)
  newIdea.saveToStorage()
  populator();
  buttonToggle();
  clearFields();
}


function populator() {
  event.preventDefault();
  cardPopulator.insertAdjacentHTML('afterbegin', ` <article id="idea-card">
      <header>
       <div class="star-container css-final-styles">
        <img src="Images/star.svg" alt="" class="inactive-button-star" id="inactive-star">
        <img src="Images/star-active.svg" alt="" class="active-button-star" id="active-star">
       </div>
       <div class="delete-container">
          <img src="Images/delete.svg" alt="" class="inactive-button-x" id="inactive-delete">
          <img src="Images/delete-active.svg" alt=""class="active-button-x" id="active-delete">
        </div>
      </header>
      <h4>
      <span id="idea-title">
        ${titleInput.value}
      </span>
      </h4>
      <p id="card">
        <span>
        ${bodyInput.value}
        </span>
      </p>
      <footer>
        <div class="upvote-container css-final-styles">
          <img src="Images/upvote.svg" class="inactive-button-upvote" id="inactive-up" alt="">
          <img src="Images/upvote-active.svg" class="active-button-upvote" id="active-up" alt="">
        </div>
        <p class="quality-text">
          Quality:
          <span>
            Swill
          </span>
        </p>
          <div class="downvote-container">
            <img src="Images/downvote.svg" class="inactive-button-downvote" id="inactive-down" alt="">
            <img src="Images/downvote-active.svg" class="active-button-downvote" id="active-down" alt="">
          </div>
      </footer>
    </article> `)
};

function buttonToggle() {
  if(titleInput.value === '' || bodyInput.value === '') {
    saveBtn.disabled = true;
  } else {
    saveBtn.disabled = false;
  }
};

function clearFields() {
  titleInput.value = '';
  bodyInput.value = '';
  disableSaveButton();
}

function disableSaveButton() {
  saveBtn.disabled = true;
}

