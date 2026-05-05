"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LINKS } from "../constant/links";

import { BuyMeCoffeeIcon, GitHubIcon, InfoIcon, JetBrainsIcon, MailIcon, MenuIcon } from "./Icons";
import WarningBanner from "./WarningBanner";

const ICONS_LINKS_DATA: { link: string; ariaLabel: string; icon: React.ReactNode }[] = [
  { link: LINKS.BUY_ME_A_COFFEE, ariaLabel: "Buy me a coffee", icon: <BuyMeCoffeeIcon /> },
  { link: LINKS.GITHUB_ISSUES, ariaLabel: "Issue Tracker", icon: <InfoIcon /> },
  { link: LINKS.EMAIL_LINK, ariaLabel: "Contact Email", icon: <MailIcon /> },
  { link: LINKS.GITHUB_REPO, ariaLabel: "GitHub Repository", icon: <GitHubIcon /> }
];

interface HeaderProps {
  onMenuToggle: () => void;
}


const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  return (
    <>
      {!isBannerDismissed && (
        <WarningBanner onDismiss={(dismiss) => setIsBannerDismissed(dismiss)}  />
      )}

      <header className="sticky top-0 z-50 w-full border-b border-amber-100 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4">

          <button
            onClick={onMenuToggle}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-gray-600 transition-all hover:bg-amber-100 hover:text-amber-900 active:scale-95 lg:hidden"
            aria-label="Toggle navigation"
          >
            <MenuIcon />
          </button>

            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Riverpod Gen Shortcuts"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-base font-semibold tracking-tight text-gray-900">
                Riverpod Gen Shortcuts
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={LINKS.JETBRAINS_PLUGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-900 transition-colors hover:border-amber-300 hover:bg-amber-100 lg:inline-flex"
              aria-label="JetBrains Plugin"
              title="Open JetBrains Marketplace plugin page"
            >
              <JetBrainsIcon />
              <span>JetBrains Plugin</span>
            </a>
            <Link
              href="/docs"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-amber-50 hover:text-amber-800 sm:inline-flex"
            >
              Documentation
            </Link>
            <Link
              href="/about"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-amber-50 hover:text-amber-800 sm:inline-flex"
            >
              About Us
            </Link>

            {ICONS_LINKS_DATA.map((iconLink) => (
              <LinkIcon key={iconLink.link} link={iconLink.link} ariaLabel={iconLink.ariaLabel}>
                {iconLink.icon}
              </LinkIcon>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;



const LinkIcon: React.FC<{ children: React.ReactNode, link: string, ariaLabel: string }> = ({ link, ariaLabel, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-amber-50 hover:text-amber-700"
      aria-label={ariaLabel}
      title="Support the project"
    >
      {children}
    </a>
  )
}