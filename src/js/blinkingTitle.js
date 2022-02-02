const pageTitle = document.querySelector('section > h1');

setInterval(() => {
  if (pageTitle.classList.contains('lights-on')) {
    pageTitle.classList.remove('lights-on');
    pageTitle.classList.add('lights-off');
  } else if (pageTitle.classList.contains('lights-off')) {
    pageTitle.classList.remove('lights-off');
    pageTitle.classList.add('lights-on');
  }
}, 2000);