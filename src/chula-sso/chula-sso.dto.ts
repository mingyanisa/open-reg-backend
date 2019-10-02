export interface ChulaSsoSuccessResponse {
    uid: string;
    username: string;
    gecos: string;
    email: string;
    roles: string[];
    ouid: string;
}

export interface ChulaSsoFailedResponse {
    type: string;
    content: string;
}
