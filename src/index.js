import './index.css'
import numeral from 'numeral';

const courseValue = numeral(1000000000000).format('$0,0.00');
console.log(`I would like to pay ${courseValue} for this awesome course!`);