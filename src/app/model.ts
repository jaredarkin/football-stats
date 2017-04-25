export class Member {
    id: number;
    name: string;
    years: string[];
    yearlyResults: YearlyResults[];
}

export class YearlyResults {
    year: string;
    wins: number;
    losses: number;
    pushes: number;
    percentage: number;
}