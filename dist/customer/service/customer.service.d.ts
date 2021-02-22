import { CustomerDto } from 'src/customer/dto/customer.dto';
export declare class CustomerService {
    customers: CustomerDto[];
    create(customerDTO: CustomerDto): CustomerDto;
    findAll(): CustomerDto[];
    update(customerDTO: CustomerDto): CustomerDto[];
    delete(id: any): CustomerDto[];
}
