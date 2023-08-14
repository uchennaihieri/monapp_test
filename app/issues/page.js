'use client'
import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { orderBy, query, limit, startAfter, where, onSnapshot, collection } from "firebase/firestore";
import _ from "lodash"
import { useRouter } from "next/router";
import { InView } from 'react-intersection-observer';
import Post from "@/components/Post";
import PostCard from "@/components/postCard";
import { db } from "@/services/firebase";
import Navbar from "@/components/navbar";

function Issues() {



    // const { ref, inView, entry } = useInView();
    const [feedPosts, setFeedPosts] = useState(null);
    const [data, setData] = useState([])
    const [lastDoc, setLastDoc] = useState(null);
    const [view, setView] = useState(null)
    const [authUser, setAuthUser] = useState(null)


    const router = useRouter();


    useEffect(() => {

        const unsubscribe = onSnapshot(query(collection(db, "issues"), orderBy('timestamp', 'desc'), limit(8)), (snapshot) => {
            const posts = [];
            snapshot.forEach((docu) => {


                posts.push({ id: docu.id, ...docu.data() });
            });
            setFeedPosts(posts);

        });


        return unsubscribe



    }, [])


    useEffect(() => {
        if (feedPosts) {
            setLastDoc(feedPosts?.length - 1);
            console.log(lastDoc)
        }
    }, [feedPosts, feedPosts?.length])



    const getMorePosts = () => {
        if (feedPosts?.length > 6) {

            onSnapshot(query(collection(db, "posts"), orderBy('timestamp', 'desc'), startAfter(feedPosts[lastDoc]?.timestamp), limit(8)), (snapshot) => {
                const posts = [];
                snapshot.forEach((docu) => {


                    posts.push({ id: docu.id, ...docu.data() });
                });

                setFeedPosts(feedPosts?.concat(posts));

            });

        }
    }


    return (
        <Box bg="#000000" minHeight="100vh" >
            <Navbar />
            <Flex

                justify="center"

                id="pageView"
            >

                <Box px={['0', '0', '1.5rem', '1.5rem', "42px"]} my="40px" w={['92%', '92%', '70%', '60%', "50%"]}>
                    <Box borderRadius="40px"  >
                        <Post />

                        {feedPosts && feedPosts.map((post, index) => <PostCard key={index} id={post.id} post={post} />)}
                        {/* <div ref={ref}>{inView && getMorePosts}</div> */}
                        <InView as="div" onChange={(inView, entry) => {
                            if (feedPosts && inView) {
                                getMorePosts()
                            }
                        }}>

                        </InView>
                    </Box>
                </Box>

            </Flex>

        </Box>
    )
}

export default Issues