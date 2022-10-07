import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const [inputBoxValue, setInputBoxValue] = useState("");
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    if (inputBoxValue === "") return;

    router.push(`/search?q=${inputBoxValue}`);
  };

  return (
    <form className="px-4 py-4">
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <p className="font-semibold bg-black text-white px-4 py-2 rounded-lg cursor-pointer">
            hypersearch
          </p>
        </Link>
        <InputBox value={inputBoxValue} setValue={setInputBoxValue} />
        <IconButton
          Icon={ArrowRightCircleIcon}
          backgroundColor={"#5603ad"}
          color={"#ffffff"}
          onClick={search}
        />
        <Avatar />
      </div>
      <p className="text-xs text-gray-500 my-4">
        About {results.searchInformation.formattedTotalResults} results in{" "}
        {results.searchInformation.formattedSearchTime}s
      </p>

      <div className="w-full columns-5 gap-x-4">
        {results?.items?.map((result) => (
          <ResultCard key={result.cacheId} result={result} />
        ))}
      </div>
    </form>
  );
}

export default search;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?q=${context.query.q}&key=${process.env.apiKey}&cx=${process.env.cx}`
  );
  const results = await response.json();

  return {
    props: { results: results },
  };
}
