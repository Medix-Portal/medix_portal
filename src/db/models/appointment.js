//const listAppointments = require('../../controllers/appointments/list');
const knex = require('../knex');
//const authUtils = require('../../utils/auth-utils');


class Appointment {
//   constructor({ id, user_id, doctor_id, date }) {
//     this.id = id;
//     this.user_id = user_id;
//     this.doctor_id = doctor_id;
//     this.date = date;
//   }

  static async create(doctor_id, user_id, date) {
    try {
      const result = await knex.raw( `
        INSERT INTO appointments (doctor_id, user_id, appointment_date)
        VALUES (?, ?, ?) RETURNING *;
      `, [doctor_id, user_id, date]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list(userId) {
    try {
      const result = await knex.raw ('SELECT * FROM appointments WHERE user_id = ?;', [userId]);
    //   const { rows } = await knex.raw(query);
    //   return rows.map((appointment) => new Appointment(appointment));
      return result.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM appointments WHERE id = ?';
      const { rows: [appointment] } = await knex.raw(query, [id]);
      return appointment ? new Appointment(appointment) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async update(id, user_id, date) {
    try {
    //   const [updatedAppointment] = await knex('appointments')
    //     .where({ id: this.id })
    //     .update({ date })
    //     .returning('*');
        const result = await knex.raw(`
        UPDATE appointments
        SET appointment_date=?
        WHERE user_id=? AND appointment_id=?
        RETURNING *
      `, [date, user_id, id]);
      return result.rows[0];
      //return updatedAppointment ? new Appointment(updatedAppointment) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async delete(id) {
    try {
      const query = 'DELETE FROM appointments WHERE appointment_id = ?';
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

 const testModel = async () => {
    const appointmentObj = Appointment.create(2, 3, "2023-01-31");
    console.log(appointmentObj)
    Appointment.delete(10);
    
 };

//testModel();


module.exports = Appointment;
