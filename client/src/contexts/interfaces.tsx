export interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
}
