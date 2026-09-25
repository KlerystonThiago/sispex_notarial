import type { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { env } from '../config/env.js'
import type { LoginDTO, AuthResponse, TokenPayload } from '../types/auth.types.js'

const MOCK_USER = {
    id: 'usr-1002',
    name: 'Kleryston Thiago',
    email: 'admin@mail.com',
    passwordHash: bcrypt.hashSync('admin123', 8),
    role: 'Admin'
}

export class AuthController {
    public static async login( req: Request, res: Response ) {
        try{
            const { email, password } = req.body as LoginDTO;

            if(!email || !password ) {
                return res.status(400).json({ error: 'Email e senha são obrigatórios' });
            }

            if( email !== MOCK_USER.email ) {
                return res.status(401).json({ error: 'Email ou senha inválidos.' });
            }

            const passwordMatch = await bcrypt.compare(password, MOCK_USER.passwordHash);

            if( !passwordMatch ) {
                return res.status(401).json({ error: 'Email ou senha inválidos.' });
            }

            const payload: TokenPayload = {
                userId: MOCK_USER.id,
                email: MOCK_USER.email,
                role: MOCK_USER.role
            };

            const token = jwt.sign(payload, env.JWT_SECRET, {
                expiresIn: env.JWT_EXPIRES_IN
            });

            const responseData: AuthResponse = {
                token,
                user: {
                    id: MOCK_USER.id,
                    name: MOCK_USER.name,
                    email: MOCK_USER.email,
                    role: MOCK_USER.role
                }
            };

            return res.status(200).json(responseData);
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno ao processar login' });
        }
    }

    public static async me( req: Request, res: Response){
        return res.status(200).json({
            message: 'Usuário autenticado com sucesso.',
            user: req.user
        })
    }
}