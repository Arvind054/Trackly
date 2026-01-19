"use client"
import { Button } from '@/components/ui/button'
import { WebsiteType } from '@/lib/types'
import axios from 'axios'
import { ArrowLeft, Loader2, Trash } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ScriptCard from "@/components/ScriptCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
type Props = {}

export default function page({ }: Props) {
    const params = useParams();
    const websiteId = params.websiteId as string;
    const [website, setWebsite] = useState<WebsiteType | null>(null);
    const [loading, setLoading] = useState(true);
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
   const handleWebsiteDelete = async()=>{
      try {
            setLoading(true);
            const response = await axios.delete(`/api/website`, {
                data:{
                   websiteId: websiteId
                }
               
            });
          toast.success("Deleted Successfully");
          router.push("/dashboard");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setLoading(false);
        }
   };
    useEffect(() => {
        fetchWebsite();
    }, []);
    return (
        <div className='w-full mt-10 mb-20'>
            <Button><ArrowLeft />Back</Button>
            <h2>Setting for {website?.domain.replace('http://', '')}</h2>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                    <ScriptCard website={website} />
                    <Card className='mt-6'>
                        <CardTitle>Domain</CardTitle>
                        <CardHeader>Your Main Website Domain for analytics Tracking</CardHeader>
                        <CardContent>
                            <Input placeholder='website.com' value={websiteDomain} onChange={(e) => setWebsiteDomain(e.target.value)} />
                            <div className='flex justify-between mt-2'>
                                <h2>
                                    Your PUBLIC WEBSITE ID IS {websiteId}
                                </h2>
                                <Button>Save</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="other">
                    <Card>
                        <CardHeader>
                            <CardTitle>Danger</CardTitle>
                        </CardHeader>
                        <Separator />
                        <CardContent className='flex justify-between mt-3'>
                            <h2>Are you Sure to Delete this</h2>
                           
                            <AlertDialog>
                                <AlertDialogTrigger asChild><Button className='text-green' variant={'destructive'}><Trash /></Button></AlertDialogTrigger>
                                 
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                       <Button disabled = {loading} onClick={()=>handleWebsiteDelete()}> {loading? <Loader2 className='animate-spin'/>: "Continue"}</Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>


        </div>
    )
}