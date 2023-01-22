import { Quotation } from "../model/Quotation";
import {
    IQuotationsRepository,
    ICreateQuotationDTO,
} from "./IQuotationsRepository";

class QuotationRepository implements IQuotationsRepository {
    private quotations: Quotation[];

    constructor() {
        this.quotations = [];
    }

    create({ code, name, high, low }: ICreateQuotationDTO): void {
        const quotation = new Quotation();

        Object.assign(quotation, {
            code,
            name,
            high,
            low,
            type: "FICTITIOUS",
            created_at: new Date(),
            updated_at: new Date(),
        });

        this.quotations.push(quotation);
    }

    list(): Quotation[] {
        return this.quotations;
    }

    findByCode(code: string): Quotation {
        const quotation = this.quotations.find(
            (quotation) => quotation.code.toUpperCase() === code
        );
        return quotation;
    }
}

export { QuotationRepository };
