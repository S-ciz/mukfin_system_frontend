const LeaveStat = ({ leaveName='Study', leaveTotal='33', leaveTaken='10' }) => {

  const randcolors = ['bg-white text-blue-400',  'bg-red-400 text-red-100', 'bg-green-400 text-green-100', 'bg-yellow-400 text-yellow-100' , 'bg-blue-400 text-blue-100' ]
  const randClass = randcolors[ Math.floor(Math.random()*randcolors.length)]
  return (
    <div className={`px-5 py-3 rounded-lg shadow-lg min-w-[200px] w-max ${randClass} `}>
      <h1 className="pb-2 ">{leaveName}</h1>
      <h2 className="float-right">
        {" "}
        <span className="text-3xl"> {leaveTaken}</span> /<span className=" font-bold"> {leaveTotal} </span>{" "}
      </h2>
    </div>
  );
};

export default LeaveStat;
