// @flow
import type { State, Links } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { LinkItem, Title, LinksList } from '../components';

const LinksListContainer = (
  {
    links,
  }: {
    links: Links,
  },
) => {
  return (
    <div>
      <Title>List of links</Title>
      <LinksList>
        {links.map(link => <LinkItem key={link.id} {...link} />)}
      </LinksList>
    </div>
  );
};

export default connect((state: State) => ({ links: state.links }))(
  LinksListContainer,
);
