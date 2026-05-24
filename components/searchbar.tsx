"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Show = {
  show: {
    id: number;
    name: string;
    image?: {
      medium: string;
    };
  };
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Show[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchShows = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);

      try {
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${query}`
        );

        const data = await res.json();

        setResults(data.slice(0, 5));
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    const timer = setTimeout(() => {
      fetchShows();
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = () => {
    if (!query) return;

    router.push(`/search?q=${query}`);
  };

  return (
    <div className="relative  w-full bg-transparent border-b-2 border-outline-variant p-3  font-sans text-lg text-on-surface outline-none transition-colors duration-200 focus:border-primary">
      <input
        type="text"
        placeholder="Search series..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full  px-4 py-2 rounded"
      />

      {results.length > 0 && (
        <div className=" top-full  w-full bg-black mt-1 z-50">
          {results.map((item) => (
            <div
              key={item.show.id}
              onClick={() =>
                router.push(`/search?q=${item.show.name}`)
              }
              className="p-3 hover:bg-gray-500 cursor-pointer"
            >
              {item.show.name}
            </div>
          ))}
        </div>
      )}

      {loading && (
        <div className="absolute top-full mt-1">
          Loading...
        </div>
      )}
    </div>
  );
}