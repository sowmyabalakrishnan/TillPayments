"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const customer_dto_1 = require("../dto/customer.dto");
let CustomerService = class CustomerService {
    constructor() {
        this.customers = [
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
    }
    create(customerDTO) {
        this.customers.push(customerDTO);
        console.log(' this.customers POST --- ', this.customers);
        return customerDTO;
    }
    findAll() {
        console.log(' this.customers GET--- ', this.customers);
        return this.customers;
    }
    update(customerDTO) {
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
    delete(id) {
        console.log('delete...this.customers.length --->', this.customers.length);
        for (var i = 0; i < this.customers.length; i++) {
            if (this.customers[i].id === id) {
                this.customers.splice(i, 1);
                i--;
            }
        }
        console.log(' this.customers delete--- ', this.customers);
        return this.customers;
    }
};
CustomerService = __decorate([
    common_1.Injectable()
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map