import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import { ModeToggle } from "../theme/toggle-theme";
import { Button } from "../ui/button";

export default function Topbar() {
  return (
    <div className="w-full bg-transparent sticky h-20 top-0">
      <div className="flex items-center justify-between w-full px-4 h-full ">
        <div className="flex  items-center gap-2 h-5 ">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" />
          <div className="text-sm">
            <span className="font-medium">1000</span> Credits
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="secondary">
            <Plus /> Get more credits
          </Button>
        </div>
      </div>
    </div>
  );
}
