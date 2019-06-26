export interface BoundStore {
    startUp?: () => void;
    toFinish?: () => void;
    onMount?:() => void;
}