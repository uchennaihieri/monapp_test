// AuthComponent.js
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from './firebase';
import Loading from '@/components/loading';
import Auth from '@/app/auth/page';
import { useRecoilState } from 'recoil';
import baseURL from './baseUrl';

const AuthComponent = ({ children }) => {

    const [loggedUser, setLoggedUser] = useState(undefined);
    const { data: person, error, isLoading } = useSWR(`${baseURL}/api/user/${loggedUser.uid}`, fetcher)
    // const [person, setPerson] = useRecoilState(personState)

    const fetcher = url => axios.get(url).then(res => res.data)

    useEffect(async () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedUser(user)
            } else {
                return <Auth />
            }
        });

        console.log(person, loggedUser)
    }, [user]);



    if (loggedUser == undefined || isLoading) {
        return <Loading />;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return React.cloneElement(children, { person });
};

export default AuthComponent;
