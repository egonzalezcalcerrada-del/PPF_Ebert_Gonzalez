import { defaultLang, languages, showDefaultLang, ui } from "./ui";
import type { Locale, TranslationKey } from "./ui";

const dictionaries: Record<Locale, Record<string, string>> = ui;

export function getLangFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split("/");
	return lang in languages ? (lang as Locale) : defaultLang;
}

export function useTranslations(lang: Locale) {
	const dictionary = dictionaries[lang] ?? dictionaries[defaultLang];
	return (key: TranslationKey): string => dictionary[key] ?? key;
}

export function useTranslatedPath(lang: Locale) {
	return (path: string, target: Locale = lang): string =>
		!showDefaultLang && target === defaultLang ? path : `/${target}${path}`;
}