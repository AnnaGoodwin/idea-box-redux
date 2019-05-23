class Idea {
  constructor (title, body, id) {
    this.title = title;
    this.body = body;
    this.id = id || Date.now();
    this.star = false;
    this.quality = 0;
  }

  saveToStorage(newIdeas) {
    var ideasArray = JSON.stringify(newIdeas)
    localStorage.setItem('ideas', ideasArray);
  }
  
  deleteFromStorage(newIdea) {
    localStorage.removeItem('ideas', newIdea);
  }

  updateIdea(newIdea) {

  }

  updateQuality(newIdea) {

  }
  

}



  removeFromStorage(newIdea) {
    localStorage.removeitem('ideas', )
  }

// from main.js
  var newIdea = new Idea(input1.value, input2.value, Date.now())
  array.push(newIdea)
  saveToStorage(array)
