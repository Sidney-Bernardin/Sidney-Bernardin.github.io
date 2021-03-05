const projects = document.querySelector('.projects');
const eachProject = Array.from(projects.children);

const hideProjects = () => {
  eachProject.forEach((project, index) => {
    project.style.display = 'none'
  })
}

const updateProject = (index) => {
  hideProjects()
  eachProject[index].style.display = 'block';
}

slides.forEach((slide, index) => {
  slide.addEventListener('click', (e) => {
    updateProject(index)
  })
});
