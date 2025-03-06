const STORAGE_KEY = 'theme'

// default to darkmode
const defaultTheme = 'dark'

const getTheme = () => {
	if (typeof localStorage !== 'undefined') {
		if (localStorage.getItem(STORAGE_KEY)) {
			return localStorage.getItem(STORAGE_KEY)
		} else {
			return defaultTheme
		}
	}
	return defaultTheme
}

const setTheme = (theme) => {
	document.documentElement.dataset.theme = theme
}

//set early so no page flash

setTheme(getTheme())

const themeObserver = new MutationObserver(() => {
	const nextTheme = document.documentElement.dataset.theme
	if (nextTheme) {
		localStorage.setItem(STORAGE_KEY, nextTheme)
	}
})

themeObserver.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ['data-theme'],
})

const toggleTheme = () => {
	const currentTheme = getTheme()
	console.log(`current theme: ${currentTheme}`)
	const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
	setTheme(nextTheme)
}

window.toggleTheme = toggleTheme
