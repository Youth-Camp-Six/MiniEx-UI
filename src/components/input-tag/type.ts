type typeRules = 'primary' | 'info' | 'success' | 'error' | 'warning' | 'normal';
export interface InputTagProps {
    type?: typeRules;
    modelValue?: string[];
}
