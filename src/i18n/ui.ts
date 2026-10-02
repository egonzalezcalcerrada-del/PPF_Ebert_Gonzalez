const es = {
	"meta.home.title": "Restaurante Ejemplo",
	"meta.home.description":
		"Texto de ejemplo: restaurante de cocina mediterránea de temporada.",
	"nav.home": "Inicio",
	"nav.menu": "Carta",
	"nav.about": "Nosotros",
	"nav.contact": "Contacto",
	"nav.promo": "Promociones",
	"nav.main": "Navegación principal",
	"nav.toggle": "Abrir menú",
	"hero.eyebrow": "Cocina mediterránea de temporada",
	"hero.title": "Sabores que cuentan historias",
	"hero.subtitle":
		"Texto de ejemplo: producto local, recetas sencillas y sobremesa sin prisa.",
	"hero.imageAlt": "Texto de ejemplo: mesa con platos mediterráneos",
	"buttons.reserveTable": "Reservar mesa",
	"buttons.viewMenu": "Ver la carta",
	"buttons.seePromotions": "Ver promociones",
	"buttons.callRestaurant": "Llamar al restaurante",
	"buttons.howToFindUs": "Cómo llegar",
	"sections.menu.title": "Nuestra carta",
	"sections.menu.description":
		"Texto de ejemplo: entrantes, principales y postres de temporada.",
	"sections.about.title": "Nuestra historia",
	"sections.about.description":
		"Texto de ejemplo: un restaurante familiar con cocina honesta.",
	"sections.gallery.title": "El restaurante en imágenes",
	"sections.gallery.description":
		"Texto de ejemplo: sala, terraza y detalles de la cocina.",
	"sections.visit.title": "Visítanos",
	"sections.visit.description":
		"Texto de ejemplo: estamos en el centro, con terraza exterior.",
	"promo.eyebrow": "Promoción de ejemplo",
	"promo.title": "Menú de temporada con postre incluido",
	"promo.description": "Texto de ejemplo: de lunes a jueves al mediodía.",
	"promo.cta": "Ver condiciones",
	"promo.disclaimer": "Texto de ejemplo: promoción no válida para el copy final.",
	"footer.tagline": "Cocina mediterránea para compartir.",
	"footer.address": "Calle Ejemplo 123, Ciudad",
	"footer.phone": "+34 600 123 123",
	"footer.email": "hola@restaurante-ejemplo.com",
	"footer.hours": "Texto de ejemplo: lunes a domingo, de 13:00 a 23:00.",
	"footer.legal": "Aviso legal",
	"footer.privacy": "Privacidad",
	"footer.cookies": "Cookies",
	"footer.rights": "© Restaurante Ejemplo. Todos los derechos reservados.",
	"language.label": "Idioma",
	"language.choose": "Elige tu idioma",
	"language.current": "Idioma actual",
} as const;

export type TranslationKey = keyof typeof es;

export const ui = {
	es,
	en: {
		"meta.home.title": "Sample Restaurant",
		"meta.home.description":
			"Sample text: seasonal Mediterranean restaurant.",
		"nav.home": "Home",
		"nav.menu": "Menu",
		"nav.about": "About us",
		"nav.contact": "Contact",
		"nav.promo": "Offers",
		"nav.main": "Main navigation",
		"nav.toggle": "Open menu",
		"hero.eyebrow": "Seasonal Mediterranean cuisine",
		"hero.title": "Flavours that tell stories",
		"hero.subtitle":
			"Sample text: local produce, simple recipes and unhurried meals.",
		"hero.imageAlt": "Sample text: table with Mediterranean dishes",
		"buttons.reserveTable": "Book a table",
		"buttons.viewMenu": "View the menu",
		"buttons.seePromotions": "View offers",
		"buttons.callRestaurant": "Call the restaurant",
		"buttons.howToFindUs": "How to find us",
		"sections.menu.title": "Our menu",
		"sections.menu.description":
			"Sample text: seasonal starters, mains and desserts.",
		"sections.about.title": "Our story",
		"sections.about.description":
			"Sample text: a family restaurant with honest cooking.",
		"sections.gallery.title": "The restaurant in pictures",
		"sections.gallery.description":
			"Sample text: dining room, terrace and kitchen details.",
		"sections.visit.title": "Visit us",
		"sections.visit.description":
			"Sample text: we are in the city centre, with an outdoor terrace.",
		"promo.eyebrow": "Sample offer",
		"promo.title": "Seasonal menu with dessert included",
		"promo.description": "Sample text: Monday to Thursday at lunchtime.",
		"promo.cta": "See terms",
		"promo.disclaimer": "Sample text: offer not valid as final copy.",
		"footer.tagline": "Mediterranean cooking to share.",
		"footer.address": "123 Example Street, City",
		"footer.phone": "+34 600 123 123",
		"footer.email": "hello@example-restaurant.com",
		"footer.hours": "Sample text: Monday to Sunday, 1:00 PM to 11:00 PM.",
		"footer.legal": "Legal notice",
		"footer.privacy": "Privacy",
		"footer.cookies": "Cookies",
		"footer.rights": "© Sample Restaurant. All rights reserved.",
		"language.label": "Language",
		"language.choose": "Choose your language",
		"language.current": "Current language",
	} satisfies Record<TranslationKey, string>,
} as const;

export type Locale = keyof typeof ui;

export const defaultLang: Locale = "es";

export const languages: Record<Locale, string> = {
	es: "Español",
	en: "English",
};

export const locales = Object.keys(ui) as Locale[];

export const showDefaultLang = true;