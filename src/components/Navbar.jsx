import classes from "../components/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_container}>
        <div className={classes.navbar_row_element}>
          <div className="navbar-logo"></div>
          <p>
            in <h2>New Delhi</h2>
          </p>
        </div>
        <div className={classes.navbar_row_element}>
          <h2>Create Event</h2>
          <h2>Events For You</h2>
        </div>
      </div>
    </div>
  );
}
