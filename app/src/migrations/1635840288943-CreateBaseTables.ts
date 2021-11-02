import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBaseTables1635840288943 implements MigrationInterface {
  name = 'CreateBaseTables1635840288943';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`books\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`books\``);
  }
}
