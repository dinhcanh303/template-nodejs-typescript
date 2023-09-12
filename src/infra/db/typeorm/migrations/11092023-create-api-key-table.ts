import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateApiKeyTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE public."api_keys"(
        "id"           UUID PRIMARY KEY DEFAULT uuid_generate_v1mc(),
        "key"          VARCHAR(255),
        "status"       BOOLEAN DEFAULT FALSE,
        "permissions"  VARCHAR(200) NULL,
        "createdAt"    TIMESTAMP WITH TIME ZONE NULL,
        "updatedAt"    TIMESTAMP WITH TIME ZONE NULL,
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE public."api_keys";');
  }
}
