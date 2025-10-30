const CRUDApp = require('../index.js');

describe('CRUD Operations', () => {
  let app;

  // Initialize a fresh app instance before each test
  beforeEach(() => {
    app = new CRUDApp();
  });

  test('should create a new item', () => {
    const newItem = app.create('Item 1');
    expect(newItem).toEqual({ id: 1, name: 'Item 1' });
  });

  test('should read all items', () => {
    app.create('Item 1');
    app.create('Item 2');
    const items = app.read();
    expect(items).toHaveLength(2);
  });

  test('should update an item', () => {
    const newItem = app.create('Item 1');
    const updatedItem = app.update(newItem.id, 'Updated Item');
    expect(updatedItem.name).toBe('Updated Item');
  });

  test('should delete an item', () => {
    const newItem = app.create('Item 1');
    const deletedItem = app.delete(newItem.id);
    expect(deletedItem.id).toBe(newItem.id);
    expect(app.read()).toHaveLength(0);
  });
});
