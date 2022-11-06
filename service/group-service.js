const GroupModel = require('../models/group-model');
const ApiError = require("../exeptions/api-error");

class GroupService {
    async create(name, owner) {
        const candidate = await GroupModel.findOne({name});
        if (candidate) {
            throw ApiError.BadRequest(`Группа с названием ${name} уже существует`);
        }
        const group = await GroupModel.create({name, owner});
        return group;
    }

    async checkOwner(groupId, userId) {
        const group = await GroupModel.findById(groupId);
        if (!group) {
            ApiError.BadRequest('Группа не найдена');
        }
        return group.owner === userId
    }

    async deleteGroup(groupId) {
        const groupData = GroupModel.deleteOne({_id: groupId});
        return groupData;
    }

    async getGroups() {
        const groups = GroupModel.find();
        return groups;
    }

    async getUsersGroups(owner) {
        const groups = GroupModel.find({owner});
        return groups;
    }
}

module.exports = new GroupService();