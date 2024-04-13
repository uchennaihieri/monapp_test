
import React, { useRef, useState } from 'react'
import { Box, Button, Flex, HStack, Icon, IconButton, Image, Input, Textarea, useDisclosure } from '@chakra-ui/react'
import { AiOutlinePicture, AiFillCloseCircle } from 'react-icons/ai'
import _ from 'lodash'
import { BsPlus } from 'react-icons/bs'

const Post = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [content, setContent] = useState('');
  const [contentCount, setContentCount] = useState(0);
  const [chosenLabel, setChosenLabel] = useState('');
  const [label, setLabel] = useState('');
  const [display, setDisplay] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };

  };


  const handleModalClose = () => {
    onClose()
    setContent('')
    setDisplay('')
    setSelectedFile(null)
  }

  const handleImage = () => {
    filePickerRef.current.click()
  }

  const updateStates = (e) => {
    setContent(e.target.value);
    const contentArray = _.words(e.target.value)
    if (_.startsWith(e.target.value, '#')) {

      const words = contentArray[0];
      setLabel(words)

    }
    setContentCount(contentArray.length)
  }



  return (
    <Box d='flex' alignItems={["flex-start", "flex-start", "center", "flex-start", "flex-start"]} pt='2rem' pb='4px' justifyContent='space-between' my={['20px']} px={['8px', '8px', '20px']} w={['100%', '100%', '100%', '100%', '100%']} borderRadius={['12px']} bg="white">
      {/* <Image alt ='avatar' src='/avatar.svg' w='47.74px'  /> */}
      <Box w='100%'>
        <Flex flexDirection="row" align="center">
          <Textarea
            minHeight={'57.85px'}
            maxHeight={'200.85px'}
            size='lg'
            w={['100%']} focusBorderColor='#E2E2E3' borderRadius='17px' placeholder='Share a post' bgColor='transparent' border='1px solid #E2E2E3'
            value={content}
            onChange={(e) => updateStates(e)}
            resize="vertical"
          />
        </Flex>
        {selectedFile && <Box >
          <IconButton size='lg' variant="unstyled" onClick={() => setSelectedFile(null)} icon={<Icon as={AiFillCloseCircle} />} />
          <Image alt="Post Image" borderRadius={["12px"]} src={selectedFile} />
        </Box>}
        {(display == '') ? <Box></Box>



          : (display == 'media') ? <Box>{selectedFile ? null : <IconButton my="20px" w="100px" h="100px" onClick={handleImage} icon={<Icon as={BsPlus} />} />}</Box> : ""}
        <Input hidden onChange={addImageToPost} ref={filePickerRef} type="file" />
        <Flex my='11.79px' align='left' justify='space-between'>
          <HStack >



            <Button onClick={display == "media" ? () => setDisplay('') : () => setDisplay('media')} fontSize='14px' fontWeight='500' color='#5D5D5D' leftIcon={<Icon color="#33CF5D" fontSize={'25px'} as={AiOutlinePicture} />} colorScheme='blackAlpha' variant='ghost'>
              Media
            </Button>



          </HStack>
          <Button onClick={(contentCount > 0) ? submitPost : null} colorScheme='black' fontWeight={600} fontSize="15px" color='white' h='40.6px' bgColor='black' borderRadius="11.46px">
            Post Issue
          </Button>
        </Flex>

      </Box>
    </Box>
  )
}

export default Post
