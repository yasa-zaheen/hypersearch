import InputBox from "../components/InputBox";
import IconButton from "../components/IconButton";
import Avatar from "../components/Avatar";
import ResultCard from "../components/ResultCard";

import {
  ArrowRightCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

import Response from "../Response";

function search({ results }) {
  return (
    <div className="px-4 py-4">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <InputBox />
        <IconButton
          Icon={ArrowRightCircleIcon}
          backgroundColor={"#5603ad"}
          color={"#ffffff"}
        />
        <Avatar />
      </div>

      {/* Results */}
      <div className="w-full columns-5 gap-x-4">
        {results.items.map((result) => (
          <ResultCard key={result.cacheId} result={result} />
        ))}
      </div>
    </div>
  );
}

export default search;

export async function getServerSideProps(context) {
  const results = Response;
  return {
    props: { results: results },
  };
}
