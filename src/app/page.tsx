import Image from "next/image";
import Homepage from "./home/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="text-2xl">
         <Homepage/>
        </div>
    </div>
    </main>
  );
}
