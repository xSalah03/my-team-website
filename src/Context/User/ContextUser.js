

import React, { createContext, useReducer } from 'react'
import { ReducerUser } from './ReducerUser.js';




export const UserContext = createContext({});

const ContextUser = ({ children }) => {



    const initialState =
    {
        slides:
            [
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/IMAGE-BLOC-MYTEAM-SITE-1.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/DIRECTEUR-GE%CC%81NE%CC%81RAL.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/STAFF-ME%CC%81DICAL.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/ANALYSE-VIDEO.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/DIRECTEUR-SPORTIF.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/ENTRAINEUR.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/PRE%CC%81PARATEUR-PHYS.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/IMAGE-BLOC-MYTEAM-SITE-1.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/DIRECTEUR-GE%CC%81NE%CC%81RAL.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/STAFF-ME%CC%81DICAL.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/ANALYSE-VIDEO.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/DIRECTEUR-SPORTIF.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/ENTRAINEUR.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/PRE%CC%81PARATEUR-PHYS.png'
                },
            ],
        slides2:
            [
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                },
                {
                    url: 'https://www.myteam.ma/wp-content/uploads/2020/10/5ea599e9250000f12c6b8901.png'
                }
            ],
    }

    const [state, dispatch] = useReducer(ReducerUser, initialState)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextUser