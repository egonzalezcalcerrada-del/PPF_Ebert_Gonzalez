import { defaultLang, showDefaultLang, ui } from "./ui";
import type { Locale } from "./ui";

import es from "./translations/es.json";
import en from "./translations/en.json";

const dictionaries: Record<Locale, Record<string, string>> = {
	es: es as Record<string, string>,
	en: en as Record<string, string>,
};

export function getLangFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split("/");
	return lang in ui ? (lang as Locale) : defaultLang;
}

export function useTranslations(lang: Locale) {
	return (key: string): string => dictionaries[lang]?.[key] ?? key;
}

export function useTranslatedPath(lang: Locale) {
	return (path: string, target: Locale = lang): string =>
		!showDefaultLang && target === defaultLang ? path : `/${target}${path}`;
}