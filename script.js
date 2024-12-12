document.addEventListener('DOMContentLoaded', () => {
	const searchInput = document.getElementById('searchInput')
	const servicesList = document.getElementById('servicesList')
	const services = servicesList.getElementsByTagName('li')
	const noResults = document.getElementById('noResults')
	const showButton = document.getElementById('show')
	const hideButton = document.getElementById('hide')

	for (let service of services) {
		service.classList.add('hidden')
	}

	searchInput.addEventListener('input', () => {
		const query = searchInput.value.toLowerCase()
		let hasResults = false

		for (let service of services) {
			const serviceText = service.textContent.toLowerCase()
			if (query && serviceText.includes(query)) {
				service.classList.remove('hidden')
				hasResults = true
			} else {
				service.classList.add('hidden')
			}
		}

		if (!query) {
			noResults.style.display = 'none'
		} else if (hasResults) {
			noResults.style.display = 'none'
		} else {
			noResults.style.display = 'block'
		}
	})

	showButton.addEventListener('click', () => {
		for (let service of services) {
			service.classList.remove('hidden')
		}
		noResults.style.display = 'none'
		searchInput.value = ''
	})

	hideButton.addEventListener('click', () => {
		for (let service of services) {
			service.classList.add('hidden')
		}
		noResults.style.display = 'none'
		searchInput.value = ''
	})
})
