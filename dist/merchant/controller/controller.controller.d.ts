import { ServiceService } from '../service/service.service';
import { MerchantDto } from 'src/merchant/dto/merchant.dto';
export declare class ControllerController {
    private merchantService;
    constructor(merchantService: ServiceService);
    findAll(): MerchantDto[];
    find(id: string): MerchantDto;
}
