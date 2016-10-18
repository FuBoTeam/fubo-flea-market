import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Info from './Info';
import BidTableContainer from '../../containers/BidTableContainer';
import Loading from '../Loading';
import Updating from '../Updating';
import { Button } from 'belle';
const refreshBtn = {
  float: 'right',
};

class GoodDetail extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'GoodDetail';
  }
  componentWillMount() {
    const { getGood, params } = this.props;
    return getGood(params.id);
  }
  render() {
    const { isLoading, isUpdating, good, getGood, params, error } = this.props;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div>
        {(isUpdating) ? (<Updating />) : null}
        <div styleName="container">
          <Info good={good} />
          <div styleName="bid-content">
            <BidTableContainer biddings={good.allBiddings.biddings} goodId={good.id} utcTime={good.utcTime} extendedCount={good.extendedCount} />
            {(error) ? (<p className="bg-info" styleName="info-block">Refresh the page.</p>) : null}
            <Button type="button" style={refreshBtn} onClick={() => { getGood(params.id); }}>Refresh</Button>
          </div>
        </div>
      </div>
    );
  }
}

GoodDetail.propTypes = {
  getGood: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  error: PropTypes.array,
  good: PropTypes.object,
  params: PropTypes.object.isRequired,
};

export default CSSModules(GoodDetail, styles);