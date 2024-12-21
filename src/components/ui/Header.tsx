import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Title } from "./Title";

export const Header = () => {
  return (
    <header className="sticky left-0 right-0 top-0 flex justify-center border-b border-zinc-200 bg-white">
      <nav className="flex max-w-screen-xl grow items-center justify-between gap-3 p-2 py-3 sm:p-4">
        {/* image/logo placeholder */}
        <div className="leading-4">
          <Logo />
        </div>

        {/* title placeholder */}
        <div className="hidden flex-none basis-auto text-center lg:block">
          <Title />
        </div>

        {/* menu placeholder */}
        <div className="flex items-center justify-end gap-1 sm:gap-4">
          <Menu />
        </div>
      </nav>
    </header>
  );
};

/* import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'

import { Button } from '@/components/ui/button.tsx' */

/*          {!isLoggedIn ? (
           <DropdownMenu>
             <DropdownMenuTrigger asChild>
               <Button variant='ghost'>
                 <div className='flex items-center gap-2'>
                   <Avatar>
                     <AvatarImage
                       src={`https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80`}
                     />
                     <AvatarFallback>CN</AvatarFallback>
                   </Avatar>

                   <div className='flex flex-col text-left'>
                     <span className='text-sm font-medium'>John Doe</span>
                     <span className='text-xs text-zinc-500'>
                       john.doe@nfctron.com
                     </span>
                   </div>
                 </div>
               </Button>
             </DropdownMenuTrigger>
             <DropdownMenuContent className='w-[250px]'>
               <DropdownMenuLabel>John Doe</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuGroup>
                 <DropdownMenuItem disabled>Logout</DropdownMenuItem>
               </DropdownMenuGroup>
             </DropdownMenuContent>
           </DropdownMenu>
         ) : (
           <Button disabled variant='secondary'>
             Login or register
           </Button>
         )} */
