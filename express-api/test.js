const assert = require('assert');

const API_URL = 'http://localhost:3000';
const API_KEY = 'my-secret-api-key';

async function runTests() {
  console.log('--- STARTING TESTS ---\n');

  try {
    // 5 Skenario Berhasil

    // 1. GET all items
    console.log('1. [Berhasil] GET /items');
    let res = await fetch(`${API_URL}/items`);
    let data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.status, 'success');
    console.log('   -> Sukses\n');

    // 2. GET item by ID
    console.log('2. [Berhasil] GET /items/1');
    res = await fetch(`${API_URL}/items/1`);
    data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.status, 'success');
    console.log('   -> Sukses\n');

    // 3. POST new item with API Key
    console.log('3. [Berhasil] POST /items');
    res = await fetch(`${API_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify({ name: 'Item Baru', price: 30000 })
    });
    data = await res.json();
    assert.strictEqual(res.status, 201);
    assert.strictEqual(data.status, 'success');
    const newId = data.data.id;
    console.log('   -> Sukses\n');

    // 4. PUT update item with API Key
    console.log(`4. [Berhasil] PUT /items/${newId}`);
    res = await fetch(`${API_URL}/items/${newId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify({ name: 'Item Baru Update', price: 35000 })
    });
    data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.status, 'success');
    console.log('   -> Sukses\n');

    // 5. DELETE item with API Key
    console.log(`5. [Berhasil] DELETE /items/${newId}`);
    res = await fetch(`${API_URL}/items/${newId}`, {
      method: 'DELETE',
      headers: {
        'x-api-key': API_KEY
      }
    });
    data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.status, 'success');
    console.log('   -> Sukses\n');


    // 4 Skenario Gagal

    // 1. Tanpa API Key
    console.log('6. [Gagal] POST /items tanpa API Key');
    res = await fetch(`${API_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'Hacker Item', price: 0 })
    });
    data = await res.json();
    assert.strictEqual(res.status, 401);
    console.log('   -> Error:', data.message);
    console.log('   -> Sukses\n');

    // 2. Data tidak lengkap
    console.log('7. [Gagal] POST /items data tidak lengkap');
    res = await fetch(`${API_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify({ name: 'Hanya Nama' }) // missing price
    });
    data = await res.json();
    assert.strictEqual(res.status, 400);
    console.log('   -> Error:', data.message);
    console.log('   -> Sukses\n');

    // 3. JSON rusak (Syntax error on body payload)
    console.log('8. [Gagal] POST /items JSON rusak');
    res = await fetch(`${API_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: '{"name": "Broken JSON", "price": }'
    });
    data = await res.json();
    assert.strictEqual(res.status, 400); // Express.json() will throw 400 for bad JSON
    console.log('   -> Error:', data.message);
    console.log('   -> Sukses\n');

    // 4. ID tidak ditemukan (404 dari resource endpoint)
    console.log('9. [Gagal] GET /items/999 ID tidak ditemukan');
    res = await fetch(`${API_URL}/items/999`);
    data = await res.json();
    assert.strictEqual(res.status, 404);
    console.log('   -> Error:', data.message);
    console.log('   -> Sukses\n');

    console.log('--- ALL TESTS PASSED ---');
  } catch (err) {
    console.error('TEST FAILED:', err);
    process.exit(1);
  }
}

runTests();
