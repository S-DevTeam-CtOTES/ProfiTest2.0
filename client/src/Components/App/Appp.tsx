import { observer } from 'mobx-react-lite';
import React, {FC, useContext, useEffect, useState} from 'react'
import { Context } from '../..';
import { IUser } from '../../models/IUser';
import UserService from '../../service/UserService';
import LoginForm from '../SignUpForm/SignUpForm';

// const App: FC = () => {
//     const {store} = useContext(Context)
//     // const [users, setUsers] = useState<IUser[]>([]);

//     useEffect(() => {
//         if (localStorage.getItem('token')) {
//             store.checkAuth()
//         }
//     }, [])

//     // async function getUsers() {
//     //     try {
//     //         const response = await UserService.fetchUsers();
//     //         setUsers(response.data)
//     //     } catch (e) {
//     //         console.log(e)
//     //     }
//     // }

//     if (store.isLoading) {
//         return <div>Загрузка</div>
//     }

//     if (!store.isAuth) {
//         return (
//         <>
//         <div>
//             <button onClick={getUsers}>Получить пользователей</button>
//         </div>
//             <LoginForm/>
//         </>
//         )
//     }

//   return (
//     <div>
//         {/* <h1>{store.isAuth ? `Пользователь автаризован ${store.user.email}` : 'АВТАРИЗУЙТЕСЬ'}</h1> */}
//         {/* <h1>{store.user.isActivated ? 'Аккаунт подтвержден по почте' : 'Аккаунт не подтвержден'}</h1> */}
//         <button onClick={() => store.logout()}>Выйти</button>
//         <div>
//             <button>Получить пользователей</button>
//         </div>
//         <>
//             {users.map((user  =>  
//                     <div key={user.email}>{user.email}</div> 
//                 )
//             )}
//         </>
//     </div>
//   )
// }

// export default observer(App);
