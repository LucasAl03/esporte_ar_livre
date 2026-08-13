import { Injectable } from "@angular/core";

import { Pessoa } from "../models/Pessoa";

@Injectable()
export class AtletaService {
    private atletas: Pessoa[] = []
}
