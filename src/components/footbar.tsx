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
    <footer className="border-t-2 border-border/80 py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/*edw tha exei kai to logo*/}
              <span className="text-lg font-semibold text-foreground">
                IEE Software Engineering Community
              </span>
            </div>
            <p className="text-muted-foreground">
              The Software Engineering Student Team of <Link href="https://iee.ihu.gr">IEE</Link>.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground flex flex-col">
              {quickLinks.map((item) => (
                <Link href={item.href} key={item.label}>
                  <span className="hover:text-foreground transition-colors">{item.label}</span>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Location</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>International Hellenic University</li>
              <li>Sindos Campus</li>
              <li>Sindos 574 00</li>
              <li>ieesec.ihu@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t-2 border-border/80 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IEESEC | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
