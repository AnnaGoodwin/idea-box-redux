// querySelectors buttons
// var showStarred = document.querySelector('#show-starred-btn')
// var swillBtn = document.querySelector('#swill-btn')
// var plausibleBtn = document.querySelector('#plausible-btn')
// var geniusBtn = document.querySelector('#genius-btn')
// var addQuality = document.querySelector('#add-quality')
// var searchBtn = document.querySelector('#search-btn')
// var inactiveDlt = document.querySelector('#inactive-delete')
// var activeDlt = document.querySelector('#active-delete')
// var inactiveDwn = document.querySelector('#inactive-down')
// var activeDwn = document.querySelector('#active-down')
// var inactiveUp = document.querySelector('#inactive-up')
// var activeUp = document.querySelector('#active-up')

// querySelectors inputs
// var newIdea = new Idea(titleInput.value, bodyInput.value, star, Date.now())
// newIdea.saveToStorage(array)

// function for inseerting values from inputs to cards

//insertAdjacentHTML

//eventListeners
// document.addEventListener('click', showStarred)
// document.addEventListener('click', swillBtn)
// document.addEventListener('click', plausibleBtn)
// document.addEventListener('click', geniusBtn)
// document.addEventListener('click', addQuality)
// document.addEventListener('click', saveBtn)
// document.addEventListener('click', searchBtn)
// document.addEventListener('keyup', )
var storageArray = []
var titleInput = document.getElementById('input-title');
var bodyInput = document.getElementById('text-body');
var cardPopulator = document.getElementById('card-populate');
var activeStr = document.querySelector('#active-star')
var inactiveStr = document.querySelector('#inactive-star')
var saveBtn = document.querySelector('#save-btn')
saveBtn.addEventListener('click', saveAll);
bodyInput.addEventListener('keyup', buttonToggle);

function saveAll() {
  createIdea();
  buttonToggle();
  clearFields();
}

arrayParse()

function createIdea() {
  var newIdea = new Idea(titleInput.value, bodyInput.value, Date.now(), false, 0);
  storageArray.push(newIdea);
  newIdea.saveToStorage();
  populator(newIdea);
}

function loadPopulation() {
  for (var i = 0; i < storageArray.length; i++) {
    populator(storageArray[i]);
  }
}

function arrayParse() {
  var newArray = JSON.parse(localStorage.getItem('array')).map(function(arrayList){
    return new Idea(arrayList.title, arrayList.body, arrayList.id, arrayList.star, arrayList.quality)
  })
  console.log(newArray)
  storageArray = newArray;
  loadPopulation()
}

function populator(obj) {
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
        ${obj.title} 
      </span>
      </h4>
      <p id="card">
        <span>
        ${obj.body}
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

function buttonToggle(e) {
  e.preventDefault();
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

