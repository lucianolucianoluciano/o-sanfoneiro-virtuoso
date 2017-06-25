import { Exercicio } from './Exercicio';

export class Serie {
    constructor(
        public tempo: string,
        public segundos: number,
        public instrumento: string,
        public exercicio: Exercicio
    ){}
}