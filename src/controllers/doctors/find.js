//find a specific doctor from database
 const findDoctor = async (req, res) => {
     const { Doctor } = req.db;
     const doctor = await Doctor.find(req.params.id);
     res.send(doctor);
 };

 module.exports = findDoctor;
