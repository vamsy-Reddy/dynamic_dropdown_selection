import React from "react";
import { useState } from "react";

const Options = {
  Luxury: ["LUX-1", "LUX-2", "LUX-3"],
  "Suite Room": ["SR-1", "SR-2", "SR-3", "SR-4"],
  Deluxe: ["DL-1", "DL-2", "DL-3", "DL-4"],
  Demo: ["DM-1", "DM-2", "DM-3", "DM-4"]
};

const RoomSelection = () => {
  const [dynamicOptions, setdynamicOptions] = useState([]);

  const selectedInput = (e) => {
    const input = e.target.value;
    console.log(input);
    console.log(Options);
    setdynamicOptions(Options[input]);
  };
  return (
    <>
      <div>
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          onChange={selectedInput}
        >
          <option selected>Select</option>
          <option value="Luxury">LUXURY</option>
          <option value="Suite Room">SUITE ROOM</option>
          <option value="Deluxe">DELUXE</option>
          <option value="Demo">DEMO</option>
        </select>
      </div>
      <br />
      <div>
        {dynamicOptions && (
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Options</option>
            {dynamicOptions.map((opt) => (
              <option value={opt}>{opt}</option>
            ))}
          </select>
        )}
      </div>
    </>
  );
};

export default RoomSelection;
