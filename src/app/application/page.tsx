import Image from "next/image";
import StickerApplication from "./sticker-application"

export default function Application() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-900">
            {/* <Image
              src="/town-of-greenville-logo-white.svg"
              alt="Vercel Logo"
              className="dark:invert pt-10 pb-20"
              width={180}
              height={50}
              priority
            /> */}
            <StickerApplication/>
        
          
    </main>
  );
}