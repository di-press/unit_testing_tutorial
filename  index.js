class Item {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class CRUDApp {
  constructor() {
    this.items = [];
  }

  create(name) {
    const id = this.items.length + 1;
    const newItem = new Item(id, name);
    this.items.push(newItem);
    return newItem;
  }

  read() {
    return this.items;
  }

  update(id, newName) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.name = newName;
      return item;
    }
    return null;
  }

  delete(id) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      return this.items.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = CRUDApp;
