document.addEventListener("DOMContentLoaded", function () {
	var slider = tns({
		container: ".mhn-slide",
		items: 1,
		slideBy: "page",
		autoplay: false,
		controls: true,
		nav: true,
		responsive: {
			480: { items: 2 },
			600: { items: 3 },
			1000: { items: 4 },
		},
	});

	// Necesitamos hacer la misma funcionalidad de imagen de fondo que antes
	// Sin embargo, tiny-slider no tiene un evento de inicialización similar
	// Podemos simplemente hacer esto fuera de la inicialización del control deslizante
	document.querySelectorAll(".mhn-slide img").forEach(function (img) {
		if (img.complete) {
			img.closest(".mhn-inner").querySelector(".loader-circle").style.display = "none";
			img.closest(".mhn-inner").querySelector(".mhn-img").style.backgroundImage = "url(" + img.src + ")";
		} else {
			img.addEventListener("load", function (e) {
				e.target.closest(".mhn-inner").querySelector(".loader-circle").style.display = "none";
				e.target.closest(".mhn-inner").querySelector(".mhn-img").style.backgroundImage = "url(" + e.target.src + ")";
			});
		}
	});
});
