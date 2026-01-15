"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Copy, Check } from "lucide-react";

interface Website {
  id: number;
  websiteId: string;
  domain: string;
  timeZone: string;
  enabledLocalhostTracking: boolean;
  userEmail: string;
}

export default function WebsitePage() {
  const params = useParams();
  const id = params.id as string;
  const [website, setWebsite] = useState<Website | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchWebsite = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/website/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch website");
        }
        const data = await response.json();
        setWebsite(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchWebsite();
    }
  }, [id]);

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getScriptSnippet());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-10 px-4 max-w-3xl">
        <Skeleton className="h-10 w-64 mb-6" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48 mb-2" />
            <Skeleton className="h-4 w-full" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-40 w-full rounded-lg" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 px-4 max-w-3xl">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!website) {
    return (
      <div className="container mx-auto py-10 px-4 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Website Not Found</CardTitle>
            <CardDescription>
              The website you&apos;re looking for doesn&apos;t exist.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">{website.domain}</h1>

      <Card>
        <CardHeader>
          <CardTitle>Install the WebTrack Script</CardTitle>
          <CardDescription>
            Copy and paste the following script into the &lt;head&gt; section of
            your website&apos;s HTML.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <pre className="bg-zinc-950 text-zinc-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
              <code>
                <span className="text-zinc-400">&lt;</span>
                <span className="text-red-400">script</span>
                {"\n"}
                {"  "}
                <span className="text-yellow-300">defer</span>
                {"\n"}
                {"  "}
                <span className="text-yellow-300">data-website-id</span>
                <span className="text-zinc-400">=</span>
                <span className="text-green-400">&apos;{website.websiteId}&apos;</span>
                {"\n"}
                {"  "}
                <span className="text-yellow-300">data-domain</span>
                <span className="text-zinc-400">=</span>
                <span className="text-green-400">
                  &apos;{typeof window !== "undefined" ? window.location.origin : ""}&apos;
                </span>
                {"\n"}
                {"  "}
                <span className="text-yellow-300">src</span>
                <span className="text-zinc-400">=</span>
                <span className="text-green-400">
                  &quot;{typeof window !== "undefined" ? window.location.origin : ""}/analytics.js&quot;
                </span>
                <span className="text-zinc-400">&gt;</span>
                {"\n"}
                <span className="text-zinc-400">&lt;/</span>
                <span className="text-red-400">script</span>
                <span className="text-zinc-400">&gt;</span>
              </code>
            </pre>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-3 right-3 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4 text-zinc-400" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}