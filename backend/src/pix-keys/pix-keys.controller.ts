import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePixKeyDto } from './dto/create-pix-key.dto';
import { PixKeysService } from './pix-keys.service';

@Controller('bank-accounts/:bankAccountId/pix-keys')
export class PixKeysController {
  constructor(private readonly pixKeysService: PixKeysService) {}

  @Post()
  create(
    @Param('bankAccountId') bankAccountId: string,
    @Body() createPixKeyDto: CreatePixKeyDto,
  ) {
    return this.pixKeysService.create(bankAccountId, createPixKeyDto);
  }

  @Get()
  findAll(@Param('bankAccountId') bankAccountId: string) {
    return this.pixKeysService.findAll(bankAccountId);
  }
}
