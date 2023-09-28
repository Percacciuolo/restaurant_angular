export interface Orders {
    id: number;
    order: string[];
    table: string;
    hour: string;
    status: string;
    timer?: {hour : number, second:number, minute: number};
}
