import React from 'react';
import * as icons from './svgs/_index'

export default function Icon({name, ...props}) {
  const BaseIcon = 'div'

    return (
      <BaseIcon>
        <svg
          color="blue"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          {...props}
        >
          {name && icons[name]()}
        </svg>
       </BaseIcon>
    )
}
