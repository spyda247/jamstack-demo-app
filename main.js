import { getData } from './functions/getData.js';

const btn = document.getElementById('fetch-data-btn');

const container = document.getElementById('data-container');

btn.addEventListener('click', async () => {
  const response = await getData();
  const data = await response.json();

  // renderData function
  renderData(data);
});

function renderData(data) {
  let html = '';
  data.forEach((item) => {
    html += `<div>
            <h2>${item.title}</h2>
            <hr />
            <p>
              ${item.content}
            </p>
          </div>
`;
  });
  container.innerHTML = html;
}
