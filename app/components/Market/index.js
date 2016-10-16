import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Block from './Block';
import EditBlockContainer from '../../containers/EditBlockContainer';
import styles from './goods.css';
import Loading from '../Loading';
import {
  Link,
} from 'react-router';

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Market';
  }
  componentWillMount() {
    const {
      params,
      getAllGoods,
      getMyGoods,
      getMyBiddings,
    } = this.props;
    if (params.filter === 'my-selling') {
      return getMyGoods();
    } else if (params.filter === 'my-bids') {
      return getMyBiddings();
    }
    return getAllGoods();
  }
  componentWillReceiveProps(nextProps) {
    // Switching between different tabs should fetch data
    if ((this.props.params.filter ||
         nextProps.params.filter) &&
        !(this.props.params.filter &&
          nextProps.params.filter &&
          this.props.params.filter === nextProps.params.filter)) {
      // Get my goods when gonna switch to my-selling tab
      // Get my biddings when gonna switch to my-bids tab
      if (nextProps.params && nextProps.params.filter === 'my-selling') {
        return nextProps.getMyGoods();
      } else if (nextProps.params && nextProps.params.filter === 'my-bids') {
        return nextProps.getMyBiddings();
      }
      return nextProps.getAllGoods();
    }
    if (this.props.params.filter === 'my-selling' && nextProps.params.filter === 'my-selling') {
      if (nextProps.action !== null) {
        nextProps.actionClear();
        return nextProps.getMyGoods();
      }
    }
    return {};
  }
  render() {
    const {
      isAllLoading,
      goods,
      isMyBiddingsLoading,
      myBiddings,
      isMyGoodsLoading,
      myGoods,
      params,
    } = this.props;
    if (params.filter === 'my-selling') {
      if (isMyGoodsLoading) {
        return <Loading />;
      }
      if (myGoods === null || myGoods.totalCount === 0) {
        return <p className="bg-info" styleName="info-block">Start selling today!</p>;
      }
      return (
        <ul styleName="goods-edit-container">{
          myGoods.edges.map((g) => {
            return (
              <EditBlockContainer key={g.node.id} good={g.node} />
            );
          })
        }</ul>
      );
    } else if (params.filter === 'my-bids') {
      if (isMyBiddingsLoading) {
        return <Loading />;
      }
      if (myBiddings === null || myBiddings.totalCount === 0) {
        return <p className="bg-info" styleName="info-block">Start bidding now!</p>;
      }
      let biddingGoods = [];
      let uniqueId = [];
      for (let i = 0; i < myBiddings.totalCount; i++) {
        if (myBiddings.edges[i] && myBiddings.edges[i].node && uniqueId.indexOf(myBiddings.edges[i].node.good.id) < 0) {
          uniqueId = [
            ...uniqueId,
            myBiddings.edges[i].node.good.id,
          ];
          biddingGoods = [
            ...biddingGoods,
            myBiddings.edges[i].node.good,
          ];
        }
      }
      return (
        <ul styleName="goods-container">{
          biddingGoods.map((g) => {
            return <Block key={g.id} good={g} />;
          })
        }</ul>
      );
    }
    if (isAllLoading) {
        return <Loading />;
      }
    if (goods === null || goods.totalCount === 0) {
      return <p className="bg-info" styleName="info-block">Oops! No items for sale. <Link to="/upload">Start selling.</Link></p>;
    }
    return (
      <ul styleName="goods-container">
      {
        goods.edges.map((g) => {
          return <Block key={g.node.id} good={g.node} />;
        })
      }</ul>
    );
  }
}

Market.propTypes = {
  getAllGoods: PropTypes.func.isRequired,
  getMyGoods: PropTypes.func.isRequired,
  getMyBiddings: PropTypes.func.isRequired,
  isAllLoading: PropTypes.bool.isRequired,
  isMyGoodsLoading: PropTypes.bool.isRequired,
  isMyBiddingsLoading: PropTypes.bool.isRequired,
  goods: PropTypes.object,
  error: PropTypes.object,
  myGoods: PropTypes.object,
  myGoodsError: PropTypes.object,
  myBiddings: PropTypes.object,
  myBiddingsError: PropTypes.object,
  params: PropTypes.object.isRequired,
  action: PropTypes.object,
};

export default CSSModules(Market, styles);