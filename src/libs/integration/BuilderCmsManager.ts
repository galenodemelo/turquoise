export interface SaveProspectParams {
    FirstName: string;
    LastName: string;
    FollowupCode?: FollowupCodeLevels;
    Email?: string;
    Phone?: string;
    StreetAddress?: string;
    City?: string;
    State?: string;
    Zip?: string;
    Comments?: string;
}

interface SaveProspectRequest extends SaveProspectParams {
    AdminEmail?: string;
    CommunityNumber: string;
    Source?: string;
}

export type CmsResponse = {
    success: boolean;
    rawResponse: string;
};

enum FollowupCodeLevels {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
}

export default class BuilderCmsManager {
    baseUrl: string = "https://www.buildercms.com/cms/custom/ProspectImport.aspx";
    communityNumber?: string = process.env.BUILDERCMS_COMMUNITY_ID;
    defaultSource: string = "Turquoise Homes Landing Page";
    defaulFollowupCode: FollowupCodeLevels = FollowupCodeLevels.A;

    keyValueSeparator: string = ":";
    fieldSeparator: string = "~";

    async saveProspect(data: SaveProspectParams): Promise<CmsResponse> {
        if (!this.communityNumber) throw new Error("Community number is not set");

        const requestParams: SaveProspectRequest = {
            ...data,
            AdminEmail: process.env.CONTACT_FORM_RECEIVER,
            CommunityNumber: this.communityNumber,
            Source: this.defaultSource,
            FollowupCode: data.FollowupCode ?? this.defaulFollowupCode,
        };

        const request: Response = await fetch(this.buildUrl("ProspectData", requestParams), {
            method: "GET",
            headers: {
                "Content-Type": "application/url-encoded",
            },
        });
        const response: string = await request.text();
        const success: boolean = response.includes("ImportSuccessful");

        return { success: success, rawResponse: response };
    }

    buildUrl(paramName: string, data: SaveProspectParams) {
        let fieldList: string[] = [];

        let key: keyof SaveProspectParams;
        for (key in data) fieldList.push(`${key}${this.keyValueSeparator}${data[key]}`);

        return `${this.baseUrl}?${paramName}=${fieldList.join(this.fieldSeparator)}`;
    }
}
