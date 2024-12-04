import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { IncomeService } from './income.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('income')
@UseGuards(JwtAuthGuard)
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post()
  async create(
    @Request() req,
    @Body('source') source: string,
    @Body('amount') amount: number,
    @Body('date') date: Date,
  ) {
    return this.incomeService.createIncome(
      req.user.userId,
      source,
      amount,
      date,
    );
  }

  @Get()
  async findAll(@Request() req) {
    return this.incomeService.getIncomes(req.user.userId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: any) {
    return this.incomeService.updateIncome(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.incomeService.deleteIncome(id);
  }
}
