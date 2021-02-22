import { TransactionDto } from "../../transaction/dto/transaction.dto";

export class MerchantDto {
    id: string;    
    name: string;
    isTrading: boolean;
    currency: string;
    transactions: TransactionDto[];
}
