export type Options = {
    label: string;
    to: string;
    active?: boolean;
};

type iconType = 'sprit' | 'shoulder'
export interface breadcrumbProps {
    className?: string;
    options: Options[];
    iconType?: iconType;
}