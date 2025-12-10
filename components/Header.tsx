import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../src/logo.png"


function Header() {
  return (

    <header className='max-w-[1380px] mx-auto bg-black/50 flex justify-between items-center h-16 px-4 py-1 my-4 rounded-2xl'>
      <div className='flex items-center text-white font-bold gap-2 flex text-2xl'>
        <Image src={logo} alt="logo" className='size-6' />
        Vaultflow
      </div>
      <NavigationMenu className='text-white/50 text-base'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Features
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem><NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button className='text-base'>Download the app</Button>
    </header>

  )
}

export default Header
