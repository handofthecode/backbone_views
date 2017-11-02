var people = [
  { name: 'bob', colors: ['red', 'green', 'blue'] },
  { name: 'jill', colors: ['black', 'red', 'pink'] },
  { name: 'jack', colors: ['brown', 'blue', 'white'] },
]

var app = {
  init: function() {
    this.collection = new List(people);
    this.listView = new ListView({ collection: this.list });
    this.listView.render();
  }
}

app.init();
