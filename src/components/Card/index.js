// @flow
import * as React from 'react';
import { StyledCard } from './style';

type Props = {
  children: React.Node,
  style?: Object,
};

class Card extends React.Component<Props> {
  render() {
    const { style, children } = this.props;
    return <StyledCard style={style}>{children}</StyledCard>;
  }
}

export default Card;
