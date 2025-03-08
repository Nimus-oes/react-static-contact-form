export default function Form() {
  return (
    <form className="form">
      <div className="form-item half-w">
        <label htmlFor="name" className="item-title">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="item-input"
          required
        />
      </div>
      <div className="form-item half-w">
        <label htmlFor="email" className="item-title">
          Company Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="item-input"
          required
        />
      </div>
      <div className="form-item half-w">
        <label htmlFor="size" className="item-title">
          Company Size
        </label>
        <select name="size" id="size" className="item-input dropdown">
          <option value="sm">50-100 employees</option>
          <option value="md">100-200 employees</option>
          <option value="lg">Over 200 employees</option>
        </select>
      </div>
      <div className="form-item half-w">
        <label htmlFor="subject" className="item-title">
          Subject
        </label>
        <select name="subject" id="subject" className="item-input dropdown">
          <option value="landing">Building Landing Pages</option>
          <option value="price">About Pricing</option>
          <option value="other">Others</option>
        </select>
      </div>
      <div className="form-item full-w">
        <label htmlFor="message" className="item-title" required>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="item-input textarea"
        ></textarea>
      </div>
      <div className="form-item consent full-w">
        <label htmlFor="consent"></label>
        <input
          type="checkbox"
          name="consent"
          id="consent"
          className="checkbox"
          required
        />{" "}
        I consent to being contacted by the team.
      </div>
      <button className="button full-w">Contact Sales</button>
    </form>
  );
}
