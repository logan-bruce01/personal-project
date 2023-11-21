function Form() {
  return (
    <>
      <form className="form" action="/" method="post">
        <label htmlFor="gp" className="form-item">
          Select your GP：
          <select id="gp" name="gp">
            <option value="gp1">GP1</option>
            <option value="gp2">GP2</option>
            <option value="gp3">GP3</option>
            <option value="gp4">GP4</option>
            <option value="gp5">GP5</option>
            <option value="gp6">GP6</option>
          </select>
        </label>
        <br />

        <label htmlFor="name" className="form-item">
          Name: <input type="text" name="name" id="name" required />
        </label>

        <label htmlFor="phone" className="form-item">
          Phone: <input type="text" name="phone" id="phone" />
        </label>

        <label htmlFor="email" className="form-item">
          Email: <input type="text" name="email" id="email" required />
        </label>

        <label htmlFor="note" className="form-item">
          Note: <input type="text" name="note" id="note" />
        </label>

        <label htmlFor="date" className="form-item">
          Prefer Date：
          <input type="date" id="date" name="date" required />
        </label>

        <label htmlFor="time" className="form-item">
          Time：
          <input type="time" id="time" name="time" required />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Form
