import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { WebsiteType } from '@/lib/types'
import { Button } from './ui/button';
import { Check, Copy } from 'lucide-react';
type Props = {
    website: WebsiteType | null
}

export default function ScriptCard({ website }: Props) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(getScriptSnippet());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };
    const getScriptSnippet = () => {
        if (!website) return "";
        const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
        return `<script
  defer
  data-website-id='${website.websiteId}'
  data-domain='${baseUrl}'
  src="${baseUrl}/analytics.js">
</script>`;
    };
    return (
        <Card className="h-fit bg-neutral-900 border-neutral-800 sticky top-6">
            <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <Copy className="h-4 w-4 text-emerald-500" />
                    </div>
                    <CardTitle className="text-base text-neutral-100">Install Script</CardTitle>
                </div>
                <CardDescription className="text-xs text-neutral-400 leading-relaxed">
                    Add this to your website&apos;s &lt;head&gt; section
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="relative">
                    <pre className="bg-neutral-950 border border-neutral-800 text-neutral-100 p-3 rounded-lg overflow-x-auto text-xs font-mono leading-relaxed">
                        <code>
                            <span className="text-neutral-500">&lt;</span>
                            <span className="text-red-400">script</span>
                            {"\n"}
                            {" "}
                            <span className="text-yellow-300">defer</span>
                            {"\n"}
                            {" "}
                            <span className="text-yellow-300">data-website-id</span>
                            <span className="text-neutral-500">=</span>
                            <span className="text-emerald-400">&apos;{website?.websiteId}&apos;</span>
                            {"\n"}
                            {" "}
                            <span className="text-yellow-300">data-domain</span>
                            <span className="text-neutral-500">=</span>
                            <span className="text-emerald-400">
                                &apos;{typeof window !== "undefined" ? window.location.origin : ""}&apos;
                            </span>
                            {"\n"}
                            {" "}
                            <span className="text-yellow-300">src</span>
                            <span className="text-neutral-500">=</span>
                            <span className="text-emerald-400">
                                &quot;{typeof window !== "undefined" ? window.location.origin : ""}/analytics.js&quot;
                            </span>
                            <span className="text-neutral-500">&gt;</span>
                            {"\n"}
                            <span className="text-neutral-500">&lt;/</span>
                            <span className="text-red-400">script</span>
                            <span className="text-neutral-500">&gt;</span>
                        </code>
                    </pre>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-2 right-2 h-7 w-7 bg-neutral-800 border-neutral-700 hover:bg-neutral-700 hover:border-emerald-500/50"
                        onClick={handleCopy}
                    >
                        {copied ? (
                            <Check className="h-3 w-3 text-emerald-400" />
                        ) : (
                            <Copy className="h-3 w-3 text-neutral-400" />
                        )}
                    </Button>
                </div>
                {copied && (
                    <p className="text-xs text-emerald-400 mt-2 text-center">Copied to clipboard!</p>
                )}
            </CardContent>
        </Card>
    )
}