export interface ResumeCard {
    title: string;
    isCurrency: boolean;
    icon: {
        bg: string,
        class: string
    };
    values: {
        previews: number,
        current: number
    };
}