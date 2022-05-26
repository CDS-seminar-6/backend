export default interface ResponseWrapDTO<T> {
    statusCode: number,
    message: string,
    data?: T;
}