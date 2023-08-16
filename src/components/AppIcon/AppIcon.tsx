import React from 'react'
import { createIcon } from '@chakra-ui/icons'
import { IconProps } from '@chakra-ui/react'

export const ChevronLeftIcon = createIcon({
  displayName: 'chevron left',
  viewBox: '0 0 7 10',
  path: [<path key={1} d='M6.84163 1.175L5.66663 0L0.666626 5L5.66663 10L6.84163 8.825L3.02496 5L6.84163 1.175Z' />],
})

export const ChevronRightIcon = createIcon({
  displayName: 'chevron right',
  viewBox: '0 0 7 10',
  path: [<path key={2} d='M0.158374 8.825L1.33337 10L6.33337 5L1.33337 0L0.158374 1.175L3.97504 5L0.158374 8.825Z' />],
})

export const CalenderDoubleArrow = createIcon({
  displayName: 'calender double arrow',
  viewBox: '0 0 14 12',
  path: [
    <path key={3} d='M7.2896 12L13.0827 6L7.2896 0L5.92822 1.41L10.3503 6L5.92822 10.59L7.2896 12Z' />,
    <path key={4} d='M2.2896 12L8.08271 6L2.2896 0L0.928223 1.41L5.35029 6L0.928223 10.59L2.2896 12Z' />,
  ],
})

export type iconName = 'chevronLeft' | 'chevronRight' | 'calenderDoubleArrow'

interface AppIconProps extends IconProps {
  name: iconName
}

const AppIcon = ({ name, ...rest }: AppIconProps) => {
  switch (name) {
    case 'chevronLeft':
      return <ChevronLeftIcon {...rest} />
    case 'chevronRight':
      return <ChevronRightIcon {...rest} />
    case 'calenderDoubleArrow':
      return <CalenderDoubleArrow {...rest} />
  }
}

export default AppIcon
