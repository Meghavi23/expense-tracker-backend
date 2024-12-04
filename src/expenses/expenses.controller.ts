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
import { ExpensesService } from './expenses.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('expenses')
@UseGuards(JwtAuthGuard)
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  async create(
    @Request() req,
    @Body('category') category: string,
    @Body('amount') amount: number,
    @Body('date') date: Date,
  ) {
    return this.expensesService.createExpense(
      req.user.userId,
      category,
      amount,
      date,
    );
  }

  @Get()
  async findAll(@Request() req) {
    return this.expensesService.getExpenses(req.user.userId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: any) {
    return this.expensesService.updateExpense(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.expensesService.deleteExpense(id);
  }
}
