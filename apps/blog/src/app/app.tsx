import React, { useEffect, useState } from 'react';
import { Message } from '@blog/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });
  const blogs = [{title: 'How People Get Rich Now', brief: 'All about how people get rich nowaday'},
  {title: 'What I Worked On', brief: 'What Paul worked on'},
  {title: 'The bus Ticket Theory of Genius', brief: 'How to become a genius'},
  {
    title: 'Mean People Fail', brief: `Don't be mean, or you'll fail`
  },
  { title: 'Theory of Everything', brief: 'Stephen Hawking'}
]
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

            </div>
            <div className="timeline">

            </div>
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
