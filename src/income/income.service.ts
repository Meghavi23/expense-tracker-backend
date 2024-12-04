import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Income } from './income.schema';

@Injectable()
export class IncomeService {
  constructor(@InjectModel('Income') private incomeModel: Model<Income>) {}

  async createIncome(
    userId: string,
    source: string,
    amount: number,
    date: Date,
  ) {
    const newIncome = new this.incomeModel({ userId, source, amount, date });
    return newIncome.save();
  }

  async getIncomes(userId: string) {
    return this.incomeModel.find({ userId }).exec();
  }

  async updateIncome(id: string, updateData: Partial<Income>) {
    return this.incomeModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async deleteIncome(id: string) {
    return this.incomeModel.findByIdAndDelete(id).exec();
  }
}
