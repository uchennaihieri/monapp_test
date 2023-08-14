import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools' // import utility to set light and dark mode props

// create helpers to define parts, variants and sizes
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

// define a custom variant
const colorfulVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props // extract colorScheme from component props

  return {
    tab: {
      border: '0.6px solid ',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      // use colorScheme to change background color with dark and light mode options
      bg: mode(`${'#FFFFFF'}`, `${c}.600`)(props),
      borderTopRadius: 'lg',
      borderBottom: 'none',
      _selected: {
        bg: mode('#000', 'gray.800')(props),
        color: mode('#FFFFFF', `${c}.300`)(props),
        borderColor: 'inherit',
        borderBottom: 'none',
        mb: '-2px',
      },
    },
    tablist: {
      borderBottom: '2x solid',
      borderColor: 'inherit',
    },
    tabpanel: {
      border: '2px solid',
      borderColor: 'inherit',
      borderBottomRadius: 'lg',
      borderTopRightRadius: 'lg',
    },
  }
})

const variants = {
  colorful: colorfulVariant,
}

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ variants })

