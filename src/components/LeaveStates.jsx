import { useEffect, useState } from "react";

const LeaveStat = ({ leaveName='Study', leaveTotal='33', leaveTaken='10' }) => {

  const [randcolors] = useState( ['bg-blue-400 text-blue-100' ])
  const [randClass, setRandClass]  = useState()
 

  useEffect(()=>{
   setRandClass(randcolors[ Math.floor(Math.random()*randcolors.length)])
  }, [])


  return (
    <div className={`px-5 py-3 rounded-lg shadow-lg  min-w-full ${randClass} `}>
      <h1 className="pb-2 underline text-lg font-bold">{leaveName}</h1>

         <div className="flex gap-3 flex-wrap justify-between">
           
            <span>Total: <strong>{leaveTotal}</strong> </span>
            <span>Used: <strong>{leaveTaken}</strong></span>
            <span>Remain: <strong> {leaveTotal - leaveTaken }</strong></span>
         
         </div>
   
    </div>
  );
};

export default LeaveStat;
