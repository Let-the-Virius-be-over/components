// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import {
  FabFacebookF,
  FabLinkedinIn,
  FabTwitter,
  type IconPropsType,
} from '../../Atoms/Icons'
import Link, { type PropsType as LinkPropsType } from '../../Atoms/Links/Link'
import { prop, theme } from '../../Tools/interpolation'

type WrapperPropsType = { +size: string }

const Wrapper: React.ComponentType<LinkPropsType> = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${prop<WrapperPropsType>('size')};
  width: ${prop<WrapperPropsType>('size')};
  border-radius: 50%;
  background-color: ${theme('circleBadgeBackgroundColor')};
  transition: all 0.5s;

  &:hover {
    background-color: ${theme('circleBadgeHoverColor')};
  }
`

const WhiteFacebook: React.ComponentType<IconPropsType> = styled(FabFacebookF)`
  fill: ${theme('circleBadgeColor')};
  max-height: 60%;
  max-width: 60%;

  &:hover {
    fill: ${theme('circleBadgeColor')};
  }
`
const WhiteLinkedin: React.ComponentType<IconPropsType> = styled(FabLinkedinIn)`
  fill: ${theme('circleBadgeColor')};
  max-height: 60%;
  max-width: 60%;

  &:hover {
    fill: ${theme('circleBadgeColor')};
  }
`
const WhiteTwitter: React.ComponentType<IconPropsType> = styled(FabTwitter)`
  fill: ${theme('circleBadgeColor')};
  max-height: 60%;
  max-width: 60%;

  &:hover {
    fill: ${theme('circleBadgeColor')};
  }
`

export type PropsType = {
  +name?: 'facebook' | 'linkedin' | 'twitter',
  +size?: string,
}

const CircleBadge = ({ name, size, ...rest }: PropsType) => (
  <Wrapper size={size} {...rest}>
    {name === 'facebook' && <WhiteFacebook selectable size={size} />}
    {name === 'linkedin' && <WhiteLinkedin selectable size={size} />}
    {name === 'twitter' && <WhiteTwitter selectable size={size} />}
  </Wrapper>
)

CircleBadge.propTypes = {
  name: PropTypes.oneOf(['facebook', 'linkedin', 'twitter']),
  size: PropTypes.string,
}

CircleBadge.defaultProps = {
  name: 'facebook',
  size: '2.625rem',
}

export default CircleBadge
