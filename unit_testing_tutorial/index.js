class CRUDApp {
  constructor() {
    this.data = [];
  }

  create(item) {
    this.data.push(item);
    return item;
  }

  read(index) {
    return this.data[index];
  }

  update(index, item) {
    if (this.data[index] === undefined) return null;
    this.data[index] = item;
    return item;
  }

  delete(index) {
    if (this.data[index] === undefined) return null;
    return this.data.splice(index, 1)[0];
  }
}

module.exports = CRUDApp;
