'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">CX</span>
          <div className="leading-tight">
            <span className="block">Support Wiki</span>
            <span className="text-xs font-normal text-slate-500">Customer Handbook</span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition ${
                pathname === link.href ? 'text-brand-700' : 'text-slate-700 hover:text-brand-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="button-primary"
            href="https://github.com/zacharybk/cxhandbookchatgpt"
            target="_blank"
            rel="noreferrer"
          >
            View repo
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-700 sm:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 sm:hidden">
          <div className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition ${
                  pathname === link.href ? 'text-brand-700' : 'text-slate-700 hover:text-brand-700'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="button-primary w-fit"
              href="https://github.com/zacharybk/cxhandbookchatgpt"
              target="_blank"
              rel="noreferrer"
            >
              View repo
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
