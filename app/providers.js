// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'

export function Providers({ children }) {
    return (
        <CacheProvider>
            <ChakraProvider>
                <RecoilRoot>
                    {children}
                </RecoilRoot>
            </ChakraProvider>
        </CacheProvider>
    )
}