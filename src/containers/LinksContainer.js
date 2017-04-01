// @flow

import React from 'react';
import { connect } from 'react-redux';
import { LinkItem} from '../components';

const LinksListContainer = ({
  links,
}: {
 links: Array<string>,
}) => {

  return (
    <div className="linksList">
      {links.map((link) =>(
        <LinkItem
          key={link}
          {...link}
        />
      )
      )}
    </div>
  )
}

export default connect(
    (state) => ({
      links: state.links,
    }),
)(LinksListContainer);
