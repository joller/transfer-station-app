import Image from "next/image";


export default function Customers() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-900">
   
   <div className="flex flex-col text-cyan-900 dark:text-white w-full max-w-xl my-6 ">
            <h1 className="text-2xl text-center weight-bold text-white">Customer Lookup</h1>
            <div className="flex flex-row justify-between mt-10">
                <div className="flex flex-col mx-6 my-2" >
                    <label htmlFor="first_name">First Name</label>
                    <input className="p-2 w-60 dark:bg-slate-800 mt-1 rounded-md" type="text" id="first_name" name="firstname" required={true} minLength={2} placeholder="First Name" size={10}/>
                </div>
                <div className="flex flex-col mx-6 my-2" >
                    <label htmlFor="last_name">Last Name</label>
                    <input className="p-2 w-60 dark:bg-slate-800 mt-1 rounded-md" type="text" id="last_name" name="lastname" required={true} minLength={2} placeholder="Last Name" size={10}/>
                </div>
            </div>
          
            
        </div>
        
          
    </main>
  );
}