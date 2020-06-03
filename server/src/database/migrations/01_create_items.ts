import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('items', table =>{
        // campos da tabela
        table.increments('id').primary();//id ou numero
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('items')
}