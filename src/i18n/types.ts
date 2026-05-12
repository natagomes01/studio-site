export type Locale = 'pt-br' | 'en';

export interface CaseItem {
  name: string;
  segment: string;
  stats: { value: string; label: string }[];
  body: string;
  accent: string;
}

export interface PainItem {
  title: string;
  body: string;
}

export interface ProtocolStep {
  title: string;
  body: string;
}

export interface ProofItem {
  metric: string;
  context: string;
}

export interface Strings {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    pillars: string;
    projects: string;
    contact: string;
  };
  langSwitch: {
    detectedBanner: string;
    detectedAction: string;
    dismiss: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    support: string;
  };
  proofBar: ProofItem[];
  pain: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    intro: string;
    introTail: string;
    items: PainItem[];
    closing: string;
    closingTail: string;
  };
  cases: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    intro: string;
    items: CaseItem[];
    pattern: {
      title: string;
      body: string;
    };
    cta: string;
  };
  protocol: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    intro: string;
    steps: ProtocolStep[];
    closing: string;
    closingTail: string;
    cta: string;
  };
  footer: {
    contactCta: string;
    address: { line1: string; line2: string; line3: string };
    socialLabel: string;
    legal: string;
  };
  form: {
    title: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    contextLabel: string;
    contextPlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
}
