import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)


 
const colorfulVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props // extract colorScheme from component props

  return {
  container: {
          // border: '2px solid rgba(0, 0, 0, 0.40)',
          border: '4px solid red',
          width: ['50%', '74.625rem'],
          borderRadius: '4px',
          // boxShadow:'0px 8px 64px 0px rgba(167, 167, 167, 0.24)',
          my: '1.625rem'
      },
      button: {
          width: ['100%', '74.625rem'],
          height: '5.0625rem',
          borderRadius: '4px',
          fontSize: ['1rem', '1.625rem'],
          fontWeight: '500',
          lineHeight: ['1.15369rem', '1.75rem'],

      },
      panel: {
          // width: '67.8125rem',
          height: ['15.9375rem', '8.625rem'],
          pl: ['', '2.625rem'],
          pr: '1.625rem',
          mb: '2.625rem',
          textAlign: 'justify',
          fontSize: ['0.82406rem', '1.25rem'],
          lineHeight: '1.75rem'
      },
       // icon: {
      //     size:{
      //         height: '2.625rem',
      //         width: '2.625rem',
      //     }

      // },         

  }    
})

const variants = {
  MonappCustom: colorfulVariant,
}

export const accordionTheme = defineMultiStyleConfig({variants })

// export the component theme
// export const tabsTheme = defineMultiStyleConfig({ variants })



// import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
// import {
//   createMultiStyleConfigHelpers,
//   defineStyle,
// } from "@chakra-ui/styled-system";
// import { extendTheme } from "@chakra-ui/react";

// const { definePartsStyle, defineMultiStyleConfig } =
//   createMultiStyleConfigHelpers(parts.keys);

// // default base style from the Input theme
// const baseStyle = definePartsStyle({
//   container: defineStyle({
//     boxShadow: "sm",
//     _focus: {
//       boxShadow: "outline",
//     },
//   }),
// });

// // Defining a custom variant called outline
// const outline = definePartsStyle((props) => {
//   const { colorScheme: c } = props;
//   return {
//     container: {
//       border: "1px solid",
//       borderColor: "gray.100",
//     },
//     button: {
//       color: "gray.500",
//       _hover: {
//         color: "gray.600",
//       },
//       _focus: {
//         color: "blue.500",
//       },
//       fontFamily: "mono",
//     },
//   };
// });

// const variants = {
//   outline,
// };

// const size = {
//   md: defineStyle({
//     w: 5,
//     h: 5,
//   }),
// };

// const sizes = {
//   md: definePartsStyle({
//     icon: size.md,
//   }),
// };

// export const accordionTheme = defineMultiStyleConfig({
//   baseStyle,
//   variants,
//   sizes,
//   defaultProps: {
//     size: "md",
//     variant: "outline",
//   },
// });