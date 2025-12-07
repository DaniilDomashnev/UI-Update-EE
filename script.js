// Небольшой скрипт для последовательного появления секций с задержкой
document.addEventListener('DOMContentLoaded', () => {
	const sections = Array.from(document.querySelectorAll('.update-section'))
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const el = entry.target
					const idx = Number(el.dataset.index || 0)
					el.style.transitionDelay = `${idx * 80}ms`
					el.classList.add('visible')
					observer.unobserve(el)
				}
			})
		},
		{ threshold: 0.12 }
	)
	sections.forEach((s, i) => {
		s.dataset.index = i
		observer.observe(s)
	})
})
