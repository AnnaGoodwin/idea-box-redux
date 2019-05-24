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
  
  deleteFromStorage(newIdea) {
    localStorage.removeItem(this.id, newIdea);
  }

  updateIdea(newIdea) {

  }

  updateQuality(newIdea) {

  }
  

}


// // from main.js
//   var newIdea = new Idea(input1.value, input2.value, Date.now())
//   array.push(newIdea)
//   saveToStorage(array)
//   newIdea.title
