import { Container, Thead, Tbody } from './styles/styles';
import { GrStatusGoodSmall } from 'react-icons/gr';
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
Admin.Tbody = function AdminTbody({ allUsers, ...restProps }) {
   console.log(allUsers);
   return (
      <Tbody {...restProps}>
         {allUsers &&
            allUsers.map((elem, index) => (
               <tr key={elem.email}>
                  <th scope="row">{index + 1}</th>
                  <td>{elem.email}</td>
                  <td>{elem.timeCreated}</td>
                  <td>{elem.timeExpire}</td>
                  <td>
                     {elem.status ? (
                        <GrStatusGoodSmall className="icon-status__active" />
                     ) : (
                        <GrStatusGoodSmall className="icon-status" />
                     )}
                  </td>
               </tr>
            ))}
      </Tbody>
   );
};
