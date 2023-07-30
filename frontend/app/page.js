import ReduxFour from "@/components/ReduxFour";
import ReduxOne from "@/components/ReduxOne";
import ReduxThree from "@/components/ReduxThree";
import ReduxTwo from "@/components/ReduxTwo";
import User from "@/components/User";
import UserLogin from "@/components/UserLogin";
import UserUpdate from "@/components/UserUpdate";
import UserDetails from "@/components/UserDetails";
import Image from "next/image";
import UserData from "@/components/UserData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-5">
      <div className="flex gap-4">
        <User />

        <UserLogin />
      </div>
      <UserDetails />
    </main>
  );
}
