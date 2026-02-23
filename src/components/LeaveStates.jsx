const LeaveStat = ({ leaveName='Study', leaveTotal='33', leaveTaken='10' }) => {
  return (
    <div className="px-5 py-3 rounded-lg shadow-lg min-w-[200px] w-max bg-white">
      <h1 className="pb-2 text-blue-500">{leaveName}</h1>
      <h2 className="float-right">
        {" "}
        <span className="text-3xl text-blue-500"> {leaveTaken}</span> /<span className="text-blue-900 font-bold"> {leaveTotal} </span>{" "}
      </h2>
    </div>
  );
};

export default LeaveStat;
