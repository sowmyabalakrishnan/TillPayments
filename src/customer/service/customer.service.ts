import { Injectable } from '@nestjs/common';
import { CustomerDto } from 'src/customer/dto/customer.dto';

@Injectable()
export class CustomerService {
    public customers: CustomerDto[] = [
        {
            "id": "001",
            "merchantId": "001",
            "name": "Alfred Jones"
        },
        {
            "id": "002",
            "merchantId": "001",
            "name": "Sally Brian"
        },
        {
            "id": "003",
            "merchantId": "001",
            "name": "Jeffery Shorts"
        },
        {
            "id": "004",
            "merchantId": "002",
            "name": "Hugo Boss"
        },
        {
            "id": "005",
            "merchantId": "002",
            "name": "Paul Notpete"
        },
        {
            "id": "006",
            "merchantId": "002",
            "name": "Maggy Spencer"
        },
        {
            "id": "007",
            "merchantId": "003",
            "name": "Dave Telle"
        },
        {
            "id": "008",
            "merchantId": "003",
            "name": "Simon Pegstine"
        },
        {
            "id": "009",
            "merchantId": "003",
            "name": "Andrew Dahoot"
        }
    ];

    create(customerDTO: CustomerDto): CustomerDto {
        this.customers.push(customerDTO);        
        console.log(' this.customers POST --- ', this.customers);
        return customerDTO;
    }

    findAll(): CustomerDto[] {
        console.log(' this.customers GET--- ', this.customers);
        return this.customers;
    }

    update(customerDTO: CustomerDto): CustomerDto[] {
        for (var i = 0; i < this.customers.length; i++) {

            if (this.customers[i].id === customerDTO.id) {
                this.customers[i].id = customerDTO.id;
                this.customers[i].merchantId = customerDTO.merchantId;
                this.customers[i].name = customerDTO.name;                
            }
        }
        console.log(' this.customers update--- ', this.customers);
        return this.customers;
    }

    delete(id): CustomerDto[] {
        console.log('delete...this.customers.length --->', this.customers.length );
        for (var i = 0; i < this.customers.length; i++) {

            if (this.customers[i].id === id) {
                this.customers.splice(i, 1);
                i--;
            }
        }
        console.log(' this.customers delete--- ', this.customers);
        return this.customers;
    }
    
}
