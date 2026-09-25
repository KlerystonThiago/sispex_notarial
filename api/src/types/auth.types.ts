export interface LoginDTO {
    email: string;
    password: string;
}

export interface TokenPayload {
    userId: string;
    email: string;
    role: string;
    iat?: number;
    exp?: number
}

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
    }
}