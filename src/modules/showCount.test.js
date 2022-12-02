import countItems from '../modules/showmMovieCount.js';

describe('Test To Count Number of Comments in  A Dom Element', () => {
  test('countItems', () => {
    document.body.innerHTML = `
    <ul class id="item-container">
      <li>One item</li>
      <li>Two item</li>

    </ul>
    `;

    const itemContainer = document.getElementById('items-container');
    expect(countItems(itemContainer)).toBe(2);
  });

  test('countItems', () => {
    document.body.innerHTML = `
    <ul class id="item-container">
      <li>One item</li>
      <li>Two item</li>

    </ul>
    `;

    const itemContainer = document.getElementById('item-container');
    expect(countItems(itemContainer)).toBe(2);
  });
});
