import { Suspense } from "react"
import { AuthPage } from "@/components/auth-page"

function LoginContent() {
  return <AuthPage mode="login" />
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-400">Loading...</div>}>
      <LoginContent />
    </Suspense>
  )
}