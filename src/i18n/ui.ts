export const defaultLang = "es";

export const ui = {
	es: "Español",
	en: "English",
} as const;

export type Locale = keyof typeof ui;

export const locales = Object.keys(ui) as Locale[];

export const showDefaultLang = true;