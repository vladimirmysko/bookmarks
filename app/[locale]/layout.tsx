import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { getI18n } from '@/locales/server';
import { cn } from '@/utils/cn';

import { I18nProviderClient } from '@/locales/client';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  weight: 'variable',
  axes: ['opsz'],
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: 'variable',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('seo.title'),
    description: t('seo.description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={cn(inter.variable, jetBrainsMono.variable, 'antialiased')}
        style={{ textRendering: 'optimizeLegibility' }}
      >
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
      </body>
    </html>
  );
}
