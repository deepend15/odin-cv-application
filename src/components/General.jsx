export default function General() {
  return (
    <section>
      <fieldset>
        <legend>General</legend>
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Email address:</label>
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="phone">Phone number:</label>
          <input type="tel" id="phone" name="phone" required />
        </p>
      </fieldset>
    </section>
  );
}
