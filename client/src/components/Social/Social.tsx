import fb from "../../assets/svg/fb.svg";
import ins from "../../assets/svg/ins.svg";
import link from "../../assets/svg/link.svg";
import yt from "../../assets/svg/yt.svg";

const Social = () => {
  return (
    <ul className="flex-wrap gap-4 mx-auto flex flex-row items-center justify-start">
      <li className="w-12 cursor-pointer h-12 border p-2 rounded-full bg-white">
        <img src={fb} alt="facebook logo" className="w-full object-cover" />
      </li>
      <li className="w-12 cursor-pointer h-12 border p-2 rounded-full bg-white">
        <img src={ins} alt="instagram logo" className="w-full object-cover" />
      </li>
      <li className="w-12 cursor-pointer h-12 border p-2 rounded-full bg-white">
        <img src={yt} alt="youtube logo" className="w-full object-cover" />
      </li>
      <li className="w-12 cursor-pointer h-12 border p-2 rounded-full bg-white">
        <img src={link} alt="linkedin logo" className="w-full object-cover" />
      </li>
    </ul>
  );
};

export default Social;
