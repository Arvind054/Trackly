"use client"
import { Button } from '@/components/ui/button'
import { WebsiteType } from '@/lib/types'
import axios from 'axios'
import { ArrowLeft, Loader2, Settings, Trash } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ScriptCard from "@/components/ScriptCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Props = {}

export default function SettingsPage({ }: Props) {
    const params = useParams();
    const websiteId = params.websiteId as string;
    const [website, setWebsite] = useState<WebsiteType | null>(null);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [websiteDomain, setWebsiteDomain] = useState<string>('');
    const router = useRouter();

    const fetchWebsite = async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/website/${websiteId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch website");
            }
            const data = await response.json();
            setWebsite(data);
            setWebsiteDomain(data?.domain);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleWebsiteDelete = async () => {
        try {
            setDeleting(true);
            await axios.delete(`/api/website`, {
                data: {
                    websiteId: websiteId
                }
            });
            toast.success("Deleted Successfully");
            router.push("/dashboard");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
            toast.error("Failed to delete website");
        } finally {
            setDeleting(false);
        }
    };

    useEffect(() => {
        fetchWebsite();
    }, []);

    return (
        <div className='w-full max-w-4xl mx-auto px-4 py-8'>
            {/* Header */}
            <div className='mb-8'>
                <Link href={`/dashboard/website/${websiteId}`}>
                    <Button variant="ghost" className='mb-4 text-neutral-400 hover:text-neutral-100'>
                        <ArrowLeft className='mr-2 h-4 w-4' />Back to Dashboard
                    </Button>
                </Link>
                <div className='flex items-center gap-3'>
                    <div className='h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center'>
                        <Settings className='h-5 w-5 text-emerald-500' />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-neutral-100'>
                            Settings
                        </h1>
                        <p className='text-sm text-neutral-400'>
                            {website?.domain?.replace('http://', '').replace('https://', '')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="general" className="w-full">
                <TabsList className='mb-6 bg-neutral-900 border border-neutral-800'>
                    <TabsTrigger value="general" className='data-[state=active]:bg-neutral-800'>General</TabsTrigger>
                    <TabsTrigger value="danger" className='data-[state=active]:bg-neutral-800'>Danger Zone</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className='space-y-6'>
                    {/* Script Card */}
                    <ScriptCard website={website} />

                    {/* Domain Card */}
                    <Card className='bg-neutral-900 border-neutral-800'>
                        <CardHeader>
                            <CardTitle className='text-neutral-100'>Domain Settings</CardTitle>
                            <CardDescription className='text-neutral-400'>
                                Your main website domain for analytics tracking
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            <div className='space-y-2'>
                                <label className='text-sm font-medium text-neutral-300'>Domain</label>
                                <Input 
                                    placeholder='website.com' 
                                    value={websiteDomain} 
                                    onChange={(e) => setWebsiteDomain(e.target.value)}
                                    className='bg-neutral-950 border-neutral-800 text-neutral-100 focus:border-emerald-500'
                                />
                            </div>
                            <Separator className='bg-neutral-800' />
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-sm font-medium text-neutral-300'>Website ID</p>
                                    <p className='text-xs text-neutral-500 font-mono mt-1'>{websiteId}</p>
                                </div>
                                <Button className='bg-emerald-600 hover:bg-emerald-700 text-white'>
                                    Save Changes
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="danger">
                    <Card className='bg-neutral-900 border-red-900/50'>
                        <CardHeader>
                            <CardTitle className='text-red-400'>Danger Zone</CardTitle>
                            <CardDescription className='text-neutral-400'>
                                Irreversible and destructive actions
                            </CardDescription>
                        </CardHeader>
                        <Separator className='bg-neutral-800' />
                        <CardContent className='pt-6'>
                            <div className='flex items-center justify-between p-4 rounded-lg border border-red-900/50 bg-red-950/20'>
                                <div>
                                    <h3 className='font-medium text-neutral-100'>Delete Website</h3>
                                    <p className='text-sm text-neutral-400 mt-1'>
                                        Permanently delete this website and all its analytics data
                                    </p>
                                </div>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant='destructive' className='gap-2'>
                                            <Trash className='h-4 w-4' />
                                            Delete
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className='bg-neutral-900 border-neutral-800'>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle className='text-neutral-100'>
                                                Are you absolutely sure?
                                            </AlertDialogTitle>
                                            <AlertDialogDescription className='text-neutral-400'>
                                                This action cannot be undone. This will permanently delete your website
                                                and remove all analytics data from our servers.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel className='bg-neutral-800 border-neutral-700 text-neutral-100 hover:bg-neutral-700'>
                                                Cancel
                                            </AlertDialogCancel>
                                            <Button 
                                                variant='destructive'
                                                disabled={deleting} 
                                                onClick={() => handleWebsiteDelete()}
                                            >
                                                {deleting ? <Loader2 className='animate-spin h-4 w-4 mr-2' /> : null}
                                                {deleting ? 'Deleting...' : 'Delete Website'}
                                            </Button>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}