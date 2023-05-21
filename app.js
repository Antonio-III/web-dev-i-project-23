const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); 
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const navbar = document.querySelector('ul');
const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

