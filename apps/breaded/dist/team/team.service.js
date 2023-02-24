"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const team_entity_1 = require("./entities/team.entity");
let TeamService = class TeamService {
    constructor(teamModel) {
        this.teamModel = teamModel;
    }
    async create(dto) {
        try {
            const team = await this.teamModel.create(Object.assign(Object.assign({}, dto), { created_at: new Date().toISOString() }));
            return team;
        }
        catch (error) {
            this.handleException(error);
        }
    }
    findAll() {
        return this.teamModel.find();
    }
    async existsTeam(id_users) {
        const members = id_users.split('_');
        const teamsFromDatabase = await this.teamModel.find();
        const teamFiltered = teamsFromDatabase.map((team) => {
            const isContains = team.members.includes(members[0]);
            if (!isContains)
                return null;
            const isContains2 = team.members.includes(members[1]);
            if (!isContains2)
                return null;
            return team;
        });
        const team = teamFiltered.filter((team) => (team === null || team === void 0 ? void 0 : team._id) && team);
        if (!team.length)
            throw new common_1.NotFoundException(`Team does not exist`);
        return team[0];
    }
    async getTeamByUser(id) {
        try {
            const allTeams = await this.teamModel.find();
            const teamsFiltered = allTeams.map((team) => {
                const isContains = team.members.includes(id);
                if (!isContains)
                    return;
                return team;
            });
            const teams = teamsFiltered.filter((team) => (team === null || team === void 0 ? void 0 : team._id) && team);
            return teams;
        }
        catch (error) {
            this.handleException(error);
        }
    }
    async remove(id) {
        try {
            const { deletedCount } = await this.teamModel.deleteOne({ _id: id });
            if (deletedCount === 0)
                throw new common_1.NotFoundException(`Team with id ${id} does not exists`);
            return `Team with id ${id} deleted!`;
        }
        catch (error) {
            this.handleException(error);
        }
    }
    handleException(error) {
        if (error.code === 11000) {
            throw new common_1.BadRequestException(`User exists in db ${JSON.stringify(error.keyvalue)}`);
        }
        console.log(error);
        throw new common_1.InternalServerErrorException(`Can't create User - Check server logs`);
    }
};
TeamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(team_entity_1.Team.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TeamService);
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map