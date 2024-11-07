import { getI18n } from '@/locales/server';

import Link from 'next/link';
import { Logo } from '@/components/logo';

export default async function HomePage() {
  const t = await getI18n();

  return (
    <div className="flex flex-col items-center">
      <main className="flex w-full max-w-xl flex-col items-stretch px-5 py-40">
        <nav className="flex items-center justify-between">
          <Logo />
          <Link
            href="#"
            className="rounded text-sm text-gray-1100 underline outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100"
          >
            {t('home.login')}
          </Link>
        </nav>

        <section className="mt-16 flex flex-col items-stretch gap-1">
          <h1 className="text-sm/6 font-medium">{t('home.title')}</h1>
          <p className="text-sm/6 text-gray-1100">{t('home.subtitle')}</p>
        </section>

        <section className="mt-6 flex flex-col items-stretch gap-1">
          <h1 className="text-sm/6 font-medium">{t('home.about.title')}</h1>
          <p className="text-sm/6 text-gray-1100">{t('home.about.paragraph')}</p>
        </section>

        <section className="mt-6 flex flex-col items-stretch gap-1">
          <h1 className="text-sm/6 font-medium">{t('home.join.title')}</h1>
          <p className="text-sm/6 text-gray-1100">{t('home.join.paragraph')}</p>
        </section>

        <section></section>
      </main>
    </div>
  );
}
