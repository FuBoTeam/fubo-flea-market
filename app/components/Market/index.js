import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Block from './Block';
import EditBlockContainer from '../../containers/EditBlockContainer';
import styles from './goods.css';
import Loading from '../Loading';

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
    } = this.props;
    if (params.filter === 'my-selling') {
      return getMyGoods();
    } else if (params.filter === 'my-bids') {
      return getMyGoods();
    }
    return getAllGoods();
  }
  componentWillReceiveProps(nextProps) {
    if ((this.props.params.filter ||
         nextProps.params.filter) &&
        !(this.props.params.filter &&
          nextProps.params.filter &&
          this.props.params.filter === nextProps.params.filter)) {
      if (nextProps.params.filter === 'my-selling' || nextProps.params.filter === 'my-bids') {
        return nextProps.getMyGoods();
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
    const { isAllLoading, isMyLoading, goods, myGoods, biddings, params } = this.props;
    if (params.filter === 'my-selling') {
      if (isMyLoading) {
        return <Loading />;
      }
      if (myGoods === null || myGoods.totalCount === 0) {
        return <p className="bg-info" styleName="info-block">Sell something now!</p>;
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
      if (isMyLoading) {
        return <Loading />;
      }
      if (biddings === null || biddings.totalCount === 0) {
        return <p className="bg-info" styleName="info-block">Bid something now!</p>;
      }
      let biddingGoods = [];
      let uniqueId = [];
      for (let i = 0; i < biddings.totalCount; i++) {
        if (uniqueId.indexOf(biddings.edges[i].node.good.id) < 0) {
          uniqueId = [
            ...uniqueId,
            biddings.edges[i].node.good.id,
          ];
          biddingGoods = [
            ...biddingGoods,
            biddings.edges[i].node.good,
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
      return <p className="bg-info" styleName="info-block">Oops, nothing here, wanna sell something?</p>;
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
  getAllGoods: PropTypes.func.isRequired,
  getMyGoods: PropTypes.func.isRequired,
  isAllLoading: PropTypes.bool.isRequired,
  isMyLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  goods: PropTypes.object,
  myGoods: PropTypes.object,
  biddings: PropTypes.object,
  params: PropTypes.object.isRequired,
  action: PropTypes.object,
};

export default CSSModules(Market, styles);