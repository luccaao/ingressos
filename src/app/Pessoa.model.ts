import { Ingresso } from "./Ingresso.model";

export interface Pessoa {
    id?: string
    email: string,
    password: string,
    ingressosComprados: Ingresso
}