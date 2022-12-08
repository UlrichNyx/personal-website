import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import Code from '../../../comps/Code';

const content = {
  description:
    'Welcome to the first post on the archives section! I intend for this section to be used as a blog of sorts in which I go over some of my recent experiences/ things I have been working on and so on. For the very first post we have an explanation of the structure I have created for this website, how I went about it designing it and so on.',
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10vh' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5vh',
          marginLeft: '5vw',
          marginRight: '5vw',
        }}
      >
        <Typography variant='h4' style={{ color: Colors.hyperlinkBlue }}>
          1. Setting up the stack
        </Typography>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>
            This application was created using{' '}
            <strong
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.hyperlinkBlue,
              }}
              onClick={() => window.open('https://reactjs.org/')}
            >
              React
            </strong>{' '}
            and in particular since we are using{' '}
            <strong
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.sylemsBlue,
              }}
              onClick={() => window.open('https://www.typescriptlang.org/')}
            >
              Typescript
            </strong>
            :
          </Typography>

          <Code> {'>'} npx create-react-app my-app --template typescript</Code>

          <Typography>
            After the React app folder is created, we can begin by setting up{' '}
            <strong
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.onlineGreen,
              }}
              onClick={() => window.open('https://github.com/')}
            >
              Github
            </strong>
            .
          </Typography>
          <ol
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <li>Log in to the account</li>
            <li>Set up a new repository</li>
            <li>Copy the code for cloning into an existing repository</li>
            <li>Run the command in the terminal</li>
            <li>The app should now be on the repository!</li>
          </ol>

          <Typography>
            For this project in particular I made use of the following packages:
          </Typography>

          <ul
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <li
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.brillianceCoral,
              }}
              onClick={() => window.open('https://prettier.io/')}
            >
              Prettier
            </li>
            <li
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.braveryPurple,
              }}
              onClick={() => window.open('https://eslint.org/')}
            >
              ESLint
            </li>
            <li
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.idleYellow,
              }}
              onClick={() => window.open('https://reactrouter.com/en/main')}
            >
              react-router-dom
            </li>
            <li
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.balanceTurqoise,
              }}
              onClick={() => window.open('https://mui.com/')}
            >
              MaterialUI
            </li>
          </ul>

          <Typography>
            These can easily be installed with the respective{' '}
            <code style={{ backgroundColor: Colors.vsAlmostBlack }}>npm install</code> command.
          </Typography>

          <Typography>
            ESLint and Prettier in particular can also be paired with their{' '}
            <strong
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.vsBlue,
              }}
              onClick={() => window.open('https://code.visualstudio.com/')}
            >
              Visual Studio Code
            </strong>{' '}
            extensions.
          </Typography>

          <Typography>...</Typography>
        </div>
      </div>
    </div>
  ),
};

export default { ...content };

/*

<Typography variant='h4' style={{ color: Colors.hyperlinkBlue }}>
        2. Folder structure and public folder
      </Typography>
      <Typography variant='h4' style={{ color: Colors.hyperlinkBlue }}>
        3. MUI Theming, React router dom
      </Typography>
      <Typography variant='h4' style={{ color: Colors.hyperlinkBlue }}>
        4. CSS and Colors
      </Typography>
      <Typography variant='h4' style={{ color: Colors.hyperlinkBlue }}>
        5. Content Architecture
      </Typography>
*/
