

export default function StickerApplication() {
    return (
        
        <div className="flex flex-col text-cyan-900 dark:text-white w-full max-w-xl my-6 ">
            <h1 className="text-2xl text-center weight-bold text-white">New Sticker Application</h1>
            <div className="flex flex-row justify-between mt-10">
                <div className="flex flex-col mx-6 my-2" >
                    <label htmlFor="first_name">First Name</label>
                    <input className="p-2 w-60 dark:bg-slate-800 mt-1" type="text" id="first_name" name="firstname" required={true} minLength={2} placeholder="First Name" size={10}/>
                </div>
                <div className="flex flex-col mx-6 my-2" >
                    <label htmlFor="last_name">Last Name</label>
                    <input className="p-2 w-60 dark:bg-slate-800 mt-1" type="text" id="last_name" name="lastname" required={true} minLength={2} placeholder="Last Name" size={10}/>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col mx-6 my-2" >
                    <label htmlFor="address">Legal Address</label>
                    <input className="p-2 w-60 dark:bg-slate-800 mt-1" type="text" id="street" name="street" required={true} minLength={2} placeholder="Street Name" size={10}/>
                </div>
                <div className="flex flex-col mx-6 my-2">
                    <label htmlFor="city">Mailing Address</label>
                    <input className="p-2 w-60 dark:bg-slate-800 mt-1" type="text" id="street" name="city" required={true} minLength={2} placeholder="Greenville" size={10}/>
                </div>
            </div>
            <h3 className="mx-6 mt-6 font-bold text-white mb-4">Vehicle</h3>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col ml-6 mb-2">
                    <label htmlFor="address">Make</label>
                    <input className="p-2 w-60 dark:bg-slate-800 mt-1" type="text" id="street" name="street" required={true} minLength={2} placeholder="Street Name" size={10}/>
                </div>
                <div className="flex flex-col mx-6 mb-2">
                    <label htmlFor="city">Color</label>
                    <input className="p-2 w-40 dark:bg-slate-800 mt-1" type="text" id="street" name="city" required={true} minLength={2} placeholder="Color" size={10}/>
                </div>
                <div className="flex flex-col mr-6 mb-2">
                    <label htmlFor="city">Year</label>
                    <input className="p-2 w-20 dark:bg-slate-800 mt-1" type="text" id="street" name="city" required={true} minLength={2} placeholder="Year" size={10}/>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col mx-6 mb-2">
                    <label htmlFor="address">Plate Number</label>
                    <input className="p-2 w-60 dark:bg-slate-800 mt-1" type="text" id="street" name="street" required={true} minLength={2} placeholder="Plate Name" size={10}/>
                </div>
                <div className="flex flex-col mx-6 mb-2">
                    <label htmlFor="address">State</label>
                    <select name="states" id="state-select" className="p-2 w-40 dark:bg-slate-800 mt-1">
                    <option value="">--</option>
                    <option value="maine">Maine</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Montana">Montana</option>
                    <option value="Alaska">Alaksa</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Wyoming">Wyoming</option>
                    </select>
                </div>
            </div>
            <h3 className="mx-6 mt-6 font-bold text-white mb-4">Sticker</h3>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col ml-6 mb-2">
                    <label htmlFor="address">Registration #</label>
                    <input className="p-2 w-60 dark:bg-slate-800 mt-1" type="text" id="street" name="street" required={true} minLength={2} placeholder="example: 215" size={10}/>
                </div>
              
                <button className="border bg-white text-slate-900 dark:text-slate-900 font-bold rounded-lg px-6 py-3 hover:scale-105 mx-6">Submit</button>

                
            </div>
            
        </div>
    )
}

