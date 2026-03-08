import { useEffect, useState } from "react";

import { updateUserAnnualLeave } from "../services/api";

const Card = ({
  user = { name: "stan", surname: "Cizungu", outstanding_annual: 15 },
}) => {
  const [annual, setAnnual] = useState(0);

  useEffect(() => {
    setAnnual(user.outstanding_annual);
  }, []);

  async function updateLeave() {
    let res = await updateUserAnnualLeave(user._id, annual);
    if (res.success) {
      alert("Successfully updated");
    } else {
      alert("Failed to update, try again later!");
    }
  }

  return (
    <div className=" md:min-w-[200px] min-w-full rounded-lg shadow-lg bg-white px-5 py-2">
      <h3 className="py-3 font-bold text-blue-700">
        {user.name} {user.surname}
      </h3>

      <section>
        <label className="text-gray-500 block">Outstanding annual leave</label>
        <input
          onChange={(e) => setAnnual(e.target.value)}
          value={annual}
          className="w-full hover:outline-dotted border mb-2 rounded-lg text-center p-2"
          type="number"
        />
        <button
          onClick={() => updateLeave()}
          className="w-full px-5 py-2 rounded-lg border hover:bg-blue-500 hover:text-white"
        >
          Update
        </button>
      </section>
    </div>
  );
};

const YearLeaveComp = ({ list }) => {
  const [hidden, setHidden] = useState(false);
  return (
    <div>
      <h1 className="text-gray-900 text-xl p-3 flex justify-between flex-wrap gap-2">
        <span className="font-semibold">Annual Leave fields</span>
        <small>
          {" "}
          <button
            onClick={() => setHidden(!hidden)}
            className="bg-white px-5 text"
          >
            {hidden ? "Hide" : "Show"}
          </button>{" "}
        </small>
      </h1>
      {hidden && (
        <section className="flex flex-wrap items-center gap-3">
          {list.map((item) => (
            <Card key={item._id} user={item} />
          ))}
        </section>
      )}
    </div>
  );
};

export default YearLeaveComp;
