export default function Home() {
  return (
    <div className="">
      <header className="w-full bg-neutral-800 p-0 m-0">
        <div className="container p-5 m-auto  border-neutral-950">
          <h1 className="text-3xl font-bold uppercase text-white">Header</h1>
        </div>
      </header>
      <main className="container m-auto">
        <div className="relative -my-1 grid grid-cols-xs sm:grid-cols-sm md:grid-cols-md lg:grid-cols-lg">
          <div className="col-start-2 col-end-3">
            <div className="grid grid-cols-1">
              <div className="p-5 text-center">Cell 1</div>
              <div className="block">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
                  <div className="p-5 text-center col-span-full">Cell 2</div>
                  <div className="p-5 text-center grid grid-cols-1">Cell 3</div>
                  <div className="p-5 text-center grid grid-cols-1">Cell 4</div>
                  <div className="p-5 text-center grid grid-cols-1">Cell 5</div>
                  <div className="p-5 text-center grid grid-cols-1">Cell 6</div>
                  <div className="p-5 text-center grid grid-cols-1">Cell 7</div>
                  <div className="p-5 text-center grid grid-cols-1">Cell 8</div>
                  <div className="p-5 text-center grid grid-cols-1">Cell 9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
