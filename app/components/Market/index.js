import React, { PropTypes } from 'react';
import { container } from 'adrenaline';
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
    const { allGoods, params, user, isFetching } = this.props;
    if (isFetching) {
      return <div>Now Loading......</div>;
    }
    if (params.filter === 'my-selling') {
      return (
        <ul styleName="goods-edit-container">{
          allGoods.edges.filter((g) => {
            return user.id === g.node.owner.id;
          }).map((g) => {
            return (
              <EditBlock key={g.node.id} good={g.node} />
            );
          })
        }</ul>
      );
    } else if (params.filter === 'my-bids') {
      return (
        <ul styleName="goods-container">{
          allGoods.edges.filter((g) => {
            return g.node.allBiddings.edges.some((node) => {
              return user.id === node.user.id;
            });
          }).map((g) => {
            return <Block key={g.node.id} good={g.node} />;
          })
        }</ul>
      );
    }
    return (
      <ul styleName="goods-container">{
        allGoods.edges.map((g) => {
          return <Block key={g.node.id} good={g.node} />;
        })
      }</ul>
    );
  }
}

Market.propTypes = {
  allGoods: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  user: PropTypes.object,
};

const queryAllGoods = `
  query {
    allGoods {
      totalCount,
      edges {
        node {
          id,
          title,
          image,
          allBiddings {
            edges {
              node {
                amount,
                user{
                  fakeName,
                  id
                }
              }
            },
            totalCount
          },
          owner {
            id
          }
        }
      }
    }
  }
`;
const queryMyGoods = `
  query {
    user {
      myGoods {
        totalCount,
        edges {
          node {
            id,
            title,
            description,
            image
          }
        }
      }
    }
  }
`;
const queryMyBiddings = `
  query {
    user {
      myBiddings {
        totalCount,
        edges {
          node {
            id,
            amount,
            trashWord,
            good {
              id,
              title,
              description,
              image
            }
          }
        }
      }
    }
  }
`;

export default container({
  query: queryAllGoods,
})(CSSModules(Market, styles));