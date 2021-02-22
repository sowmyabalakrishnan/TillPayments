import { MerchantDto } from 'src/merchant/dto/merchant.dto';
export declare class ServiceService {
    merchants: MerchantDto[];
    findAll(): MerchantDto[];
    find(id: string): MerchantDto;
}
