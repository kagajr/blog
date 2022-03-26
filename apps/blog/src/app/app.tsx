import React, { useEffect, useState } from 'react';
import { Message } from '@blog/api-interfaces';
import './app.module.scss';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });
  const blogs = [{title: 'How People Get Rich Now', brief: 'All about how people get rich nowaday'},
  {title: 'What I Worked On', brief: 'What Paul worked on'},
  {title: 'The bus Ticket Theory of Genius', brief: 'How to become a genius'},
  {
    title: 'Mean People Fail', brief: `Don't be mean, or you'll fail`
  },
  { title: 'Theory of Everything', brief: 'Stephen Hawking'},
  {
    title: `I'm free`, brief: 'I just resign from the company'
  }
]

  const style = {
    width: '250px'
  }
  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
      <div className="container">
        <div className="flex">
          <div className="profile">
            <div className="avatar">
              <img style={style} src="\assets\images\avatar.JPG" alt="avatar" />
            </div>
            <div className="timeline">
              <h2>
                Timeline:
              </h2>
              <ul>
                <li>
                  <p>
                    <i>
                      2014-2018:
                    </i>
                    Studied at Ton Duc Thang University
                  </p>
                </li>
                <li>
                  <p>
                    <i>
                      2018-2022:
                    </i>
                    Worked as software developer at BankExpress corp
                  </p>
                </li>
              </ul>
              <h2>
                Experiences:
              </h2>
                <ul>
                  <li>
                    <p>
                      <i>
                        Fullstack developer:
                      </i>
                      I'm comfortable with the following languages:
                        On the backend: C# (ASP.NET CORE), Javascript/Typescript (Node.js, Express.js)
                        <br/>
                        On the frontend: HTML/CSS/Javascript, framework I used: Angular, Reactjs
                        <br />
                        On the database: SQL, POSTGRESQL, MYSQL, MONGODB
                    </p>
                  </li>
                  <li>
                    <p>
                      I also learned about AI/ML at school as final thesis (NPL) using Python and Java as my primary language
                    </p>
                  </li>
                </ul>
            </div>
            <h2>
              Projects:
            </h2>
            <ul>
              <li>
                <p>
                  AnnSmart: The first project I worked with as a software developer at BankExpress, It's some kind of CRM software. I wrote it using ASP.NET CORE and Angular.
                </p>
                
              </li>
            </ul>
          </div>
          <div className="blogs">
            {
              blogs.map(b => <>
              <a href="/">

              {b.title}
              </a>
              <p>
                {b.brief}
              </p>
              </>)
            }
          </div>
        </div>
      </div>
  );
};

export default App;
