import React from "react";

export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
        <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
)

export const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
)

export const VideoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        className="mx-auto mb-2"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        {...props}
    >
        <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
)

export const WarningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        className="h-5 w-5 text-yellow-700 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        {...props}
    >
        <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
        />
    </svg>
)

export const CrossIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        {...props}
    >
        <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
        />
    </svg>
)

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        {...props}
    >
        <path d="M3 5h14M3 10h14M3 15h14" />
    </svg>
)


export const JetBrainsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        {...props}
    >
        <path d="M3 3h8v8H3z" fill="#000" />
        <path d="M13 3h8v8h-8z" fill="#FD345F" />
        <path d="M3 13h8v8H3z" fill="#07C3F2" />
        <path d="M13 13h8v8h-8z" fill="#FEE600" />
        <path d="M6.2 6.2h11.6v11.6H6.2z" fill="#000" />
        <path
            d="M8.3 14.8h2.1c1.5 0 2.4-.8 2.4-2.1 0-1-.5-1.6-1.4-1.9l1.3-2.6H11l-1.1 2.4H9.7V8.2H8.3v6.6zm1.4-1.2v-1.8h.6c.7 0 1.1.3 1.1.9 0 .6-.4.9-1.1.9h-.6zm4.1 1.2h3.8v-1.2h-2.4v-1.6h2v-1.1h-2V9.4h2.4V8.2h-3.8v6.6z"
            fill="#fff"
        />
    </svg>
)

export const BuyMeCoffeeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
    </svg>
)

export const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
)

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
)