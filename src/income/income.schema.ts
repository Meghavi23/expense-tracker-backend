import { Schema, Document } from 'mongoose';

export const IncomeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  source: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

export interface Income extends Document {
  userId: string;
  source: string;
  amount: number;
  date: Date;
}
