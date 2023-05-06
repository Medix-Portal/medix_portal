const findAppointment = async (req, res) => {
    const {
      session,
      db: { Appointment },
    } = req;
    
    const appointment = await Appointment.find( req.params.id, session.userId);
    console.log(appointment);
   
    res.send(appointment);
  };
  
  module.exports = findAppointment;