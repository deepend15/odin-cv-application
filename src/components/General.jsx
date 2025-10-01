export default function General() {
  return (
    <section>
      <fieldset>
        <legend>General</legend>
        <p>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label for="email">Email address:</label>
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label for="phone">Phone number:</label>
          <input type="tel" id="phone" name="phone" required />
        </p>
        <button type="button">OK</button>
      </fieldset>
    </section>
  );
}
