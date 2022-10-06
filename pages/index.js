import Head from "next/head";

import InputBox from "../components/InputBox";
import IconButton from "../components/IconButton";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="px-4 py-4 h-screen w-full flex items-center justify-center">
      <Head>
        <title>hypersearch</title>
      </Head>

      <div className="flex items-center justify-center w-3/4 space-x-2">
        <InputBox />
        <IconButton Icon={ArrowRightCircleIcon} />
      </div>
    </div>
  );
}
