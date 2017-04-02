// @flow
import type { State, Links } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { LinkItem } from '../components';

const LinksListContainer = (
  {
    links,
  }: {
    links: Links
  },
) => {
  return (
    <div className="linksList">
      {links.map((link) =>
        <LinkItem
          key={link.id}
          {...link}
        />
      )}
    </div>
  );
};

export default connect(
  (state:State) => ({ links: state.links })
)(LinksListContainer);
