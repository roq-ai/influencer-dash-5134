import { CreditTransactionInterface } from 'interfaces/credit-transaction';
import { GetQueryInterface } from 'interfaces';

export interface InfluencerInterface {
  id?: string;
  name: string;
  location: string;
  language: string;
  genre: string;
  followers: number;
  social_media_links: string;
  created_at?: any;
  updated_at?: any;
  credit_transaction?: CreditTransactionInterface[];

  _count?: {
    credit_transaction?: number;
  };
}

export interface InfluencerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  language?: string;
  genre?: string;
  social_media_links?: string;
}
