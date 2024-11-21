document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
      project.addEventListener('click', (e) => {
        e.preventDefault();
        const url = project.getAttribute('data-url');
        if (url) {
          window.open(url, '_blank');
        }
      });
    });
  });