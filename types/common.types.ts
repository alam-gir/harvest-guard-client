export type ResponseShape<T> = {
    success: boolean;
    message: string;
    data: T;
    error?: string;
}