export default function FilterContent(content) {
   return {
      film: [
         {
            title: 'Violence',
            data: content.filter((d) => d.genre === 'Violence'),
         },
         {
            title: 'Vietname Movies',
            data: content.filter((d) => d.genre === 'Vietnam Movies'),
         },
         {
            title: 'Thriller',
            data: content.filter((d) => d.genre === 'Thriller'),
         },
         {
            title: 'Fantasy Movies',
            data: content.filter((d) => d.genre === 'Fantasy Movies'),
         },
         {
            title: 'Anime Movies',
            data: content.filter((d) => d.genre === 'Anime Movies'),
         },
      ],
   };
}
