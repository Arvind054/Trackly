import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Card, CardContent, CardHeader } from '../ui/card'

type Props = {}

export default function WebsiteScriptLoader({}: Props) {
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
  )
}