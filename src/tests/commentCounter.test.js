import countComments from '../modules/commentCounter.js';

describe('Test To Count Number of Comments in  A Dom Element', () => {
  test('Count Comments', () => {
    document.body.innerHTML = `
    <ul class id="comments-container">
      <li>One Comment</li>
      <li>Two Comment</li>

    </ul>
    `;

    const commentContainer = document.getElementById('comments-container');
    expect(countComments(commentContainer)).toBe(2);
  });

  test('Count Comments', () => {
    document.body.innerHTML = `
    <ul class id="comments-container">
    </ul>
    `;

    const commentContainer = document.getElementById('comments-container');
    expect(countComments(commentContainer)).toBe(0);
  });
});
