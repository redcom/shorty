// @flow
import type { State, Links } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { LinkItem, Title, LinksList } from '../components';
import { deleteUrl } from '../actions/ShortUrlActions';

const LinksListContainer = (
  {
    links = [],
    dispatch,
  }: {
    links: Links,
    dispatch: Function,
  },
) => {
  const onDelete = id =>
    () => {
      dispatch(deleteUrl(id));
    };

  return (
    <div>
      <Title>List of links</Title>
      <LinksList>
        {links.map(link => (
          <LinkItem key={link.id} onDelete={onDelete(link.id)} {...link} />
        ))}
      </LinksList>
    </div>
  );
};

export default connect((state: State) => ({ links: state.links }))(
  LinksListContainer,
);
