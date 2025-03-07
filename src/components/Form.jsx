export default function Form() {
  return (
    <form className="form">
      <div className="form-item half-w">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="form-item half-w">
        <label htmlFor="">Company Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-item half-w">
        <label htmlFor="size">Company Size</label>
        <select name="size" id="size">
          <option value="sm">50-100 employees</option>
          <option value="md">100-200 employees</option>
          <option value="lg">Over 200 employees</option>
        </select>
      </div>
      <div className="form-item half-w">
        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject">
          <option value="landing">Building Landing Pages</option>
          <option value="price">About Pricing</option>
          <option value="other">Others</option>
        </select>
      </div>
      <div className="form-item full-w">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
      </div>
      <div className="form-item consent full-w">
        <label htmlFor="consent"></label>
        <input type="checkbox" name="consent" id="consent" /> I consent to being
        contacted by the team.
      </div>
      <button className="full-w">Contact Sales</button>
    </form>
  );
}
