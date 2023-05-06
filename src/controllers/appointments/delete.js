const deleteAppointment = async (req, res) =>  {
//   const { id } = req.params;
  const { db: { Appointment }, params: { id }} = req;
//   const {
//     session,
//     db: { Appointment },
//   } = req;
  try {
    const appointment = await Appointment.delete(Number(id));
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    return res.json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Failed to delete appointment' });
  }
}

 
module.exports = deleteAppointment;