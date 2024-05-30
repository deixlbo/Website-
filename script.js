function handleScroll() {
  const header = document.querySelector('header');
  const nav = document.querySelector('header nav');
  const scrollPosition = window.scrollY;

  if (header) {
    header.style.backgroundColor = scrollPosition > 0 ? '#660033' : '#330066'; 

    if (nav) { 
      nav.style.backgroundColor = scrollPosition > 0 ? '#660033' : '#330066'; 
    }

    if (scrollPosition > 0) {
      header.classList.add('scrolled');
      if (nav) nav.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      if (nav) nav.classList.remove('scrolled');
    }
  }
}

window.addEventListener('scroll', handleScroll);