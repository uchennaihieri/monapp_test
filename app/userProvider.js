'use client'
import Loading from "@/components/loading";
import { personState } from "@/recoil/atoms";
import { auth, collection, db, doc, onSnapshot } from "@/services/firebase";
import { getDocs, query, where } from "firebase/firestore";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";
import { useRecoilState } from "recoil";






function UserProvider({ children }) {
    const { data: session, status } = useSession()
    const [person, setPerson] = useRecoilState(personState)

    useEffect(() => {
        if (status === "authenticated") {
            getUser()
        }
    }, [status, session])

    async function getUser() {
        const email = session.user.email
        console.log(email)
        const q = query(collection(db, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setPerson({ id: doc.id, ...doc.data() })
        });
    }


    if (status === "loading") {
        return <Loading />
    }


    return (
        <>
            {children}
        </>
    );
}

export default UserProvider;