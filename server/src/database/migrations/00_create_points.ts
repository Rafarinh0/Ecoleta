import Knex from 'knex';
//os tipos do typescript geralmente tem letra maiuscula


export async function up(knex: Knex){
    // CRIAR A TABELA
   return knex.schema.createTable('points', table =>{
        // campos da tabela
        table.increments('id').primary();//id ou numero
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string(' email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string(' uf', 2).notNullable();//uf só tem 2 caracteres
    });
}

export async function down(knex: Knex){
    // VOLTAR ATRÁS (DELETAR A TABELA)
    return knex.schema.dropTable('points')
}