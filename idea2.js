class Idea {
  constructor (title, body, id, star, quality) {
    this.title = title;
    this.body = body;
    this.id = id || Date.now();
    this.star = false;
    this.quality = 0;
  }

  saveToStorage() {
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
    this.title = title;
    this.body = body;
    this.saveToStorage(newIdea);
  }

  updateQuality(newIdea) {

  }

  updateContent() {
    this.star = true;
  }
}
