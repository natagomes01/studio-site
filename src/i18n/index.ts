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

export const whatsapp = {
  phone: '551151999787',
  message: {
    'pt-br': 'Olá! Vim pelo site e quero saber como funciona seu Sistema de Vendas com IA',
    en: 'Hi! I came from the Albatroz site and would like to learn how your AI Sales System works.',
  },
} as const satisfies { phone: string; message: Record<Locale, string> };

export function whatsappUrl(locale: Locale, message?: string): string {
  return `https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(message ?? whatsapp.message[locale])}`;
}

/**
 * Google Analytics 4.
 *
 * Cole o Measurement ID (formato G-XXXXXXXXXX) para ligar a medição. Com a string
 * vazia nada é carregado: sem gtag, sem cookie e sem banner de consentimento.
 * O script do GA só entra depois do aceite explícito, nunca antes.
 */
export const analytics = {
  measurementId: '',
} as const;

export function analyticsEnabled(): boolean {
  return analytics.measurementId.trim().length > 0;
}

/** Rotas de conteúdo. O guia existe só em PT; o link é o mesmo nos dois idiomas. */
export const guidePath = '/guia-whatsapp-2026/';

export const privacyPath = {
  'pt-br': '/privacidade/',
  en: '/en/privacy/',
} as const satisfies Record<Locale, string>;

export function privacyHref(locale: Locale): string {
  return withBase(privacyPath[locale]);
}

export function guideHref(): string {
  return withBase(guidePath);
}

/** NAP canônico da Albatroz, usado no rodapé, no schema e no link do Maps. */
export const org = {
  legalName: 'Albatroz Studio',
  street: 'Avenida Gisele Constantino, 164, Sala 7A',
  district: 'Parque Bela Vista',
  city: 'Votorantim',
  region: 'SP',
  postalCode: '18110-650',
  country: 'BR',
  telephone: `+${whatsapp.phone}`,
  email: 'nata@albatroz.studio',
  founder: 'Natã Gomes',
  sameAs: [
    'https://www.instagram.com/natagomes01/',
    'https://www.linkedin.com/in/natagomes01',
  ],
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${org.street}, ${org.district}, ${org.city} - ${org.region}, ${org.postalCode}`,
)}`;

export type { Locale, Strings } from './types';
