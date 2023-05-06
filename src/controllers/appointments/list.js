const listAppointments = async (req, res) => {
    const {
        session,
        db: { Appointment },
      } = req;
      console.log( session.userId);
    
      
      const appointment = await Appointment.list(session.userId);
      console.log(appointment);
     
      res.send(appointment);
    
}

module.exports = listAppointments;