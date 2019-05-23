class Idea {
  constructor (title, body, id) {
    this.title = title;
    this.body = body;
    this.id = id;
    this.star = true;
  }
  saveToStorage(newIdea) {
    localStorage.setItem('ideas', newIdeas);
  }

  removeFromStorage(newIdea) {
    localStorage.removeitem('ideas', )
  }

// from main.js
  var newIdea = new Idea(input1.value, input2.value, Date.now())
  array.push(newIdea)
  saveToStorage(array)
}
