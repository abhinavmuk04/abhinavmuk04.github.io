import React from 'react';
import ReactDOM from 'react-dom';
import './site.css';

function App() {
  return (
    <div id="backcolor">
      <h1 className="center fontncolor">Abhi Mukherjee</h1>
      <div className="fontncolor" style={{ fontSize: 'larger', margin: '50px' }}>
        <hr />
        <h2 className="center">About Me</h2>
        <p style={{ fontSize: 'large' }}>
          Hey there! I'm a freshman CS major with a huge interest in software development. In my free time, I absolutely love watching football and hanging out with my friends. I'm also a big fan of the TV show "Suits" and can't resist a good binge-watch session.
          
          Aside from my academic pursuits, I'm also involved in a couple of extracurricular activities on campus. I'm a member of Hack4Impact, which is a really cool organization that uses technology to solve real-world problems. I'm also a part of AKPsi, which is a business fraternity, and UXTerps, which focuses on user experience design.
          
          Overall, I'm excited to see where my CS journey takes me and I can't wait to see what the future holds!
        </p>
      </div>

      <div className="shows fontncolor">
        <hr />
        <h2>Favorite Shows</h2>

        <div className="show">
          <img src="https://m.media-amazon.com/images/M/MV5BN2VjOTkwMjgtYWEyMy00MzNmLTllMjktNDI1ZmRhYTAwYTg1XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
               alt="Breaking Bad"
               width="300"
               height="400" />
          <h3>Breaking Bad</h3>
        </div>

        <div className="show">
          <img src="https://m.media-amazon.com/images/I/71HGgigujnL._AC_UF894,1000_QL80_.jpg"
               alt="Suits"
               width="300"
               height="400" />
          <h3>Suits</h3>
        </div>

        <div className="show">
          <img src="https://flxt.tmsimg.com/assets/p7806806_b_v9_ad.jpg"
               alt="White Collar"
               width="300"
               height="400" />
          <h3>White Collar</h3>
        </div>

        <div className="show">
          <img src="https://flxt.tmsimg.com/assets/p185124_b_v9_aj.jpg"
               alt="How I Met Your Mother"
               width="300"
               height="400" />
          <h3>How I Met Your Mother</h3>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
