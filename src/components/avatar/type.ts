
type status = 'online' | 'processing' | 'away' | 'offline' | 'busy';

export interface AvatarProps {
    className?: string;
    round?: string;
    status?: status;
    src?: string;
    width?: string;
    height?: string;
    statusPosition?: string;
}
