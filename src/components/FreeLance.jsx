

export function FreeLance() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h1 className="text-center">Apply To Developer</h1>
          <form>
            <div className="mb-3">
              <label for="" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" placeholder="example@domain.com" />
              <div id="emailHelp" className="form-text">
                Send us a email, and we will contact you to the instant.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Message
              </label>
              <textarea
              placeholder="Give us a litle description about your skills"
                type="text-area"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="row d-flex">
            <button type="submit" className="btn col-12 justify-content-end p-2 btn-primary">
              Send
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
