import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { BankAccount } from './entities/bank-account.entity';

@Injectable()
export class BankAccountsService {
  constructor(
    @InjectRepository(BankAccount)
    private bankAccountRepo: Repository<BankAccount>,
  ) {}
  create(createBankAccountDto: CreateBankAccountDto) {
    return this.bankAccountRepo.save(createBankAccountDto);
  }

  findAll() {
    return this.bankAccountRepo.find();
  }

  findOne(id: string) {
    return this.bankAccountRepo.findOneOrFail({ where: { id } });
  }
}
