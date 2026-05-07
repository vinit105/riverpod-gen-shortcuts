'use client'
import React, { useEffect, useRef, useState } from 'react'
import Prism from "prismjs";

import "prismjs/components/prism-dart";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-bash";

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "javascript",
  fileName = "code.ts"
}) => {
    const codeRef = useRef<HTMLElement>(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [code]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };


    return (
        <div className="rounded-xl border border-zinc-700 bg-zinc-900 font-mono max-w-full">
        
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 rounded-t-xl">
            <div className="flex items-center gap-3">
            <div className="flex gap-1">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <span className="text-xs text-zinc-400">{fileName}</span>
            </div>

            <button
                onClick={handleCopy}
                className="text-xs text-zinc-400 hover:text-white"
            >
                {copied ? "Copied" : "Copy"}
            </button>
        </div>

        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code
                ref={codeRef}
                className={`language-${language}`}
            >
                {code.trim()}
            </code>
        </pre>
        </div>
    );
};

export default CodeBlock;