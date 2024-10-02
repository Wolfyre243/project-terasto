import Image from "next/image";

import { LoginForm } from "./ui/login";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="mb-10">
        <h1 className="text-center text-6xl mb-3">Project Terasto</h1>
        <h2 className="text-center text-xl">One place to store it all.</h2>
      </div>
      <div className="mb-5">
        <h2 className="text-center text-2xl">Login Interface</h2>
        <p className="text-center text-sm">This is just for show; TODO: Implement Login Page</p>
      </div>
      <div className="w-1/3 flex flex-row">
        <LoginForm />
      </div>
    </main>
  );
}
