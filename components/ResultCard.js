import Image from "next/image";
import Link from "next/link";

function resultCard({ result }) {
  return (
    <Link href={result.link}>
      <div className="bg-white break-words border-2 rounded-lg mb-4 p-4 break-inside-avoid cursor-pointer hover:border-[#f0fff1] hover:bg-[#f0fff1] hover:scale-105 hover:shadow-lg active:scale-95 active:brightness-75 duration-100 ease-in-out">
        {result.pagemap.cse_image ? (
          <div className="w-full h-52 rounded-lg relative overflow-hidden">
            <Image
              src={result.pagemap.cse_image[0].src}
              layout="fill"
              className="object-cover"
            />
          </div>
        ) : (
          <p>No Image</p>
        )}
        <p className="text-xs text-gray-500 mt-2">{result.link}</p>
        <p className="text-md font-semibold">{result.title}</p>
        <p className="text-sm">{result.snippet}</p>
      </div>
    </Link>
  );
}

export default resultCard;
