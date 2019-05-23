// querySelectors buttons
var showStarred = document.querySelector('#show-starred-btn')
var swillBtn = document.querySelector('#swill-btn')
var plausibleBtn = document.querySelector('#plausible-btn')
var geniusBtn = document.querySelector('#genius-btn')
var addQuality = document.querySelector('#add-quality')
var saveBtn = document.querySelector('#save-btn')
var searchBtn = document.querySelector('#search-btn')
var inactiveStr = document.querySelector('#inactive-star')
var activeStr = document.querySelector('#active-star')
var inactiveDlt = document.querySelector('#inactive-delete')
var activeDlt = document.querySelector('#active-delete')
var inactiveDwn = document.querySelector('#inactive-down')
var activeDwn = document.querySelector('#active-down')
var inactiveUp = document.querySelector('#inactive-up')
var activeUp = document.querySelector('#active-up')
// querySelectors inputs


var newIdea = new Idea(titleInput.value, bodyInput.value, star, Date.now())
newIdea.saveToStorage(array)

// function for inseerting values from inputs to cards

//insertAdjacentHTML



//eventListeners
document.addEventListener('click', showStarred)
document.addEventListener('click', swillBtn)
document.addEventListener('click', plausibleBtn)
document.addEventListener('click', geniusBtn)
document.addEventListener('click', addQuality)
document.addEventListener('click', saveBtn)
document.addEventListener('click', searchBtn)
document.addEventListener('keyup', )
