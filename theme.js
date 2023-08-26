import { extendTheme } from '@chakra-ui/react';
import { tabsTheme } from './components/Tabs'



const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
    components: {
        Checkbox: {
            variants: {
                circular: {
                    control: {
                        rounded: "full"
                    }
                },
            },
            baseStyle: {
                control: {
                    borderRadius: '2px',
                    _checked: {
                        bg: 'black',
                        border: 'black'
                    },
                },

            },
        },
        Radio: {
            variants: {
                long: {

                    container: {
                        w: '100%',
                        h: '3rem',
                        border: '1px solid #CDCDCD',
                        borderRadius: '4px',
                        px: '18px',
                    },
                    control: {
                        _checked: {
                            bg: 'black',
                            color: 'black',
                            borderColor: "",
                        },
                        _hover: {
                            bg: '',
                            color: '',
                            borderColor: "",
                        }

                    }

                },
                blackCircle: {
                    control: {
                        _checked: {
                            bg: 'black',
                            color: 'black',
                            borderColor: "",
                        },
                        _hover: {
                            bg: '',
                            color: '',
                            borderColor: "",
                        }

                    }

                }
            }

        },
        Switch: {
            variants: {
                custom: {

                    track: {
                        bg: '#D9D9D9',

                        _checked: {
                            bg: '#000000',
                        },
                    },
                    thumb: {
                        bg: 'rgba(0, 0, 0, 0.4)',

                        _checked: {
                            bg: '#FFFFFF',
                        },
                    },
                },
            },
        },
        Accordion: {
            variants: {
                custom: {

                    container: {
                        border: '2px solid rgba(0, 0, 0, 0.40)',
                        width: ['98%', '74.625rem'],
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
                        lineHeight: ['1.15369rem', '1.75rem']

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
                },

            },
        },
        Tabs: tabsTheme,
    },

});

export default theme;
