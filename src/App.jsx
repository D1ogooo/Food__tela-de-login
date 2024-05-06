import { BiBowlHot } from "react-icons/bi";

function App() {
  return (
   <>
    <div className="mx-auto w-90">
     <div className="flex justify-center my-[12.5rem]">
      <form className="flex flex-col w-36 items-center font-poppins">
       <BiBowlHot size={62}/>
       <label className="py-2.5">Email
        <input type="email" placeholder="Email" className="block w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1"/>
       </label>
       <label className="py-1">Password
        <input type="password" placeholder="Password" className="block w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1"/>
       </label>
       <input type="submit" value="Enviar" className="cursor-pointer my-4 bg-slate-800 w-72 h-8 text-cyan-50"/>
      </form>
     </div>
    </div>
   </>
  )
}

export default App
