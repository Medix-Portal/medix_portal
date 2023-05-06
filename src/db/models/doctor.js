const knex = require('../knex');

//only need to view doctors from database
class Doctor {
    constructor({ id}) {
        this.id = id;
    }

    static async list() {
        try {
            const query = await knex.raw('SELECT * FROM doctors;');
            // const { rows } = await knex.raw(query);
            // return rows.map((doctor) => new Doctor(doctor));
            return query.rows;
        } catch (err) {
            console.error(err);
            return null;
        }
    }


     static async find(id) {
         try {
            //   const query = 'SELECT * FROM doctors WHERE doctor_id = ?';
            //    const { rows: [doctor] } = await knex.raw(query, [id]);
            //    return doctor ? new Doctor(doctor) : null;
               const result = await knex.raw(`SELECT * FROM doctors WHERE doctor_id=?;
               `, [id]);
               return result.rows[0];
         } catch (err) {
             console.error(err);
            return null;
         }
     }
}


module.exports = Doctor;