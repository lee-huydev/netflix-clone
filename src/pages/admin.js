import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap';
import { BROWSE } from '../constants';
import HeaderContainer from '../containers/header';
import { Admin } from '../components';
import { getListUser } from '../helpers/firebase-auth'
const AdminManage = () => {
   const [allUsers, setAllUsers] = useState(null)
   const navigate = useNavigate();
   const { state } = useLocation();
   if (state.admin === false) {
      navigate(BROWSE);
   }
   useEffect(() => {
     getListUser().then(e => setAllUsers(e))
   }, [])
   return (
      <HeaderContainer
         bg={false}
         sizeLogo="150px"
         showSignin={true}
         contentSigin="HOME"
      >
         <Admin >
            <Table className='table'>
              <Admin.Thead />
              <Admin.Tbody allUsers={allUsers}/>
            </Table>
         </Admin>
      </HeaderContainer>
   );
};

export default AdminManage;
