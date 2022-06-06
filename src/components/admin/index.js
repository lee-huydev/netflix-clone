import { useState } from 'react';
import { Container, Thead, Tbody, Loading } from './styles/styles';
import { BsPencil } from 'react-icons/bs';
import { BiCheck } from 'react-icons/bi';
import { extendTimeExpire } from '../../helpers/firebase-auth'
export default function Admin({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
}

Admin.Thead = function AdminThead({ ...restProps }) {
   return (
      <Thead {...restProps}>
         <tr>
            <th>#</th>
            <th>Email</th>
            <th>Date Create</th>
            <th>Date Expire</th>
            <th>Status</th>
         </tr>
      </Thead>
   );
};
Admin.Tbody = function AdminTbody({ allUsers, children, ...restProps }) {
   return <Tbody {...restProps}>{children}</Tbody>;
};
Admin.Loading = function AdminLoading({children}) {
   return <Loading >{children}</Loading>;
};
Admin.Td = function AdminTd({ elem }) {
   const [edit, setEdit] = useState(false);
   const [value, setValue] = useState(elem.timeExpire)
   const handleCheck = () => {
      extendTimeExpire(elem.email, value)
      setEdit(false)
      console.log('Success')
   }
   return (
      <>
         <td className="overwrite-td">
            {edit ? (
               <div className="inner">
                  <input className="input-time" value={value} onChange={({target}) => setValue(target.value)}/>
                  <BiCheck
                     className="icon-check"
                     onClick={() => handleCheck()}
                  />
               </div>
            ) : (
               <>
                  { value ||elem.timeExpire}
                  <BsPencil className="icon-edit" onClick={() => setEdit(true)}/>
               </>
            )}
         </td>
      </>
   );
};


