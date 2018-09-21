import React from 'react'
import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z"/>
  </>
)

export const FasWindowMinimize = withStyle(InnerSvg, 512, 512, 'FasWindowMinimize')
