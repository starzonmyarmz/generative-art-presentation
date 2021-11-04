document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section')
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  sections.forEach((el, i) => {
    el.id = letters[i]
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('visible', entry.isIntersecting)
    }, {
      threshold: 1
    })
  })

  sections.forEach((el) => {
    if (el.nextElementSibling) {
      el.querySelector('a[href="#"]').href = `#${el.nextElementSibling.id}`
    }
    observer.observe(el)
  })

  document.querySelector('main').hidden = false;
})
