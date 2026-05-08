"use client";

import Link from "next/link";

const quickLinks = [
  { label: "Join Us", href: "/join" },
  { label: "Department", href: "https://iee.ihu.gr" },
  { label: "GitHub", href: "https://github.com/IEESEC" },
  { label: "Discord Server", href: "https://discord.gg/2xHBsHMKy7" },
];

export function Footbar() {
  return (
    <footer className="relative z-10 w-full bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Diaxoristiki grammi */}
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent mb-12" />

        {/* Main Footbar Container */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Description Subcontainer */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-3">
              {/*edw tha exei kai to logo*/}
              <span className="text-xl font-bold tracking-tight text-primary">IEESEC</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              The Software Engineering Student Team of&nbsp;
              <Link
                href="https://iee.ihu.gr"
                className="text-primary/70 hover:text-primary transition-colors"
              >
                Informatics and Electronics Engineering Department
              </Link>
              &nbsp;at International Hellenic University.
            </p>
          </div>

          {/* Quick Links Subcontainer */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              Quick Links
            </h4>
            <ul className="space-y-2.5 flex flex-col">
              {quickLinks.map((item) => (
                <Link href={item.href} key={item.label}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </ul>
          </div>

          {/* Location Subcontainer */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              Location
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>International Hellenic University</li>
              <li>Sindos Campus</li>
              <li>Sindos 574 00</li>
              <Link href="mailto:ieesec.ihu@gmail.com">
                <li className="text-primary/70">ieesec.ihu@gmail.com</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Copyright container */}
        <div className="mt-10 text-center">
          {/* Diaxoristiki grammi */}
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent mb-12" />
          <p className="text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} IEESEC &middot; All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
