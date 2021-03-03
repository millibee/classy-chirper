import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
      chirps: [
        {
          username: "@Tina_Burper",
          message:
            "I don't need a boy to pay attention to me, I'll pay attention to myself!",
        },
        {
          username: "@Louise_B_cool",
          message: "I don't appreciate your lack of sarcasm *eye roll*",
        },
        {
          username: "@Eugeney_inaBottle",
          message: "I wanna be an artist like Leonardo DiCaprio!",
        },
      ],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.chirp);
    this.setState({
      chirp: "",
      chirps: [
        ...this.state.chirps,
        { id: 1, username: "@bobs_boorgs", message: this.state.chirp },
      ],
    });
  }
 
  render() {
    return (
      <main className="container">
          
        <section className="row justify-content-center mt-5">
          <div className="col-md-7">
            <form className="form-group">
              <label>What's on your mind?</label>
              <input
                value={this.state.chirp}
                onChange={(e) => this.setState({ chirp: e.target.value })}
                className="form-control"
              />
              <button
                onClick={(e) => this.handleSubmit(e)}
                ClassName="btn btn-primary mt=3"
              >
                Chirp Chirp
              </button>
            </form>
          </div>
        </section>
        <section className="row justify-content-center mt-3">
          <div className="col-md-6">
            <ul className="list-group">
              {this.state.chirps.map((chirp) => {
                return (
                  <>
                    <h2>{chirp.username}</h2>
                    <p>{chirp.message}</p>
                  </>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
