import React from 'react'
import { Icon } from '@chakra-ui/react'

function BillingIcon(props) {
    return (
        <Icon width="24" height="24" viewBox="0 0 24 24" fill="none"  {...props}>
            <g clip-path="url(#clip0_72_3967)">
                <path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_72_3967">
                    <rect width="24" height="24" fill="" />
                </clipPath>
            </defs>
        </Icon>

    )
}

export default BillingIcon