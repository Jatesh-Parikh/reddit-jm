import Image from "next/image";
import Link from "next/link";
import RedditText from "../../public/logo-name.svg";
import RedditMobile from "../../public/reddit-full.svg";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserDropdown } from "./UserDropdown";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="h-[10vh] w-full flex items-center justify-between border-b px-5 lg:px-14 ">
      <Link href={"/"} className="flex items-center gap-x-3">
        <Image
          src={RedditMobile}
          alt="Reddit Mobile Logo"
          className="h-8 w-fit"
        />
        <Image
          src={RedditText}
          alt="Desktop Logo"
          className="h-8 w-fit hidden lg:block"
        />
      </Link>
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        {user ? (
          <UserDropdown userImage={user.picture} />
        ) : (
          <div className="flex items-center gap-x-4">
            <Button variant={"secondary"} asChild>
              <RegisterLink>Sign Up</RegisterLink>
            </Button>
            <Button asChild>
              <LoginLink>Log In</LoginLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
