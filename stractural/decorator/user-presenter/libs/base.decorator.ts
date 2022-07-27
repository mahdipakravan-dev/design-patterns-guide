import {User} from "./user";

export class BaseDecorator extends User {
    constructor(
        protected userWrappe : User
    ) {
        super(userWrappe.name , userWrappe.lastName , userWrappe.create_at , userWrappe.updated_at)
    }
}
