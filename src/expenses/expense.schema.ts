import { Schema, Document } from 'mongoose';

export const ExpenseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

export interface Expense extends Document {
  userId: string;
  category: string;
  amount: number;
  date: Date;
}
