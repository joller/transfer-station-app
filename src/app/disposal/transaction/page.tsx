import Image from "next/image";

export default function Transaction() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-900">
        <h1 className="text-2xl mt-10">Disposal Fee System</h1>
          <div className="w-full max-w-3xl px-2">
            <form className="mt-10 ">
              <h2 className="text-xl w-full border-b-2 mb-4 ">Tires (77)</h2>
                <div className="flex flex-row items-center justify-between my-3">
                  <label htmlFor="tire">Car or Pick-up Truck Tire</label>
                  <div className="flex flex-row items-center">
                    <p>$4.00 x</p>
                    <input className="p-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                  </div>
                </div>
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="tractorTire">Tractor Trailer Tire</label>
                    <div className="flex flex-row items-center">
                      <p>$10.00 x</p>
                      <input className="p-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tractorTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                    </div>
                    
                </div>
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="skidderTire">Skidder Tire</label>
                    <div className="flex flex-row items-center">
                      <p>$20.00 x</p>
                      <input className="p-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="skidderTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                    </div>
                </div>

                <h2 className="text-xl w-full border-b-2 mb-4 ">Bags</h2>
                <div className="flex flex-row items-center justify-between my-3">
                  <label htmlFor="tire">Yellow</label>
                  <div className="flex flex-row items-center">
                    <p>$10.00 x</p>
                    <input className="p-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                  </div>
                </div>
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="tractorTire">Orange</label>
                    <div className="flex flex-row items-center">
                      <p>$10.00 x</p>
                      <input className="p-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tractorTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                    </div>
                    
                </div>
                <h2 className="text-xl w-full border-b-2 mb-4 ">Construction Demolition Debris (CDD) / Wood Waste (81)</h2>
                <div className="flex flex-row items-center justify-between my-3 flex-wrap">
                    <p className=" max-w-xl italic">Box Spring, Clothes, Formica, Insulation, Mattress, Pressure Treated Wood, Sheetrock, Shingles, Shingles, Tarps, Upholstered Furniture</p>
                   
                </div>
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="tractorTire">Demo - Total weight of debris</label>
                    <div className="flex flex-row items-center">
                    <p>$0.12/lb</p>
                    <input className="p-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="tractorTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                    </div>
                </div>
                <div className="flex flex-row justify-between my-3">
                    <label htmlFor="skidderTire">Skidder Tire</label>
                    <input className="p-2 w-20 dark:bg-slate-800 rounded-md" type="text" id="skidderTire" name="Last Name" required={true} minLength={2} placeholder="#"/>
                </div>
                <button className="border px-4 py-2 hover:scale-105 mx-6">Create Receipt</button>
            </form>
          </div>
    </main>
  );
}