export type AuthContextType = {
    login: () => void;
    logout: () => void;
    isAuthentificated: boolean;
}