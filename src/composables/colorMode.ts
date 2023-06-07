let isDark: boolean = false

const prefersDark =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const setting = localStorage.getItem('color-schema') || 'auto'

if (setting === 'dark' || (prefersDark && setting !== 'light')) {
  document.documentElement.setAttribute('data-colormode', 'dark')
  isDark = true
  localStorage.setItem('color-scheme', isDark ? 'dark' : 'light')
}

const toggleDark = () => {
  console.log('toggle it...')
  isDark = !isDark
  document.documentElement.setAttribute(
    'data-colormode',
    isDark ? 'dark' : 'light'
  )
  localStorage.setItem('color-scheme', isDark ? 'dark' : 'light')
  return isDark
}

const toggleDarkBtn = document.getElementById('toggleDark')

toggleDarkBtn?.addEventListener('click', toggleDark)
