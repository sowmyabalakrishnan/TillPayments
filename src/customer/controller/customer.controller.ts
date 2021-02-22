import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CustomerService } from '../service/customer.service';
import { CustomerDto } from 'src/customer/dto/customer.dto';

@Controller('customers')
export class CustomerController {
    constructor(private customersService: CustomerService) {

    }
    @Post('/')
    create(@Body() customerDTO: CustomerDto): CustomerDto {
        return this.customersService.create(customerDTO);
    }

    @Get('/')
    findAll(): CustomerDto[] {
        return this.customersService.findAll();
    } 

    @Put('/update')
    update(@Body() customerDTO: CustomerDto): CustomerDto[] {
        return this.customersService.update(customerDTO);
    } 

    @Delete('/delete/:id')
    delete(@Param('id') id: string): CustomerDto[] {
        console.log('Inside controller : delete');
        return this.customersService.delete(id);
    } 
}
