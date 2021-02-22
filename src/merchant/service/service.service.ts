import { Injectable } from '@nestjs/common';
import { MerchantDto } from 'src/merchant/dto/merchant.dto';


@Injectable()
export class ServiceService {
    public merchants: MerchantDto[] = [
        {
            "id": "001",
            "name": "Barney's Deals on Wheels",
            "isTrading": true,
            "currency": "AUD",
            "transactions": [
                {
                    "id": "001",
                    "amount": 45000,
                    "description": "Minor Service",
                    "ccLastFour": "4234",
                    "ccExpiry": "11/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "001",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "002",
                    "amount": 56000,
                    "description": "Major Service",
                    "ccLastFour": "5643",
                    "ccExpiry": "11/02",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "002",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "003",
                    "amount": 2000,
                    "description": "Detailers Polish Medium cut",
                    "ccLastFour": "3356",
                    "ccExpiry": "12/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "001",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "004",
                    "amount": 2000,
                    "description": "Rear subframe bushing replacement",
                    "ccLastFour": "5532",
                    "ccExpiry": "11/07",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "002",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "005",
                    "amount": 1500,
                    "description": "Detailers Claybar",
                    "ccLastFour": "4356",
                    "ccExpiry": "11/08",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "003",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "006",
                    "amount": 2500,
                    "description": "Detailers No Grit Bucket",
                    "ccLastFour": "4356",
                    "ccExpiry": "11/08",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "003",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "007",
                    "amount": 5500,
                    "description": "Microfiber starter kit",
                    "ccLastFour": "4356",
                    "ccExpiry": "11/08",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "003",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "008",
                    "amount": 1500,
                    "description": "Detailers No Grit Bucket",
                    "ccLastFour": "4356",
                    "ccExpiry": "11/08",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "001",
                    "date": "2020-09-21 04:56:58.701972"
                }
            ]
        },
        {
            "id": "002",
            "name": "Nurburgring Laps",
            "isTrading": true,
            "currency": "EURO",
            "transactions": [
                {
                    "id": "001",
                    "amount": 2000,
                    "description": "1 Lap",
                    "ccLastFour": "4234",
                    "ccExpiry": "11/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "004",
                    "date": "2020-10-21 02:56:58.701972"
                },
                {
                    "id": "002",
                    "amount": 7000,
                    "description": "5 Laps",
                    "ccLastFour": "4234",
                    "ccExpiry": "11/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "004",
                    "date": "2020-10-21 02:56:58.701972"
                },
                {
                    "id": "003",
                    "amount": 12000,
                    "description": "Day Pass",
                    "ccLastFour": "4234",
                    "ccExpiry": "11/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "004",
                    "date": "2020-10-21 02:56:58.701972"
                },
                {
                    "id": "004",
                    "amount": 2000,
                    "description": "1 Lap",
                    "ccLastFour": "4234",
                    "ccExpiry": "11/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "005",
                    "date": "2020-10-21 02:56:58.701972"
                },
                {
                    "id": "005",
                    "amount": 7000,
                    "description": "5 Laps",
                    "ccLastFour": "4234",
                    "ccExpiry": "11/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "005",
                    "date": "2020-10-21 02:56:58.701972"
                },
                {
                    "id": "006",
                    "amount": 40000,
                    "description": "Season Pass",
                    "ccLastFour": "4234",
                    "ccExpiry": "11/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "006",
                    "date": "2020-10-21 02:56:58.701972"
                },
                {
                    "id": "007",
                    "amount": 3000,
                    "description": "M3 Experience",
                    "ccLastFour": "4234",
                    "ccExpiry": "11/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "006",
                    "date": "2020-10-21 02:56:58.701972"
                }
            ]
        },
        {
            "id": "003",
            "name": "Sydney Car Body Works",
            "isTrading": true,
            "currency": "AUD",
            "transactions": [
                {
                    "id": "001",
                    "amount": 505000,
                    "description": "Rust Repair",
                    "ccLastFour": "4234",
                    "ccExpiry": "11/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "007",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "002",
                    "amount": 20000,
                    "description": "Bumper Respray",
                    "ccLastFour": "5643",
                    "ccExpiry": "11/02",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "007",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "003",
                    "amount": 22000,
                    "description": "Dent Removal",
                    "ccLastFour": "3356",
                    "ccExpiry": "12/04",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "007",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "004",
                    "amount": 850000,
                    "description": "Sandblasting",
                    "ccLastFour": "5532",
                    "ccExpiry": "11/07",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "008",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "005",
                    "amount": 40000,
                    "description": "Respray",
                    "ccLastFour": "435",
                    "ccExpiry": "11/08",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "008",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "006",
                    "amount": 400000,
                    "description": "Sodablasting",
                    "ccLastFour": "435",
                    "ccExpiry": "11/08",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "008",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "007",
                    "amount": 40000,
                    "description": "Bumper Repair",
                    "ccLastFour": "435",
                    "ccExpiry": "11/08",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "008",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "008",
                    "amount": 300500,
                    "description": "Dustless Blasting",
                    "ccLastFour": "435",
                    "ccExpiry": "11/08",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "008",
                    "date": "2020-09-21 04:56:58.701972"
                },
                {
                    "id": "009",
                    "amount": 143500,
                    "description": "Wheel Refurbishment",
                    "ccLastFour": "435",
                    "ccExpiry": "11/08",
                    "ccToken": "GH:D54356JJ$#2>GERG",
                    "customerId": "009",
                    "date": "2020-09-21 04:56:58.701972"
                }
            ]
        }
    ];

    findAll(): MerchantDto[] {
        console.log(' this.merchants GET--- ', this.merchants);
        return this.merchants;
    }

    find(id: string): MerchantDto {
        console.log(' this.merchants GET--- ', this.merchants);
        let merchantDTO: MerchantDto;
        for (var i = 0; i < this.merchants.length; i++) {

            if (this.merchants[i].id === id) {
                merchantDTO = this.merchants[i];
            }
        }
        return merchantDTO;
    }
}
