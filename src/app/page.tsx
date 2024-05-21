import Image from "next/image";
// import StickerApplication from "../application/sticker-application"

import {db, raw} from "../../lib/db"

// export async function getServerSideProps() {
//   // const message = await db("Message").first("text").where({ id: 1 });
//  const message = "hello"

//   return {
//     props: { message.text },
//   };
// };

export default function Home({message}) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-900">
         
            {/* <StickerApplication/> */ message}
        
          
    </main>
  );
}

