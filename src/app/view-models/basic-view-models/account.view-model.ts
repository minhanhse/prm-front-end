export class AccountCM {
    public email: string;
    public fullname: string;
    public phone: string;
    public password: string;
    public role: string;
    constructor(model: AccountCM) {
        this.fullname = model.fullname;
        this.phone = model.phone;
        this.password = model.password;
        this.email = model.email;
        this.role = model.role;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class AccountUM {
    public email: string;
    public fullname: string;
    public phone: string;
    public password: string;
    public role: string;
    constructor(model: AccountUM) {
        this.fullname = model.fullname;
        this.phone = model.phone;
        this.password = model.password;
        this.email = model.email;
        this.role = model.role;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
export class AccountVM {
    public email: string;
    public fullname: string;
    public phone: string;
    public password: string;
    public historys: any[];
    public role: string;
    constructor(model: AccountVM) {
        this.fullname = model.fullname;
        this.phone = model.phone;
        this.password = model.password;
        this.email = model.email;
        this.historys = model.historys;
        this.role = model.role;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
