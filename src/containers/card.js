import React from 'react';
import { Card } from '../components';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
const CardContainer = ({ film, modal, setModal, userCurrent, profile, displayName = '' }) => {
   const { title, data } = film;
   return (
      <>
         <Card>
            {document && <Card.Title>{`${title} ${displayName}`}</Card.Title>}
            <Card.Button className="left" style={{ left: '0px' }}>
               <IoIosArrowBack className="icon-arrow" />
            </Card.Button>
            <Card.Slider>
               {data &&
                  data.map((e) => (
                     <Card.Item
                        data={e}
                        key={e.id}
                        profile={profile}
                        setModal={setModal}
                        modal={modal}
                        userCurrent={userCurrent}
                     />
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
