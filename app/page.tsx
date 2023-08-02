/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main className="h-screen">
      <section id="about" className="flex items-center h-1/3">
        <div className="flex flex-col gap-4">
          <h2 className="text-6xl md:text-7xl font-thin">
            Hi, I'm <span className="text-red-500">Eetu</span>
          </h2>
          <span className="ml-1 text-sm leading-7 md:ml-10 ">
            I'm a <span className="text-red-500">Fullstack developer</span> /{" "}
            <span className="text-yellow-500">Security system installer</span>
          </span>
        </div>
      </section>
    </main>
  );
}
