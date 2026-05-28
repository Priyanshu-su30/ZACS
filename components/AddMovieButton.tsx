
// "use client";

// import { useState } from "react";

// type Props = {
//   movie: string;
// };

// export default function AddMovieButton({
//   movie,
// }: Props) {
//   const [loading, setLoading] = useState(false);

//   const handleAdd = async () => {
//     try {
//       setLoading(true);

//       const res = await fetch("/api/add-movie", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           movie,
//         }),
//       });

//       const data = await res.json();

//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleAdd}
//       disabled={loading}
//       className="w-full md:w-auto bg-primary text-on-primary font-sans text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-lg shadow-[4px_4px_0_var(--color-primary)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:bg-primary-container hover:-translate-y-[2px] active:shadow-none active:translate-x-1 active:translate-y-1 whitespace-nowrap"
//     >
//       <span className="material-symbols-outlined font-bold">
//         {loading ? "..." : "Add"}
//       </span>
//     </button>
//   );
// }

"use client";
type Props = {
  series: {
    id: number;
    name: string;
    image: string;
    genres: string[];
    rating: number | null;
    premiered: string;
  };
};

export default function AddMovieButton({
  series,
}: Props) {
  const handleAdd = async () => {
    await fetch("/api/add-series", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(series),
    });
  };

  return (
    <button onClick={handleAdd} className="w-full md:w-auto bg-primary text-on-primary font-sans text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-lg shadow-[4px_4px_0_var(--color-primary)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:bg-primary-container hover:-translate-y-[2px] active:shadow-none active:translate-x-1 active:translate-y-1 whitespace-nowrap">
      Add
    </button>
  );
}
