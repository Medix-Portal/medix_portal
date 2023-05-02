/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('doctors', (table) => {
    table.increments('doctor-id');
    table.string('name').notNullable().unique();
    table.string('specialty').notNullable();
    table.string('password_hash').notNullable();
    table.timestamps(true, true);
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('doctors');
