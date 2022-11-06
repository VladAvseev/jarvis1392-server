const groupService = require('../service/group-service')

class GroupController {
    async create(req, res, next) {
        try {
            const {name, owner} = req.body;
            const group = await groupService.create(name, owner);
            return res.json(group);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {groupId, userId} = req.body;
            const isOwner = await groupService.checkOwner(groupId, userId);
            if (isOwner) {
                const groupData = await groupService.deleteGroup();
                return res.json({message: 'success'});
            } else {
                return res.json({message: 'you are not the owner'});
            }
        } catch (error) {
            next(error);
        }
    }

    async removeUser(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }

    async sendInvite(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }

    async acceptInvite(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }

    async getGroups(req, res, next) {
        try {
            const groups = await groupService.getGroups();
            return res.json(groups);
        } catch (error) {
            next(error);
        }
    }

    async getUserGroups(req, res, next) {
        try {
            const {userId} = req.query;
            console.log(userId);
            const groups = await groupService.getUsersGroups(userId);
            res.json(groups);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new GroupController();