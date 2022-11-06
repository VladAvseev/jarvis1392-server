module.exports = class UserDto {
    email;
    _id;
    isActivated;
    username;

    constructor(model) {
        this.email = model.email;
        this._id = model._id;
        this.isActivated = model.isActivated;
        this.username = model.username;
    }
}