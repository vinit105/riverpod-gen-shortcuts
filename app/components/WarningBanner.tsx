import React from 'react'
import { CrossIcon, WarningIcon } from './Icons'
import { LINKS } from '../constant/links'

interface WarningBannerProps {
    onDismiss: (dismissed: boolean) => void;
}


const WarningBanner: React.FC<WarningBannerProps> = ({ onDismiss }) => {
    return (
        <div className="w-full border-b border-yellow-300 bg-linear-to-r from-yellow-50 via-amber-50 to-yellow-100/80 px-4 py-2.5 shadow-[0_1px_0_rgba(251,191,36,0.45)] sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/80 ring-1 ring-yellow-200">
                        <WarningIcon className="h-4 w-4 text-yellow-700" />
                    </span>
                    <p className="min-w-0 text-xs leading-5 text-yellow-900 sm:text-sm">
                        <strong className="font-semibold text-yellow-950">Beta Documentation</strong>{' '}
                        <span className="hidden sm:inline">-</span>{' '}
                        <span className="block sm:inline">
                            This documentation and plugin are under active development. The plugin is live and ready to explore, but docs are in beta. Final release coming in <strong>April 2026</strong>.
                        </span>{' '}
                        <a
                            href={LINKS.GITHUB_DISCUESSION}
                            className="font-semibold text-yellow-800 underline decoration-yellow-400 underline-offset-2 transition-colors hover:text-yellow-950 hover:decoration-yellow-600"
                        >
                            Share feedback
                        </a>
                    </p>
                </div>
                <button
                    onClick={() => onDismiss(true)}
                    className="shrink-0 rounded-full p-1.5 text-yellow-700 transition-colors hover:bg-white/70 hover:text-yellow-950 cursor-pointer"
                    aria-label="Dismiss beta warning"
                >
                    <CrossIcon className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}

export default WarningBanner
