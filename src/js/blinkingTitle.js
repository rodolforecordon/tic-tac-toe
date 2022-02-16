const pageTitle = document.querySelector('section > h1');
const dialogTitle = document.querySelector('dialog > h1');

setInterval(() => {
  if (pageTitle.classList.contains('lights-on')) {
    pageTitle.classList.remove('lights-on');
    pageTitle.classList.add('lights-off');
  } else if (pageTitle.classList.contains('lights-off')) {
    pageTitle.classList.remove('lights-off');
    pageTitle.classList.add('lights-on');
  }
}, 2000);

setInterval(() => {
  if (dialogTitle.classList.contains('lights-on')) {
    dialogTitle.classList.remove('lights-on');
    dialogTitle.classList.add('lights-off');
  } else if (dialogTitle.classList.contains('lights-off')) {
    dialogTitle.classList.remove('lights-off');
    dialogTitle.classList.add('lights-on');
  }
}, 2000);