const resizer = document.getElementById('resizer');
const sidebar = document.getElementById('sidebar-posts');
const main = document.getElementById('main-content');

let isResizing = false;

resizer.addEventListener('mousedown', function (e) {
  isResizing = true;
  document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mousemove', function (e) {
  if (!isResizing) return;

  const minWidth = 150;
  const maxWidth = 500;
  const newWidth = Math.min(Math.max(e.clientX - 60, minWidth), maxWidth); // 60 = sidebar-icons ancho

  sidebar.style.width = newWidth + 'px';
  resizer.style.left = 60 + newWidth + 'px';
  main.style.left = 60 + newWidth + 5 + 'px';
});

document.addEventListener('mouseup', function () {
  isResizing = false;
  document.body.style.cursor = '';
});
