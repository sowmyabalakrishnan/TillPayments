import { Controller, Get, Param } from '@nestjs/common';
import { ServiceService } from '../service/service.service';

import { MerchantDto } from 'src/merchant/dto/merchant.dto';


@Controller('merchants')
export class ControllerController {
    constructor(private merchantService: ServiceService) {

    }
    @Get('/')
    findAll(): MerchantDto[] {
        return this.merchantService.findAll();
    } 

    @Get('/GET/:id')
    find(@Param('id')id: string): MerchantDto {
        return this.merchantService.find(id);
    } 
}
