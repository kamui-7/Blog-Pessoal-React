interface UserLogin {
    id: number;
    email: string;
    senha: string;
    token?: string| null;
}

export default UserLogin;