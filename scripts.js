function toggleDetails(header) {
    const box = header.parentElement;
    box.classList.toggle("active");
}

function toggleDetails(header) {
  const box = header.parentElement;
  const details = box.querySelector('.exp-details');

  if (!box.classList.contains('active')) {
    details.style.display = 'block';
    details.style.animation = 'slideFadeIn 1s ease forwards';
    box.classList.add('active');
  } else {
    details.style.animation = 'slideFadeOut 1s ease forwards';
    setTimeout(() => {
      details.style.display = 'none';
      box.classList.remove('active');
    }, 500);
  }
}

function toggleProject(card) {
  const allProjects = document.querySelectorAll('.project-content');
  allProjects.forEach(p => p.style.display = 'none'); // 全部先隱藏

  const index = parseInt(card.getAttribute('data-index')); // 取得按鈕對應的 index
  if (allProjects[index]) {
    allProjects[index].style.display = 'block'; // 只顯示對應的那個內容
  }
}
