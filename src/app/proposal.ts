import { LineItem } from './lineItem';

export class Proposal {
  id: number;
  name: string;
  companyId?: number;
  lineItems: LineItem[]
}