import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap';
import { BROWSE } from '../constants';
import HeaderContainer from '../containers/header';
import { Admin, Loading } from '../components';
import { getListUser } from '../helpers/firebase-auth';
import { GrStatusGoodSmall } from 'react-icons/gr';
const AdminManage = () => {
   const [allUsers, setAllUsers] = useState(null);
   const navigate = useNavigate();
   const { state } = useLocation();
   if (state.admin === false) {
      navigate(BROWSE);
   }
   useEffect(() => { 
      getListUser().then((e) => setAllUsers(e));
   }, []);
   return (
      <HeaderContainer
         bg={false}
         sizeLogo="150px"
         showSignin={true}
         contentSigin="HOME"
      >
         {allUsers ? (
            <Admin>
               <Table className="table">
                  <Admin.Thead />
                  <Admin.Tbody>
                     {allUsers.map((elem, index) => (
                        <tr key={elem.email}>
                           <th scope="row">{index + 1}</th>
                           <td>{elem.email}</td>
                           <td>{elem.timeCreated}</td>
                           <Admin.Td elem={elem} key={index} />
                           <td>
                              {elem.status ? (
                                 <GrStatusGoodSmall className="icon-status__active" />
                              ) : (
                                 <GrStatusGoodSmall className="icon-status" />
                              )}
                           </td>
                        </tr>
                     ))}
                  </Admin.Tbody>
               </Table>
            </Admin>
         ) : (
            <Admin.Loading>
               <Loading.Img src="./images/misc/Netflix_LoadTime.gif" />
            </Admin.Loading>
         )}
      </HeaderContainer>
   );
};

export default AdminManage;
