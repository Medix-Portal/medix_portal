// const updateAppointment = async (req, res) => {
//     const {
//     session,
//       db: { Appointment },
//       params: { id },
//       body: { date },
//     } = req;
  
//     // if (!isAuthorized(id, session)) return res.sendStatus(403);
  
//     // const user = await Appointment.find(id);
//     // if (!user) return res.sendStatus(404);
  
//     const updatedAppointment = await Appointment.update(Number(id), session.userId, date);
//     res.send(updatedAppointment);
//   };

const updateAppointment = async (req, res) => {
    try {
        const { session } = req;
        const { Appointment } = req.db;
        const { id } = req.params;
        const { date } = req.body;
        
        const appointment = await Appointment.getById(id);
    
        // Check if the appointment exists and belongs to the user
        // if (!appointment || appointment.user_id !== req.session.userId) {
        //   return res.status(404).json({ error: 'Appointment not found' });
        // }
    
        // Update the appointment
        const newDate = await appointment.update(id, session.userId, date);
    
        // Return the updated appointment
        return res.status(200).json({ date: newDate });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
}

  module.exports = updateAppointment;