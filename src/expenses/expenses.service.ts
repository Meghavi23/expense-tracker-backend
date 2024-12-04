import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expense } from './expense.schema';

@Injectable()
export class ExpensesService {
  constructor(@InjectModel('Expense') private expenseModel: Model<Expense>) {}

  async createExpense(
    userId: string,
    category: string,
    amount: number,
    date: Date,
  ) {
    const newExpense = new this.expenseModel({
      userId,
      category,
      amount,
      date,
    });
    return newExpense.save();
  }

  async getExpenses(userId: string) {
    return this.expenseModel.find({ userId }).exec();
  }

  async updateExpense(id: string, updateData: Partial<Expense>) {
    return this.expenseModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async deleteExpense(id: string) {
    return this.expenseModel.findByIdAndDelete(id).exec();
  }
}
