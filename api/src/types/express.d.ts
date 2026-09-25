import { TokenPayload } from './auth.types.ts'

declare global {
    interface Request {
        user?: TokenPayload;
    }
}