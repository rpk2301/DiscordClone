import { Button } from "@/components/ui/button";
import {cn} from "@/lib/utils";


const state = true;
export default function Home() {
  return (
      <div>
      <p className="text-3xl font-bold text-indigo-500">Discord Clone!</p>
          <Button>
              Click Me
          </Button>

      </div>



      //To write a state based off of const, write something like
      //"bg-indigo-500", state && "bg-red-500 for true var

  )
}
