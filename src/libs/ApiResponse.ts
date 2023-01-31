export default class ApiResponse {
    errorList?: Array<string>;

    private constructor(readonly success: boolean, readonly message: string) {}

    public static success(message: string): ApiResponse {
        return new ApiResponse(true, message);
    }

    public static error(message: string, errorList?: Array<string>): ApiResponse {
        return new ApiResponse(false, message);
    }

    public addError(error: string): ApiResponse {
        if (this.errorList === undefined) this.errorList = [];
        this.errorList.push(error);

        return this
    }
}
