import Image from "next/image";

export default function Transaction() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-900">
          <h1 className="text-2xl mt-6 font-medium">Disposal Fee System</h1>
          <div className="w-full max-w-3xl px-2">
            <form className="mt-10 ">
              <h2 className="text-xl w-full border-b-2 mb-4 ">Tires</h2>
                <div className="flex flex-row items-center justify-between my-">
                  <label htmlFor="tire">Car or Pick-up Truck Tire</label>
                  <div className="flex flex-row items-center">
                    <p>$4.00 x</p>
                    <input className="p-2 ml-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                  </div>
                </div>
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="tractorTire">Tractor Trailer Tire</label>
                    <div className="flex flex-row items-center">
                      <p>$10.00 x</p>
                      <input className="p-2 ml-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tractorTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                    </div>
                </div>
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="skidderTire">Skidder Tire</label>
                    <div className="flex flex-row items-center">
                      <p>$20.00 x</p>
                      <input className="p-2 ml-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="skidderTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                    </div>
                </div>

                <h2 className="text-xl w-full border-b-2 my-6">Bags</h2>
                <div className="flex flex-row items-center justify-between my-3">
                  <label htmlFor="tire">Yellow</label>
                  <div className="flex flex-row items-center">
                    <p>$10.00 x</p>
                    <input className="p-2 ml-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                  </div>
                </div>
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="tractorTire">Orange</label>
                    <div className="flex flex-row items-center">
                      <p>$10.00 x</p>
                      <input className="p-2 ml-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tractorTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                    </div>
                </div>

                <h2 className="text-xl w-full border-b-2 my-6 ">Metals</h2>
                <div className="flex flex-row items-center justify-between my-3">
                  <label htmlFor="tire">Appliance With Freon</label>
                  <div className="flex flex-row items-center">
                    <p>$10.00 x</p>
                    <input className="p-2 ml-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                  </div>
                </div>
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="tractorTire">Propane tank 20lb. Propane cylindders with valves in-tact</label>
                    <div className="flex flex-row items-center">
                      <p>$5.00 x</p>
                      <input className="p-2 ml-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tractorTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                    </div>
                </div>
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="tractorTire">Other</label>
                    <div className="flex flex-row items-center">
                    <p>$</p>
                    <input className="p-2 mx-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tractorTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                      <p>x</p>
                      <input className="p-2 ml-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tractorTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                    </div>
                </div>


                <h2 className="text-xl w-full border-b-2 mb-4 ">Construction Demolition Debris (CDD) / Wood Waste</h2>
                <div className="flex flex-row items-center justify-between my-3 flex-wrap">
                    <p className=" max-w-xl italic">Box Spring, Clothes, Formica, Insulation, Mattress, Pressure Treated Wood, Sheetrock, Shingles, Shingles, Tarps, Upholstered Furniture</p>
                   
                </div>
               
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="tractorTire">Demo - Total weight of debris</label>
                    <div className="flex flex-row items-center">
                    <p>$0.12/lb</p>
                    <input className="p-2 ml-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tractorTire" name="Last Name" required={true} minLength={2} placeholder="00"/>
                    </div>
                </div>

                <div className="flex flex-row justify-between my-9">
                    <p>Total</p>
                    <p>$00.00</p>
                </div>
                <div className="w-full flex flex-row justify-end my-9">
                <button className="border px-8 bg-white text-slate-900 font-bold py-2 hover:scale-105 rounded-md">Complete Transaction</button>
                </div>
              
            </form>
          </div>
    </main>
  );
}