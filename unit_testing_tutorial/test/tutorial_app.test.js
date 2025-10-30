const CRUDApp = require('../index');

describe('CRUD Operations', () => {
  let app;

  beforeEach(() => {
    app = new CRUDApp();
  });

  test('create adds an item', () => {
    const item = { name: 'item1' };
    expect(app.create(item)).toEqual(item);
    expect(app.read(0)).toEqual(item);
  });

  test('read returns undefined for missing index', () => {
    expect(app.read(0)).toBeUndefined();
  });

  test('update modifies an item', () => {
    const item = { name: 'item1' };
    app.create(item);
    const updated = { name: 'item2' };
    expect(app.update(0, updated)).toEqual(updated);
    expect(app.read(0)).toEqual(updated);
  });

  test('delete removes an item', () => {
    const item = { name: 'item1' };
    app.create(item);
    expect(app.delete(0)).toEqual(item);
    expect(app.read(0)).toBeUndefined();
  });
});
