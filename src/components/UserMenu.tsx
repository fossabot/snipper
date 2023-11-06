"use client";

import { classNames } from "@/libs";
import { Menu, Transition } from "@headlessui/react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from ".";

export default function UserMenu({ session }: Session | any): JSX.Element {
  if (session && session.user) {
    return (
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative flex rounded-full bg-transparent text-sm">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <Image
              width={36}
              height={36}
              className="rounded-full border-2 border-gray-600 p-0.5"
              src={session.user.image ?? ""}
              alt={session.user.name ?? "User"}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg dark:shadow-zinc-900 ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700 dark:text-gray-300">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={classNames(
                    active ? "bg-gray-200 dark:bg-gray-700" : "",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active
                      ? "bg-red-100 dark:bg-red-500 text-red-500 dark:text-red-100"
                      : "",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                  onClick={() => signOut()}
                >
                  Sign out
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }

  return (
    <Button color="primary" size="sm" className="ml-2" onClick={() => signIn()}>
      Sign In
    </Button>
  );
}

// import {
//   Avatar,
//   Button,
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownTrigger,
// } from "@nextui-org/react";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function UserMenu(): JSX.Element {
//   const { data: session } = useSession();
//   const route = useRouter();

//   if (session && session.user) {
//     return (
//       <div className="flex items-center gap-4">
//         <Dropdown placement="bottom-end" className="select-none">
//           <DropdownTrigger>
//             <Avatar
//               isBordered
//               as="button"
//               className="transition-transform"
//               src={session.user.image ?? ""}
//             />
//           </DropdownTrigger>
//           <DropdownMenu aria-label="Profile Actions" variant="flat">
//             <DropdownItem className="h-14 gap-2">
//               <p className="font-semibold">Signed in as</p>
//               <p className="font-regular">{session.user.name}</p>
//             </DropdownItem>
//             <DropdownItem onClick={() => route.push("/profile")}>
//               Profile
//             </DropdownItem>
//             <DropdownItem onClick={() => route.push("/mylinks")}>
//               My Links
//             </DropdownItem>
//             <DropdownItem onClick={() => route.push("/new")}>
//               New Link
//             </DropdownItem>
//             <DropdownItem color="danger" onClick={() => signOut()}>
//               Log Out
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </div>
//     );
//   }

//   return (
//     <Button color="primary" variant="flat" onClick={() => signIn()}>
//       Sign In
//     </Button>
//   );
// }
