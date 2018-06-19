import { Proposal } from '../proposal';
import { LineItem } from '../lineItem';

export const PROPOSALS: Proposal[] = [{
  id: 11, 
  name: 'Mr. Nice', 
  lineItems: [{
    text: 'Demolish the building', 
    amount: 1000
  }]
}, {
  id: 12, 
  name: 'Some other nice guy', 
  lineItems: [{
    text: 'Demolish the building', 
    amount: 1000
  }, {
    text: 'Remove a tree', 
    amount: 500
  }]
}];

// const proposal = { 
//     id: 20,
//     name: 'Tornado'
//   };

//   PROPOSALS.push(proposal);