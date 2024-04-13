import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center   bg-slate-900">
            <Image
              src="/town-of-greenville-logo-white.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={180}
              height={50}
              priority
            />
            <div className="flex flex-col text-cyan-900 dark:text-cyan-500 w-full max-w-xl my-6">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col mx-6 my-2" >
                  <label htmlFor="first_name">First Name</label>
                  <input className="p-2 w-60 dark:bg-slate-800" type="text" id="first_name" name="firstname" required={true} minLength={2} placeholder="First Name" size={10}/>
                </div>
                <div className="flex flex-col mx-6 my-2" >
                  <label htmlFor="last_name">Last Name</label>
                  <input className="p-2 w-60 dark:bg-slate-800" type="text" id="last_name" name="lastname" required={true} minLength={2} placeholder="Last Name" size={10}/>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col mx-6 my-2" >
                  <label htmlFor="address">Legal Address</label>
                  <input className="p-2 w-60 dark:bg-slate-800" type="text" id="street" name="street" required={true} minLength={2} placeholder="Street Name" size={10}/>
                </div>
                <div className="flex flex-col mx-6 my-2">
                  <label htmlFor="city">Mailing Address</label>
                  <input className="p-2 w-60 dark:bg-slate-800" type="text" id="street" name="city" required={true} minLength={2} placeholder="Greenville" size={10}/>
                </div>
              </div>
              <h3 className="mx-6 mt-6 font-bold">Vehicle</h3>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col ml-6 mb-2">
                  <label htmlFor="address">Make</label>
                  <input className="p-2 w-60 dark:bg-slate-800" type="text" id="street" name="street" required={true} minLength={2} placeholder="Street Name" size={10}/>
                </div>
                <div className="flex flex-col mx-6 mb-2">
                  <label htmlFor="city">Color</label>
                  <input className="p-2 w-40 dark:bg-slate-800" type="text" id="street" name="city" required={true} minLength={2} placeholder="Color" size={10}/>
                </div>
                <div className="flex flex-col mr-6 mb-2">
                  <label htmlFor="city">Year</label>
                  <input className="p-2 w-20 dark:bg-slate-800" type="text" id="street" name="city" required={true} minLength={2} placeholder="Year" size={10}/>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col mx-6 mb-2">
                  <label htmlFor="address">Plate Number</label>
                  <input className="p-2 w-60 dark:bg-slate-800" type="text" id="street" name="street" required={true} minLength={2} placeholder="Plate Name" size={10}/>
                </div>
                <div className="flex flex-col mx-6 mb-2">
                  <label htmlFor="address">State</label>
                  <select name="states" id="state-select">
  <option value="">--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>
                </div>
              </div>
            </div>
          

          {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
         
    </main>
  );
}
