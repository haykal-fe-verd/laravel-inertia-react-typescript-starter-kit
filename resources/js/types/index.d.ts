export interface User {
    id: string;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Sessions {
    message?: string;
    success?: string;
    error?: string;
    snapToken?: string;
}

export interface Ziggy {
    routes: {
        [name: string]: string;
    };
    location: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    user: User;
    sessions: Sessions;
    ziggy: Ziggy;
};
