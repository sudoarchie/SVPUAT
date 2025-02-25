'use client';

import { BookOpen, Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navigation = {
  main: [
    { name: 'About', href: '#about' },
    { name: 'Resources', href: '#resources' },
    { name: 'Terms', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
    },
  ],
};

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center mb-10">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold">SVPUAT Library</span>
          </Link>
        </div>
        <nav className="mb-10 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 hover:text-primary">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-primary">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Sardar Vallabhbhai Patel University of Agriculture and Technology. All rights reserved.
        </p>
      </div>
    </footer>
  );
}