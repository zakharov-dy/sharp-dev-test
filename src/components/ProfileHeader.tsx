import {
  Body,
  Header as NBHeader,
  Left,
  Right,
  Subtitle,
  Title
} from 'native-base';
import React from 'react';

export interface Props {
  name?: string;
  balance?: number;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
  title: string;
}
const ProfileHeader = (props: Props) =>
  props.balance ? (
    <NBHeader>
      <Left>{props.leftChild}</Left>
      <Body>
        <Title>{props.title}</Title>
        <Subtitle>{`${props.name}. ${props.balance}$`}</Subtitle>
      </Body>
      <Right>{props.rightChild}</Right>
    </NBHeader>
  ) : null;

export default ProfileHeader;
