import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function InputBox() {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 py-2 rounded-lg">
      <MagnifyingGlassIcon className="h-5 mx-2 text-gray-400" />
      <input
        className="w-full outline-none bg-gray-100"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default InputBox;
