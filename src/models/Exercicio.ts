export class Exercicio {
    $key: any;

    constructor(
        public nome?: string,
        public desc?: string,
        public nivel?: number,
        public instrumento?: string[],
        public criador?: string){};
}