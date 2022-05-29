import { useState } from 'react';
import { Container, Content, Frame, Background } from './styles/styles';
import { getVideo } from '../../helpers/get-content-firestore';
import { VscClose } from 'react-icons/vsc';
export default function Modal({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
}

Modal.Content = function ModalContent({ dataModal, setDataModal }) {
   const [video, setVideo] = useState(null);
   const { data, img } = dataModal;
   getVideo(data.genre, data.title).then((e) => setVideo(e));
   console.log(video);
   console.log(data);
   const handleClick = () => {
      setDataModal({ ...dataModal, img: null, data: null, display: false });
      document.body.style.overflow = 'visible';
   };
   return (
      <Content>
         <Background />
         <VscClose className="icon-close" onClick={handleClick} />
         <div className="video">
            <video poster={img} src={video} autoPlay muted/>
         </div>
         <Frame>
            <div className="description">
               <div className='description__top'>
                  <span className="description__match">97% Match</span>
                  <span className="description__age">{data.age}+</span>
                  <span className="description__length">{data.duration}</span>
               </div>
               <span className="description__title">{data.description}</span>
            </div>
            <div className="detail">
               <div className='detail__cast'><span>Cast: </span> {data.cast}</div>
               <div className='detail__genres'><span>Genres: </span>{data.genres}</div>
               <div className='detail__genre'><span>This show is: </span>{data.genre}</div>
            </div>
         </Frame>
      </Content>
   );
};
