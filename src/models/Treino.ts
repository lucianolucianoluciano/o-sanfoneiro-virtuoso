import { Serie } from './Serie';

export class Treino {
    public $key: string;
    public reverseTimestampDia: number
    constructor(public dia: string,
                public timestampDia: number,
                public series: Serie[]
    ){
        this.reverseTimestampDia = this.timestampDia * - 1;
    }
}