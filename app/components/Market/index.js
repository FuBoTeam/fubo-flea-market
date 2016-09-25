import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import Block from './Block';
import EditBlock from './EditBlock';

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Market';
  }
  render() {
    const { goods, params, route } = this.props;
    if (params.filter === 'my-goods') {
      return (
        <ul>{
          goods.edges.filter((g) => {
            return route.user.id === g.ownerId;
          }).map((g) => {
            return (
              <EditBlock key={g.id} good={g} />
            );
          })
        }</ul>
      );
    } else if (params.filter === 'my-bid') {
      return (
        <ul>{
          goods.edges.filter((g) => {
            return g.subscriptPeople.some((u) => {
              return route.user.id === u.id;
            });
          }).map((g) => {
            return <Block key={g.id} good={g} />;
          })
        }</ul>
      );
    }
    return (
      <ul>{
        goods.edges.map((g) => {
          return <Block key={g.id} good={g} />;
        })
      }</ul>
    );
  }
}

Market.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
  params: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default Relay.createContainer(Market, {
  fragments: {
    goods: () => {
      return Relay.QL`
        fragment on GoodConnection {
          totalCount,
          edges {
            node {
              id,
              title,
              description
            }
          }
        }
      `;
    },
  },
});