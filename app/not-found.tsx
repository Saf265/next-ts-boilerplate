import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button variant="default" size="lg" asChild>
          <Link href="/">Return to Home Page</Link>
        </Button>
      </div>
    </div>
  );
}
