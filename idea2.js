class Idea {
  constructor (title, body, id, star, quality) {
    this.title = title;
    this.body = body;
    this.id = id || Date.now();
    this.star = false;
    this.quality = 0;
  }

  saveToStorage() {
    // var ideasArray = JSON.stringify(newIdeas)
    localStorage.setItem('array', JSON.stringify(storageArray));
  }
  
  deleteFromStorage(index) {
    storageArray.splice(index, 1, );
    localStorage.setItem('array', JSON.stringify(storageArray));
    if(storageArray.length === 0) {
      localStorage.clear();
    }
  }

  updateIdea(newIdea) {

  }

  updateQuality(newIdea) {

  }
  
  updateContent() {
    
  }
}


// // from main.js
//   var newIdea = new Idea(input1.value, input2.value, Date.now())
//   array.push(newIdea)
//   saveToStorage(array)
//   newIdea.title
