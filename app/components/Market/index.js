import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import CSSModules from 'react-css-modules';
import Block from './Block';
import EditBlock from './EditBlock';
import styles from './goods.css';

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Market';
  }
  render() {
    const { goods, params, route } = this.props;
    if (params.filter === 'my-selling') {
      return (
        <ul styleName="goods-edit-container">{
          goods.edges.filter((g) => {
            return route.user.id === g.node.ownerId;
          }).map((g) => {
            return (
              <EditBlock key={g.node.id} good={g.node} />
            );
          })
        }</ul>
      );
    } else if (params.filter === 'my-bid') {
      return (
        <ul styleName="goods-container">{
          goods.edges.filter((g) => {
            return g.node.subscriptPeople.some((u) => {
              return route.user.id === u.id;
            });
          }).map((g) => {
            return <Block key={g.node.id} good={g.node} />;
          })
        }</ul>
      );
    }
    return (
      <ul styleName="goods-container">{
        goods.edges.map((g) => {
          return <Block key={g.node.id} good={g.node} />;
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

export default Relay.createContainer(
  CSSModules(Market, styles), {
  fragments: {
    goods: () => {
      return Relay.QL`
        fragment on GoodConnection {
          totalCount,
          edges {
            node {
              id,
              title,
              image,
              description
            }
          }
        }
      `;
    },
  },
});