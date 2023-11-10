import { UserButton} from "@clerk/nextjs";
export default function Home() {
  return (
      <div>
          <UserButton afterSignOutUrl={"/"}/>
      </div>



      //To write a state based off of const, write something like
      //"bg-indigo-500", state && "bg-red-500 for true var

  )
}
