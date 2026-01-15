import { Suspense } from "react"
import { AuthPage } from "@/components/auth-page"

function SignupContent() {
  return <AuthPage mode="signup" />
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-400">Loading...</div>}>
      <SignupContent />
    </Suspense>
  )
}