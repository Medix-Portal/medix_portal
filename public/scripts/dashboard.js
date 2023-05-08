const data = {};

const fetchDoctors = async () => {
  const response = await fetch('/api/doctors');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const populateDoctorsSelect = async () => {
  try {
    const data = await fetchDoctors();
    const doctorsSelect = document.querySelector('#doctor');

    data.forEach((doctor) => {
      const { id, name } = doctor;
      const option = document.createElement('option');

      option.value = id;
      option.text = name;

      doctorsSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error populating doctors select', error);
  }
};

const main = async () => {
  await populateDoctorsSelect();

  try {
    const userResponse = await fetch('/api/user');
    if (!userResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const user = await userResponse.json();

    if (!user.valid) {
      console.error('User is not valid');
      return;
    }

    const doctor = document.querySelector('#doctor');

    doctor.addEventListener('change', (event) => {
      data.doctorId = event.target.value;
    });

    const date = document.querySelector('#date');

    date.addEventListener('change', (event) => {
      data.date = event.target.value;
    });

    const time = document.querySelector('#time');

    time.addEventListener('change', (event) => {
      data.time = event.target.value;
    });

    const form = document.querySelector('#form');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      data.userId = user.id;

      try {
        const response = await fetch('/api/appointments', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log('Appointment created successfully');
          form.reset();

          const successMessage = document.querySelector('#success-message');
          successMessage.style.display = 'block';

          const appointmentDetails = `Appointment with ${doctor.options[doctor.selectedIndex].text} at ${time.value} on ${date.value}`;
          const upcomingAppointments = document.querySelector('#upcoming-appointments');
          upcomingAppointments.textContent = `Upcoming appointments: ${appointmentDetails}`;

          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 3000);
        } else {
          console.error('Failed to create appointment');
        }
      } catch (err) {
        console.error(err);
      }
    });
  } catch (error) {
    console.error('Error fetching user', error);
  }
};

main();
