const createAppointment = async (req, res) => {
    const {
      session,
      db: { Appointment },
      body: { doctor_id, date},
    } = req;
    console.log(doctor_id, session.userId, date);
  
    
    const appointment = await Appointment.create( doctor_id, session.userId, date);
    console.log(appointment);
   
    res.send(appointment);
  };
  
  module.exports = createAppointment;