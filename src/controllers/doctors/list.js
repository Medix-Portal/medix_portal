//lists all doctors
const listDoctors = async (req, res) => {
    const { Doctor } = req.db;
    const doctors = await Doctor.list();
    res.send(doctors);
}

module.exports = listDoctors;
  