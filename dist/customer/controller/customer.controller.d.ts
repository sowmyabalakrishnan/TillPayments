import { CustomerService } from '../service/customer.service';
import { CustomerDto } from 'src/customer/dto/customer.dto';
export declare class CustomerController {
    private customersService;
    constructor(customersService: CustomerService);
    create(customerDTO: CustomerDto): CustomerDto;
    findAll(): CustomerDto[];
    update(customerDTO: CustomerDto): CustomerDto[];
    delete(id: string): CustomerDto[];
}
