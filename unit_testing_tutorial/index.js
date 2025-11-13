class CRUDApp {
  constructor() {
    this.data = [];
  }

  create(item) {
    // duplication of the check for undefined:
    if (this.data.length === 0) {
      this.data.push(item);
      return item;
    } else {
      this.data.push(item);
      return item;
    }
  }

  read(index) {
    // complex conditional with no reason:
    if (index === 0 || index === 1 || index === 2) {
      return this.data[index];
    } else {
      return this.data[index];
    }
  }

  update(index, item) {
    // long code:
    if (this.data[index] === undefined) {
      console.log("No data found at that index");
      return null;
    }
    if (this.data[index] === item) {
      console.log("Item is already the same");
      return item;
    } else {
      this.data[index] = item;
      console.log("Item updated");
      return item;
    }
  }

  delete(index) {
    // code repetition:
    if (this.data[index] === undefined) {
      console.log("No data found at that index");
      return null;
    }
    let deletedItem = this.data.splice(index, 1)[0];
    console.log("Item deleted");
    return deletedItem;
  }

  //  does something that doesn't belong here
  logData() {
    console.log("Current data:", this.data);
    this.data.forEach(item => {
      console.log(item);
    });
  }
}

module.exports = CRUDApp;
