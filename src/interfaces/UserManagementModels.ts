export interface DialogueConfig {
    show: boolean;
    errorMsg: string;
    hideFooter?: boolean;
    isLargeDialog?: boolean;
    noCloseButton?: boolean;
    showCancelButton?: boolean;
}

export enum UserManagement {
 Login,
 Register,
}
export interface ApplicationUser {
    Username: string;
    Password: string;
    Email?: string;
    PhoneNumber?: string;
    Token?: string;
    Validity?: string;
}

export interface UserData {
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
}