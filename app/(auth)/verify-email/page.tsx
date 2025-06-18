import OpenGmailButton from "@/components/Button/OpenGmailButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { brandName } from "@/config/config";
import { AlertCircle, Inbox, Mail } from "lucide-react";

export default function VerifyEmail() {
  return (
    <div className="flex items-center w-full justify-center min-h-screen py-8">
      <Card className="max-w-md w-full">
        <CardHeader className="space-y-2 text-center">
          <div className="bg-primary-foreground rounded-full p-3 w-12 h-12 mx-auto flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Check your email</h1>
          <p className="text-muted-foreground">
            We've sent a magic link to your email address. Click on this link to
            sign in to {brandName}.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <OpenGmailButton />
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <Inbox className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <h3 className="font-medium">Check your inbox</h3>
                <p className="text-sm text-muted-foreground">
                  The magic link should arrive in the next few minutes. Remember
                  to refresh your inbox.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Check your spam folder</h3>
                <p className="text-sm text-muted-foreground">
                  If you can't find the email in your inbox, please check your
                  spam or junk folder.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Haven't received the email? Check your spam folder
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
