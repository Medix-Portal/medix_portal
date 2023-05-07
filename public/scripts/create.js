
const main = async () => {
  const user = await fetch('/a');
  if (user) return window.location.assign('/profile.html');

  setNav();
  document.querySelector('#user')
    .addEventListener('submit', async (event) => {
      event.preventDefault();
      signupAndLoginHandler('/api/users', event.target);
    });
};

main();
