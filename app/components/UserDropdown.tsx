import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
