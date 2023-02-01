export type Alert = {
    type: string;
    title: string;
    content: string;
};
export interface AlertProps {
    list?: Alert[];
    className?: string
}