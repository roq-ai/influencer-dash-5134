import { UserInterface } from 'interfaces/user';
import { InfluencerInterface } from 'interfaces/influencer';
import { GetQueryInterface } from 'interfaces';

export interface CreditTransactionInterface {
  id?: string;
  user_id: string;
  credits_spent: number;
  influencer_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  influencer?: InfluencerInterface;
  _count?: {};
}

export interface CreditTransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  influencer_id?: string;
}
