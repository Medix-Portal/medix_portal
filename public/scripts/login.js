
const main = async () => {
  try {
    //const [_, res] = await fetchLoggedInUser();
    //if (res.status !== 401) return window.location.assign('/profile.html');

    setNav();
    document.querySelector('#create-form')
      .addEventListener('submit', async (event) => {
        event.preventDefault();
        signupAndLoginHandler('/api/users/login', event.target);
      })
  } catch (err) {
    console.error(err);
  }
};

main();
