import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Info from './Info';
import BidTableContainer from '../../containers/BidTableContainer';
import Loading from '../Loading';

class GoodDetail extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'GoodDetail';
  }
  componentWillMount() {
    const { getGood, params } = this.props;
    return getGood(params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.good) {
      const { getGood, params } = this.props;
      getGood(params.id);
    }
  }
  render() {
    const { isLoading, good } = this.props;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div styleName="container">
        <Info good={good} />
        <div styleName="bid-content">
          <BidTableContainer biddings={good.allBiddings.biddings} goodId={good.id} />
        </div>
      </div>
    );
  }
}

GoodDetail.propTypes = {
  getGood: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.array,
  good: PropTypes.object,
  params: PropTypes.object.isRequired,
};

export default CSSModules(GoodDetail, styles);