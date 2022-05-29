import { useEffect, useRef, useState } from 'react';
import {
   Container,
   Button,
   Slider,
   Item,
   Title,
   DescriptionBtn,
} from './styles/styled';
import { scrollCard } from '../../helpers/scroll-card';
import { getImages } from '../../helpers/get-content-firestore';
export default function Card({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
}

Card.Title = function CardTitte({ children }) {
   return <Title>{children}</Title>;
};

Card.Button = function CardButton({ slider, children, ...restProps }) {
   const btnRef = useRef(null);
   const [sliderRef, setSliderRef] = useState(null);
   const { scrollLeft, scrollRight } = scrollCard;
   const handleScroll = () => {
      const itemMovies = document
         .querySelector('.movie')
         .getBoundingClientRect().width;
      if (btnRef.current.className.includes('right')) {
         scrollRight(itemMovies, sliderRef);
      } else {
         scrollLeft(itemMovies, sliderRef);
      }
   };
   useEffect(() => {
      btnRef.current.parentNode.childNodes.forEach((e) => {
         if (e.className.includes('slider-scroll')) {
            setSliderRef(e);
         }
      });
   }, []);
   return (
      <Button {...restProps} ref={btnRef} onClick={() => handleScroll()}>
         {children}
      </Button>
   );
};

Card.Slider = function CardSlider({ children, ...restProps }) {
   return (
      <Slider {...restProps} className="slider-scroll">
         {children}
      </Slider>
   );
};

Card.Item = function CardItem({data, modal, setModal, children, ...restProps }) {
   const [img, setImg] = useState(null);
   const [like, setLike] = useState({ like: false, dislike: false });
   getImages(data.genre, data.img).then((e) => setImg(e));
   const handleMore = (data, img) => {
      setModal({...modal, display: true, data, img})
      document.body.style.overflow='hidden'
   };
   return (
      <Item {...restProps} className="movie">
         {img ? (
            <img src={img} alt={data.title} />
         ) : (
            <img src="./images/misc/Netflix_LoadTime.gif" />
         )}
         <div className="description">
            <div className="description-button-frame">
               <DescriptionBtn>
                  <i className="fas fa-play"></i>
               </DescriptionBtn>
               <DescriptionBtn>
                  <i className="fas fa-plus"></i>
               </DescriptionBtn>
               <DescriptionBtn
                  isActive={like.like}
                  onClick={() =>
                     setLike({ ...like, like: !like.like, dislike: false })
                  }
               >
                  <i className="fas fa-thumbs-up"></i>
               </DescriptionBtn>
               <DescriptionBtn
                  isActive={like.dislike}
                  onClick={() =>
                     setLike({ ...like, dislike: !like.dislike, like: false })
                  }
               >
                  <i className="fas fa-thumbs-down"></i>
               </DescriptionBtn>
               <DescriptionBtn>
                  <i
                     className="fas fa-chevron-down"
                     onClick={() => handleMore(data, img)}
                  ></i>
               </DescriptionBtn>
            </div>
            <div className="description-text-frame">
               <span className="description__match">97% Match</span>
               <span className="description__age">{data.age}+</span>
               <span className="description__length">{data.duration}</span>
               <br />
               <span className="description__genre">{data.genres}</span>
            </div>
         </div>
      </Item>
   );
};
