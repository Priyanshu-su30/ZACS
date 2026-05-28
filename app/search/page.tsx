// import AddMovieButton from "@/components/AddMovieButton";

// type Props = {
//   searchParams: Promise<{
//     q?: string;
//   }>;
// };

// export default async function SearchPage({
//   searchParams,
// }: Props) {
//   const params = await searchParams;

//   const query = params.q || "";

//   const res = await fetch(
//     `https://api.tvmaze.com/search/shows?q=${query}`,
//     {
//       cache: "no-store",
//     }
//   );

//   const data = await res.json();

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">
//         Results for "{query}"
//       </h1>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {data.map((item: any) => (
//           <div
//             key={item.show.id}
//             className="border rounded p-3"
//           >
//             <img
//               src={
//                 item.show.image?.medium ||
//                 "/placeholder.png"
//               }
//               alt={item.show.name}
//               className="w-full rounded"
//             />

//             <div className="mt-2 bg- flex items-center justify-between">
//                 <h2 className="font-semibold">
//                 {item.show.name}
//                 </h2>
//                 <AddMovieButton
//                   movie={item.show.name}
//                 />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import AddMovieButton from "@/components/AddMovieButton";

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
        {data.map((item: any) => {
          const show = item.show;

          const seriesData = {
            id: show.id,
            name: show.name,
            image:
              show.image?.medium ||
              "/placeholder.png",
            genres: show.genres,
            rating: show.rating?.average,
            premiered: show.premiered,
          };

          return (
            <div
              key={show.id}
              className="border rounded p-3"
            >
              <img
                src={seriesData.image}
                alt={seriesData.name}
                className="w-full rounded"
              />

              <div className="mt-2 flex items-center justify-between gap-2">
                <h2 className="font-semibold">
                  {seriesData.name}
                </h2>

                <AddMovieButton series={seriesData} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}