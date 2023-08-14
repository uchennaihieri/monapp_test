import React, { useState, useEffect } from 'react'
import { Flex, Box, Icon, Text, Image, Avatar, Button, AvatarGroup, Spacer, Divider, useBoolean, Input, IconButton, Menu, MenuButton, MenuList, MenuItem, Textarea, Badge, Tooltip, Highlight } from "@chakra-ui/react"
import { BsDot, BsChatDots, BsChatDotsFill, BsCheck, BsFillCalendarEventFill, BsFillTrophyFill } from 'react-icons/bs'
import { FaBriefcase, FaUserSecret, FaInfoCircle } from 'react-icons/fa'
import { BiDotsHorizontalRounded, BiTimer, } from 'react-icons/bi'
import { AiFillFolderOpen, AiOutlineUser } from 'react-icons/ai'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import { useRouter } from "next/router";
import { GiJourney } from 'react-icons/gi'
import { MdSchool, MdGroups, MdLocalLibrary, MdNoteAlt } from 'react-icons/md'
import { useRecoilState } from 'recoil';
import { IoIosSend } from 'react-icons/io';
import _ from "lodash"
import { RiThumbUpLine, RiShareForwardLine, RiThumbUpFill } from 'react-icons/ri'
import Link from 'next/link'

function PostCard({ id, post }) {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [commentOpened, setCommentOpened] = useState(false)
  const [commentNumber, setCommentNumber] = useState(-2)
  // const [likes, setLikes] = useState(post.likes);
  const [likedByMe, setLikedByMe] = useState(false)
  const [liked, setLiked] = useState(false);
  const [connectionSent, setConnectionSent] = useState(false)
  const [connectionSentLocal, setConnectionSentLocal] = useState(false)




  dayjs.extend(relativeTime)
  dayjs.extend(updateLocale)

  dayjs.updateLocale('en', {
    relativeTime: {
      future: "%s ago",
      past: "%s ago",
      s: 'a few seconds',
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    }
  })



  let labelColor;
  let labelIcon;



  if (post.label === 'job') {
    labelColor = "blackAlpha"
    labelIcon = FaBriefcase
  } else if (post.label === 'event') {
    labelColor = "blackAlpha"
    labelIcon = BsFillCalendarEventFill
  } else if (post.label === 'scholarship') {
    labelColor = "blackAlpha"
    labelIcon = MdSchool
  } else if (post.label === 'fellowship') {
    labelColor = "blackAlpha"
    labelIcon = MdGroups
  } else if (post.label === 'internship') {
    labelColor = "blackAlpha"
    labelIcon = MdLocalLibrary
  } else if (post.label === 'call for application') {
    labelColor = "blackAlpha"
    labelIcon = MdNoteAlt
  } else if (post.label === 'contest') {
    labelColor = "blackAlpha"
    labelIcon = BsFillTrophyFill
  } else {
    null
  }

  const router = useRouter();
  // const MessageRoute = (e) => {
  //   e.preventDefault();
  //   setData({
  //     otherParticipantFirstName: post.creator.firstName,
  //     otherParticipantLastName: post.creator.lastName,
  //     otherParticipantProfileImage: post.creator.profileImage,
  //     otherParticipantID: post.creator.id
  //   })
  //   setToView(true)
  //   router.push({
  //     pathname: '/Messages',
  //     query: {
  //       messageTo: post.creator.id,
  //       fromOutside: true
  //     },
  //   });
  // };







  return (
    <>

      <Box w={['100%', '100%', '100%', '100%', '100%']} bg="white" mt={['22.41px']} borderRadius={['5px', '5px', "12px"]} px={['12px', '12px', '22px', '22px', "34.65"]} py={['22px', '22px', "27.67"]}>


        <Box>
          <Flex align="center">
            <Box mt={["5px"]}
              mr={["23.35px"]}>
              <Text fontWeight={600}
                fontSize={["14.37px"]}
                lineHeight={["18.68px"]}
              >User</Text>
              <Text fontSize={["12.45px"]} color="#B0B0B0">{post.timestamp && dayjs(`${post.timestamp.toDate()}`).fromNow()}</Text>
            </Box>

            {post.label && <Flex pl={["3.65px"]} borderRadius={["12px"]} bg={`${labelColor}.200`} display={["flex"]} align="center" pr={["15.29px"]} h={["29.26px"]}> <Icon color="white" as={BsDot} size="md" /> <Icon color={`${labelColor}.500`} as={labelIcon} /> <Text fontWeight={400} fontSize={["12.45px"]} ml={["6.84px"]} color={`${labelColor}.500`}>{post.label}</Text> </Flex>}

            <Spacer />

          </Flex>
          {post.image && <Image
            mt="32.42px" mb="22.42px"
            borderRadius="lg"
            src={post.image
            }
            alt="some good alt text"
            objectFit="contain"
          />}
          <Text ml={["11.57px"]} color="#333342" lineHeight="130%" whiteSpace={'pre-wrap'} w='fit-content' fontWeight={400} fontSize={["14px"]} mt="32.42px" mb="22.42px">{post && post.content}
          </Text>
        </Box>

        <Divider mb="22.57px" mt="8.5px" h={'0.85px'} bg="#F2F4F7" orientation='horizontal' />
        <Flex flexDirection={'row'} align="center" justify="space-between">
          <Flex flexDirection={'row'} align="center" fontSize="12px" color="brand.500" >
            <Icon fontSize="17px" color="brand.500" as={AiFillFolderOpen} />
            <Text ml="10px" fontWeight={600}
              fontSize={["14.37px"]}
              lineHeight={["18.68px"]}>{post.status} issue</Text>

          </Flex>

          {post?.status == 'Closed' && <>
            <Flex flexDirection={'row'} align="center" fontSize="12px" color="brand.500" >
              <Text>Reason:</Text>
              <Text ml="10px" fontWeight={600}
                fontSize={["14.37px"]}
                lineHeight={["18.68px"]}>{post.closedReason}</Text>

            </Flex>
          </>}

        </Flex>

      </Box>
    </>
  )
}

export default PostCard