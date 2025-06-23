"use client";

import Scroll from "./scroll";
import Logo from "./logo";

export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen w-screen relative">
      <Logo/>
      <Scroll side="left"/>
      <Scroll side="right"/>
    </main>
  );
}
