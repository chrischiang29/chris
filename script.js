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
  // 取得所有 .project-content
  const allProjects = document.querySelectorAll(".project-content");
  const index = Array.from(card.parentNode.children).indexOf(card);

  allProjects.forEach((proj, i) => {
    proj.style.display = (i === index && proj.style.display !== "block") ? "block" : "none";
  });
}
