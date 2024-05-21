import Image from "next/image";

export default function Disposal() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-900">
        <h1 className="text-2xl mt-10">Disposal - Customer lookup</h1>
          <div>
            <form className="mt-10">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col ml-6 mb-4">
                        <label htmlFor="address">Last Name</label>
                        <input className="p-2 w-60 dark:bg-slate-800" type="text" id="lastName" name="Last Name" required={true} minLength={2} placeholder="Last Name" size={10}/>
                    </div>
                    <div className="flex flex-col mx-6 mb-2">
                        <label htmlFor="city">First Name</label>
                        <input className="p-2 w-40 dark:bg-slate-800" type="text" id="street" name="city" required={true} minLength={2} placeholder="First Name" size={10}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between"> 
                    <div className="flex flex-col mx-6 mb-2">
                        <label htmlFor="city">Tax Exempt Entity</label>
                        <input className="p-2 w-40 dark:bg-slate-800" type="text" id="street" name="city" required={true} minLength={2} placeholder="Ex: Northern lights" size={10}/>
                    </div>
                    <div className="flex flex-col mx-6 mb-2">
                        <label htmlFor="city">Sticker</label>
                        <input className="p-2 w-40 dark:bg-slate-800" type="text" id="street" name="sticker" required={true} minLength={2} placeholder="# 12345" size={10}/>
                    </div>
                    <div className="flex flex-col mx-6 mb-2">
                        <label htmlFor="city">License plate</label>
                        <input className="p-2 w-40 dark:bg-slate-800" type="text" id="street" name="sticker" required={true} minLength={2} placeholder="# 12345" size={10}/>
                    </div>
                </div>
                <div className="flex flex-row justify-end mt-4">
                    <a href="/application" className="border px-4 py-2 hover:scale-105 rounded-md  font-medium">Add New Customer</a>
                     <button className="border px-4 py-2 hover:scale-105 mx-6 rounded-md bg-white text-slate-950 font-medium">Find Customer</button>
                </div>
            </form>
          </div>
    </main>
  );
}