const cataloguePage = document.getElementById('catalogue-section');
const ticketPage = document.getElementById('ticket-section');
const mainPage = document.getElementById('main-section');

console.log('mainPage', ticketPage);

function showcataloguePage() {
  ticketPage.classList.add('hide');
  mainPage.classList.add('hide');
  cataloguePage.classList.remove('hide');
}

function showticketPage() {
  ticketPage.classList.remove('hide');
  mainPage.classList.add('hide');
  cataloguePage.classList.add('hide');
}

function showmainPage() {
  ticketPage.classList.add('hide');
  mainPage.classList.remove('hide');
  cataloguePage.classList.add('hide');
}

export default function spaNavigation() {
  window.addEventListener('hashchange', () => {
    const { hash } = window.location;
    if (hash === '#catalogue-section') {
      console.log("page change")
      showcataloguePage();
    } else if (hash === '#ticket-section') {
      showticketPage();
    } else if (hash === '#main-section') {
      showmainPage();
    } else if (hash === '') {
      showcataloguePage();
    }
  }, false);
}
