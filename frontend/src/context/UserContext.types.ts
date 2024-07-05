export interface IUser {
	username: string;
	age?: number;
	email?: string;
	password: string;
}

export type UserContextType = {
	user: IUser | null;
	login: (user: IUser) => void;
	logout: () => void;
}
