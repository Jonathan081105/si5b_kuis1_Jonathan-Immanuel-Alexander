let items = [
  { id: 1, name: "Item Satu", price: 10000 },
  { id: 2, name: "Item Dua", price: 20000 }
];
let nextId = 3;

const Item = {
  findAll: () => items,
  findById: (id) => items.find(i => i.id === id),
  findIndex: (id) => items.findIndex(i => i.id === id),
  create: (data) => {
    const newItem = {
      id: nextId++,
      name: data.name,
      price: data.price
    };
    items.push(newItem);
    return newItem;
  },
  update: (index, data) => {
    items[index] = { ...items[index], name: data.name, price: data.price };
    return items[index];
  },
  delete: (index) => {
    items.splice(index, 1);
  }
};

module.exports = Item;
