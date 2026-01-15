import React from 'react'
import { Button } from "@/components/ui/button";
import { Plus, Globe, ExternalLink } from "lucide-react";
const DashboardWebCard = ({website}) => {
  return (
     <div 
                key={website.id} 
                className="group rounded-xl border border-neutral-800 bg-neutral-900 p-5 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition-colors">
                    <Globe className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-white truncate">{website.name}</h3>
                    <p className="text-sm text-neutral-500 truncate">
                      {website.url}
                    </p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-600 transition-all duration-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Analytics
                </Button>
              </div>
  )
}

export default DashboardWebCard