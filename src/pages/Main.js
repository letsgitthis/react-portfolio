import React from "react";
import '../css/main.css';

function Main() {
  return (
    <body className="App-header">
      <div className="nav-wrapper">
        {/* <a href="./index.html" className="brand-logo">John Bentley</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"
          ><i className="material-icons">menu</i></a
        >
        <ul className="nav-tabs right hide-on-med-and-down">
          {/* <!-- <li><a href="./assets/pages/about.html">About</a></li> --> */}
          {/* <li><a href="./assets/pages/project">Projects</a></li> */}
          {/* <!-- <li><a href="./assets/pages/contact.html">Contact</a></li> --> */}
          {/*<li>
            <a>Settings</a>
            <ul>
              <li>
                <a>
                  <div className="dark-mode">Dark</div>
                  <label className="switch">
                    <input type="checkbox" id="theme-switcher" />
                    <span className="slider round"></span>
                  </label>
                  <div className="light-mode">Light</div>
                </a>
              </li>
            </ul>
          </li>
        </ul> */}
      </div>
    {/* </nav> */}

    {/* <!-- paralax under nav --> */}
    <div className="parallax-container">
      <div className="parallax">
        <img
          className="background-image"
          src="../images/background-image.jpeg"
          alt="background-img"
        />
      </div>
    </div>

    <div>
      <img 
      src="./images/profile-image.jpg" 
      alt="profile-img"
      />
    </div>

    {/* <!-- profile image container --> */}
    <figure className="container-fluid">
      <div className="row">
        {/* <div id="bio-image-container col s12">
          <img
            id="bio-image"
            alt="Placeholder-img"
          />
        </div> */}
        <p className="quote">"Stop saying, I can't because...</p>
        <p className="quote">Start saying, I want to... How can I?"</p>
      </div>
    </figure>

    {/* <!-- bio info --> */}
    <div className="body-container">
      <div className="row">
        <div className="col m1"></div>
        <div id="main-bio" className="col m4">
          <p>
            I was ready for a career change and made the decision to quit my
            job, sell my house, move back home to Austin, Texas and earn
            certifications to become a Web Developer/Software Engineer. My
            interest in coding started a long time ago when I was much younger
            and looking for a career path to persue, but I had unfortunately
            chosen a different path, life got in the way, and I wasn't in the
            right position to make any career changes. Eventually, I decided to
            start learning what I could on my own as a hobby in my spare time,
            until I hit a wall. I figured, just do what I'm most interest in and
            learn as I go, but found that for me to do those things, I needed to
            code. I had reached a point where if I wanted to go any further, I
            needed to be in a place where I could pursue it as more than just a
            hobby interest.
          </p>
        </div>
        <div id="main-bio" className="col m4">
          <p className="hide-on-small-only">
            Working full time as I was, I probably would've reached that next
            step in about... 10 years? Too slow. I had to do something if I
            wanted to reach that next step sooner. I set myself up to make some
            good financial decisions and was quickly able to freely choose what
            I wanted to do next in life. Over the last several years, I had
            began learning to use several Linux Distro's, familiarize myelf with
            the Bash terminal and repair broken computers for me to use. I
            figured, if I wanted to be in this field, I should be able to
            troubleshoot and repair my own computers. Every computer I currently
            own was either broken when I got it, or I built it from scratch.
            Then I earned a Full Stack certification from The Austin Coding
            Bootcamp at UT Austin. Now finally looking to apply what I have
            learned in a professional setting.
          </p>
        </div>
      </div>
    </div>
    </body>
  );
}

export default Main;