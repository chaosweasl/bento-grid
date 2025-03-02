//import.meta.glob is lazy-loading but eager: true sets it to import at build time
const images = import.meta.glob("../assets/images/*.webp", { eager: true });

import "../index.css";

export default function App() {
  return (
    <>
      <div className="flex items-center h-screen justify-center">
        <h1 className="text-black italic text-5xl">Hello World</h1>
      </div>
    </>
  );
}
