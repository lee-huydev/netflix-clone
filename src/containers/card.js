import React from 'react';
import { Card } from '../components';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
const CardContainer = ({ film, modal, setModal }) => {
   const { title, data } = film;
   return (
      <>
         <Card>
            {document && <Card.Title>{title}</Card.Title>}
            <Card.Button className="left" style={{ left: '0px' }}>
               <IoIosArrowBack className="icon-arrow" />
            </Card.Button>
            <Card.Slider>
               {data &&
                  data.map((e) => (
                     <Card.Item data={e} key={e.id} setModal={setModal} modal={modal}/>
                  ))}
            </Card.Slider>
            <Card.Button className="right" style={{ right: '0px' }}>
               <IoIosArrowForward className="icon-arrow" />
            </Card.Button>
         </Card>
      </>
   );
};

export default CardContainer;
