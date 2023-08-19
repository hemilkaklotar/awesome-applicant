export const DOMAIN = 'localhost';

export const enum HTTP_CODE {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
}

export const enum RESPONSE_TYPE {
    SUCCESS = 'success',
    ERROR = 'error',
}

const Apum = {
        pl: 'adsd',
        asd: parseInt('2.4',1),
        asdsa: +'5'
    };

console.log("APUM", Apum)
export type APUM = typeof Apum