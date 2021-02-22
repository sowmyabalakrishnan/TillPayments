import { TransactionDto } from "../../transaction/dto/transaction.dto";
export declare class MerchantDto {
    id: string;
    name: string;
    isTrading: boolean;
    currency: string;
    transactions: TransactionDto[];
}
