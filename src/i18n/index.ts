import type { Locale, Strings } from './types';
import { ptBr } from './pt-br';
import { en } from './en';

export const strings: Record<Locale, Strings> = {
  'pt-br': ptBr,
  en,
};

export function t(locale: Locale): Strings {
  return strings[locale];
}

export function altLocale(locale: Locale): Locale {
  return locale === 'pt-br' ? 'en' : 'pt-br';
}

export function localizedPath(locale: Locale, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === 'pt-br') {
    return clean ? `/${clean}` : '/';
  }
  return clean ? `/en/${clean}` : '/en/';
}

export function withBase(path: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  const trimmedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${trimmedBase}${normalized}` || '/';
}

export function localizedHref(locale: Locale, path: string = ''): string {
  return withBase(localizedPath(locale, path));
}

export const anchors = {
  'pt-br': { contact: '#contato', protocol: '#protocolo', cases: '#cases', pain: '#dores' },
  en: { contact: '#contact', protocol: '#protocol', cases: '#cases', pain: '#pain' },
} as const satisfies Record<Locale, Record<string, string>>;

export function anchor(locale: Locale, key: keyof (typeof anchors)['pt-br']): string {
  return anchors[locale][key];
}

export type { Locale, Strings } from './types';
