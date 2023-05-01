import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-cover flex flex-col justify-between text-center items-center mt-20 w-screen">
      <div className="bg-white border-[#050A2F] flex flex-col justify-center text-center items-center p-10 rounded-3xl border-dashed pt-16 pb-16">
        <Image
          src="/1.png"
          width={100}
          height={100}
          alt="logo"
          className="rounded-[100%]"
        />
        <h1 className="text-xl mb-3 mt-5 font-medium sm:text-2xl xl:text-3xl sm:mb-5 2xl:text-6xl 2xl:mt-20 2xl:mb-16">
          Welcome to <span className="font-bold">Meme-O-Quiz</span>
        </h1>
        <p className="mb-4 font-medium sm:text-lg xl:text-xl sm:mb-5 2xl:text-4xl 2xl:mb-16">
          A Meme Based Quiz App
        </p>
        <Link href="/level1">
          <button className="bg-transparent hover:bg-[#243AFD] text-[#243AFD] sm:text-lg xl:text-xl 2xl:text-4xl font-semibold hover:text-white py-2 px-4 2xl:py-6 2xl:px-10 2xl:rounded-xl border border-[#243AFD] hover:border-transparent rounded">
            Play Level 1
          </button>
        </Link>
      </div>
    </div>
  );
}
