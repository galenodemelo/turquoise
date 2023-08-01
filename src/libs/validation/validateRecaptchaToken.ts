export default async function validateRecaptchaToken(recaptchaToken: string): Promise<boolean> {
    const recaptchaUrl: string = "https://www.google.com/recaptcha/api/siteverify";
    const response: Response = await fetch(recaptchaUrl, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" }),
        body: new URLSearchParams({
            secret: process.env.GOOGLE_RECAPTCHA_SECRET ?? "",
            response: recaptchaToken,
        }),
    });

    const responseJson: any = await response.json();
    if (!responseJson?.success)
        console.error("validateRecaptchaToken >> Erro desconhecido", responseJson);

    return responseJson?.success;
}
