"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations = void 0;
class Migrations {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE "users" RENAME COLUMN "name" to "fullname"');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE "users" RENAME COLUMN "fullname" to "name"');
    }
}
exports.Migrations = Migrations;
//# sourceMappingURL=migrations.js.map