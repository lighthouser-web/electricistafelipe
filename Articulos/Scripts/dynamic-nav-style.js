const subSections = document.querySelectorAll('.articulo-contenido .article-sub-section');
const navElements = document.querySelectorAll('.articulo-nav li');

function navLiFromSubSectionId(subsection) {
    const liHref = `${subsection.id}`;
    const currentNavElementA = document.querySelector(`a[href="#${liHref}"]`)
    const currentNavElement = currentNavElementA.parentElement;
    
    return currentNavElement;
}

function removeCurrentFromAllNavLi() {
    navElements.forEach(element => {
        element.classList.remove('current');
    })
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

    const currentNavElement = navLiFromSubSectionId(entry.target);

    if (!currentNavElement) return;

    if (entry.isIntersecting) {

        removeCurrentFromAllNavLi()

        currentNavElement.classList.add('current');
    } else {
        currentNavElement.classList.remove('current');
    }
    });
  }, { threshold: 0.4 });

subSections.forEach(element => {
    observer.observe(element);
});