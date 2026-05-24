type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const query = params.q || "";

  const res = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Results for "{query}"
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item: any) => (
          <div
            key={item.show.id}
            className="border rounded p-3"
          >
            <img
              src={
                item.show.image?.medium ||
                "/placeholder.png"
              }
              alt={item.show.name}
              className="w-full rounded"
            />

            <div className="mt-2 bg- flex items-center justify-between">
                <h2 className="font-semibold">
                {item.show.name}
                </h2>
                <button className="w-full md:w-auto bg-primary text-on-primary font-sans text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-lg shadow-[4px_4px_0_var(--color-primary)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:bg-primary-container hover:-translate-y-[2px] active:shadow-none active:translate-x-1 active:translate-y-1 whitespace-nowrap">
                    <span className="material-symbols-outlined font-bold">Add</span>
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}