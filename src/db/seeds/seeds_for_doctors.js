/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('doctors').del()
  await knex('doctors').insert([
    {name: 'Anjum Hashim', specialty: 'Neurology'},
    {name: 'Khalid Tabbarah', specialty: 'Neurology'},
    {name: 'Matthew D. Sanger ', specialty: 'Neurology'},
    {name: 'Koto Ishida', specialty: 'Neurology'},
    {name: 'Alexander Mironov', specialty: 'Cardiology'},
    {name: 'Henock Saint-Jacques', specialty: 'Cardiology'},
    {name: 'Owen T. Yen', specialty: 'Cardiology'},
    {name: 'Elisa Khanna', specialty: 'Dentistry'},
    {name: 'Marci H. Levine', specialty: 'Dentistry'},
    {name: 'Ross Kerr', specialty: 'Dentistry'},
    {name: 'Sophie Greenberg', specialty: 'Dermatology'},
    {name: 'Yasmin Amir', specialty: 'Dermatology'},
    {name: 'Krystal Mitchell', specialty: 'Dermatology'},
    {name: "John Smith", specialty: "Cardiology"},
  ]);

};
