import { useState } from "react";
import { RangeInputProps } from "../../types";

const RangeInput: React.FC<RangeInputProps> = ({ isRefetching, setPrice }) => {
  const [value, setValue] = useState(300);
  return (
    <div className="flex items-start md:min-w-[300px] flex-col justify-start w-full md:w-auto">
      <label htmlFor="range" className="font-semibold">
        Price
      </label>
      <input
        className="w-full accent-neutral-800"
        id="range"
        type="range"
        min={0}
        max={300}
        onChange={(e) => setValue(parseInt(e.target.value))}
        value={value}
        disabled={isRefetching}
        onMouseUp={() => setPrice(value)}
      />
      <span>$0 - ${value}</span>
    </div>
  );
};

export default RangeInput;
