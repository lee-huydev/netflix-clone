export const scrollCard = {
   scrollRight(item, slider) {
      if (slider.scrollLeft >= 1426) {
         return;
      } else {
         slider.scrollBy({
            left: +(item * 3),
            behavior: 'smooth',
         });
      }
   },
   scrollLeft(item, slider) {
      if (slider.scrollLeft <= 0) {
         return;
      } else {
         slider.scrollBy({
            left: -(item * 3),
            behavior: 'smooth',
         });
      }
   },
};
