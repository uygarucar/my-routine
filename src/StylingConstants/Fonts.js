import Metrics from './Metrics';

const type = {
  regular: 'CenturyGothicRegular',
  bold: 'CenturyGothicBold',

};

const step = Metrics.width * 0.0025;
const zero = Metrics.width * 0.002;

const size = punto => zero + step * punto;

export default {
  type,
  size,
};
