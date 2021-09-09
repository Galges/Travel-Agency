import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderFrom.scss';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';
const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    countryCode,
  };
  if (options.name != '' && options.contact != '') {
    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('You should fill name and contact');
  }
};
const OrderForm = ({ tripCost, options, setOrderOption, tripId, tripName, countryCode }) => (
  <Row>
    {pricing.map((option) => (
      <Col md={4} key={option.id}>
        <OrderOption
          currentValue={options[option.id]}
          {...option}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
    <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>
      Order now!
    </Button>
  </Row>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};
export default OrderForm;