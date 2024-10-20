import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";


import { Filters } from "./filters";
import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";
import { WelcomeMsg } from "./welcome-msg";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[#1f1f1f] to-[#1d1d1d] px-4 py-8 lg:px-14 lg:pb-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>

          <div className="flex items-center gap-x-2">
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/" />
            </ClerkLoaded>

            <ClerkLoading>
              <Loader2 className="size-8 animate-spin text-slate-700" />
            </ClerkLoading>

          </div>
        </div>

        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  );
};
