import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { IncomeSchema } from './income.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Income', schema: IncomeSchema }]),
  ],
  providers: [IncomeService],
  controllers: [IncomeController],
})
export class IncomeModule {}
