import { Request, Response } from "express";

import { CreateCurrencyUseCase } from "./CreateCurrencyUseCase";

class CreateCurrencyController {
    constructor(private createCurrencyUseCase: CreateCurrencyUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { code, codein, bid, ask, name, high, low } = request.body;

        await this.createCurrencyUseCase.execute({
            code,
            codein,
            name,
            high,
            bid,
            ask,
            low,
        });

        return response.status(201).send();
    }
}

export { CreateCurrencyController };
