import { UserButton} from "@clerk/nextjs";
import {ModeToggle} from "@/components/mode-toggle";
export default function Home() {
  return (
      <div>
          <UserButton afterSignOutUrl={"/"}/>
          <ModeToggle></ModeToggle>
      </div>



      //To write a state based off of const, write something like
      //"bg-indigo-500", state && "bg-red-500 for true var

  )
}
