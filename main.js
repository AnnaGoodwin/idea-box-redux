// querySelectors buttons
// var showStarred = document.querySelector('#show-starred-btn')
// var swillBtn = document.querySelector('#swill-btn')
// var plausibleBtn = document.querySelector('#plausible-btn')
// var geniusBtn = document.querySelector('#genius-btn')
// var addQuality = document.querySelector('#add-quality')
// var searchBtn = document.querySelector('#search-btn')
// var inactiveDlt = document.querySelector('#inactive-delete')
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
var deleteAct = document.querySelector('.delete-container');
var titleInput = document.getElementById('input-title');
var bodyInput = document.getElementById('text-body');
var cardPopulator = document.getElementById('card-populate');
var activeStr = document.querySelector('#active-star');
var inactiveStr = document.querySelector('#inactive-star')
var saveBtn = document.querySelector('#save-btn');
var mainContainer = document.querySelector('main');
var cardInst = document.querySelector('#idea-card');
var removeContainer = document.querySelector('#delete-box')
// debugger;
mainContainer.addEventListener('click', mainContainerFunctionality);
saveBtn.addEventListener('click', saveAll);
bodyInput.addEventListener('keyup', buttonToggle);
// removeContainer.addEventListener('click', deleteCard);

function mainContainerFunctionality() {
  getId(e);
  getIndex();
  updateStar(e);
  deleteCard();
}

function saveAll() {
  createIdea();
  buttonToggle();
  clearFields();
}
  arrayParse();
  ideaPrompter();

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
  if(localStorage.length === 0){
    return
  } else {
  var newArray = JSON.parse(localStorage.getItem('array')).map(function(arrayList){
    return new Idea(arrayList.title, arrayList.body, arrayList.id, arrayList.star, arrayList.quality)
  })
  console.log(newArray)
  storageArray = newArray;
  loadPopulation()
  }
}

function populator(obj) {
  cardPopulator.insertAdjacentHTML('afterbegin', ` <article id="idea-card" data-id= ${obj.id}>
      <header>
       <div class="star-container css-final-styles">
        <img src="Images/star.svg" alt="" class="inactive-button-star" id="inactive-star">
        <img src="Images/star-active.svg" alt="" class="active-button-star" id="active-star">
       </div>
       <div id="delete-box" class="delete-container">
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


  function ideaPrompter() {
   if(localStorage.length === 0 && storageArray.length === 0) {
    cardPopulator.insertAdjacentHTML('afterbegin', `<p class='prompt-idea'> Please have an idea! </p>`)}
  }

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

function getId(e) {
  // console.log('hey')
 
    var ideaId = e.target.closest('#idea-card').getAttribute('data-id')
    var targetId = ideaId
    // console.log(ideaId)
    // console.log(targetId)
    // console.log(e.target)
  // indexId(e, targetId)
}

function getIndex(e) {
  // console.log(targetId)
  var ideaId = e.target.closest('#idea-card').getAttribute('data-id')
  console.log(ideaId)
  var test = storageArray.findIndex(function(ideaObj){
  return ideaObj.id == parseInt(ideaId)
    });
  return test
  }

function deleteCard(e) {
  if(e.target.className === 'inactive-button-x') {
  var id = getId(e);
  var index = getIndex(e);
  console.log(index)
  storageArray[index].deleteFromStorage(index)
  e.target.closest('#idea-card').remove();
  ideaPrompter();
    }
  }

function updateStar(e) {
  if(e.target.closest('inactive-button-star')){
    var id = getId(e);
    var index = getIndex(e);
    var activeStar = 'Images/star-active.svg';
    var inactiveStar = 'Images/star.svg';
    var transition = document.querySelector(`#idea-card[data-id=${id}] #inactive-button-star`);
    transition.src = activeStar;
    if(storageArray[index].star === false) {
      transiton.src = inactiveStar;
    } else {
      transition = activeStar;
    }
  }
}

//  function updateStarBtn(event) {
//   if (event.target.closest('#white-star-img')) {  
//   var cardId = getUniqueId(event);
//   var cardIndex = getCardIndex(cardId);
//   var yellowStar = 'images/star-active.svg'; 
//   var oldStar = document.querySelector(`.card[data-id="${cardId}"] #white-star-img`);
//   oldStar.src = yellowStar
//   ideas[cardIndex].updateStar();
//   if (ideas[cardIndex].star === false) {
//     var whiteStar = 'images/star.svg'
//     oldStar.src = whiteStar;
//     } else {
//       oldStar.src = yellowStar;
//     }
//   }
// }

