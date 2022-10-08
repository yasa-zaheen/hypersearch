import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import searchGoogle from "../functions/searchGoogle";

import useAuthState from "../hooks/useAuthState";

import InputBox from "../components/InputBox";
import IconButton from "../components/IconButton";
import Avatar from "../components/Avatar";
import ResultCard from "../components/ResultCard";
import ResultsSkeleton from "../components/ResultsSkeleton";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Search() {
  const user = useAuthState();
  const [results, setResults] = useState();
  const [inputBoxValue, setInputBoxValue] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?q=${router.query.q}&key=${process.env.apiKey}&cx=${process.env.cx}`
    ).then((res) => {
      res.json().then((r) => {
        setResults(r);
      });
    });
  }, [router.query.q]);

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
          onClick={(e) => {
            searchGoogle(e, router, inputBoxValue, user);
            setResults();
          }}
        />
        <Avatar src={user?.photoURL} />
      </div>

      <p className="text-xs text-gray-500 my-4">
        {results
          ? `About ${
              results?.searchInformation?.formattedTotalResults
            } results in${" "}
         ${results?.searchInformation?.formattedSearchTime}s `
          : `Loading...`}
      </p>

      {results ? (
        <div className="w-full columns-5 gap-x-4">
          {results?.items?.map((result) => (
            <ResultCard key={result.cacheId} result={result} />
          ))}
        </div>
      ) : (
        <ResultsSkeleton />
      )}
    </form>
  );
}
