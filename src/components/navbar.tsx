"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Moon } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border/80 backdrop-blur-md">
      {/* Logo */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-semibold text-foreground">IEESEC</span>
        </Link>

        <nav className="items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium will-change backface-visibility text-muted-foreground"
            >
              <span className="transition-all duration-250 hover:text-shadow-xs hover:text-foreground">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="default"
            className="h-9 w-9 items-center justify-center rounded-full border border-border bg-card drop-shadow-xs hover:bg-secondary transition-colors"
          >
            <Moon className="fill-foreground" />
          </Button>
          <Button className="drop-shadow-xs">Join Us</Button>
        </div>
      </div>
    </header>
  );
}
