/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.hasTable('doctors').then(function(exists) {
        if (!exists) {
          return knex.schema.createTable('doctors', function(table) {
            table.increments('doctor-id').primary();
            table.string('name').notNullable();
            table.string('specialty').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
          });
        }
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists('doctors');
};
