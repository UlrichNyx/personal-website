import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import Code from '../../../comps/Code';
import FolderStructure from '../../../assets/pwebsite/folder-structure.png';
import FolderIcon from '@mui/icons-material/Folder';
import Image from '../../../comps/Image';
import IconText from '../../../comps/IconText';
import ColorPalette from '../../../comps/ColorPalette';
import { archives } from '../../Archives';
import TriforceDivider from '../../../comps/TriforceDivider';

const content = {
  description:
    'Welcome to the first post on the archives section! I intend for this section to be used as a blog of sorts in which I go over some of my recent experiences/ things I have been working on and so on. For the very first post we have an explanation of the structure I have created for this website, how I went about it designing it and so on. I do not go into excruciating detail in terms of the steps I took, however, you will find many useful external links which can help you with any processes you might been having trouble with. ',
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5vh', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5vh',
          textAlign: 'justify',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5vh',
        }}
      >
        <TriforceDivider vertical color={Colors.hyperlinkBlue} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1vh',
            textAlign: 'justify',
            maxWidth: '80%',
            alignSelf: 'center',
          }}
        >

          <TriforceDivider color={Colors.hyperlinkBlue} />
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <li>Log in to your account</li>
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
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1vh',
            textAlign: 'justify',
            maxWidth: '80%',
            alignSelf: 'center',
          }}
        >
          <Typography variant='h4' style={{ color: Colors.hyperlinkBlue }}>
            2. Folder structure and organization
          </Typography>
          <TriforceDivider color={Colors.hyperlinkBlue} />
          <Image src={FolderStructure} style={{ width: 200, height: 400, alignSelf: 'center' }} />

          <Typography variant='caption'>The internal structure of this project.</Typography>
          <Typography>
            As I am keen on having a scalable and mechanically flexible website, it is really
            important to create a sustainable folder system as the content is going to keep on
            expanding over time.
          </Typography>

          <ul
            style={{
              alignSelf: 'center',

              alignItems: 'center',
              display: 'table',
              margin: '0 auto',
            }}
          >
            <li
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.brillianceCoral,
                alignContent: 'center',
              }}
            >
              <IconText icon={<FolderIcon fontSize='inherit' />}>assets</IconText>
            </li>
            <li
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.braveryPurple,
              }}
            >
              <IconText icon={<FolderIcon fontSize='inherit' />}>comps</IconText>
            </li>
            <li
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.idleYellow,
              }}
            >
              <IconText icon={<FolderIcon fontSize='inherit' />}>content</IconText>
            </li>
            <li
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.balanceTurqoise,
              }}
            >
              <IconText icon={<FolderIcon fontSize='inherit' />}>screens</IconText>
            </li>
          </ul>

          <Typography>
            Every <strong style={{ color: Colors.brillianceCoral }}>asset</strong> (primarily being
            images) is stored in a folder named after the screen in which it can be found.{' '}
            <strong style={{ color: Colors.braveryPurple }}>Components</strong> do not have any
            substructure as there are currently not that many of them.{' '}
            <strong style={{ color: Colors.balanceTurqoise }}>Screens</strong> are split into{' '}
            <strong>Home</strong>, <strong>Archives</strong> and <strong>Portfolio</strong>. There
            is a very important component here, <strong>ContentPage</strong>, which is the generic
            component which hosts any content, either from the Archives or the Portfolio and
            although it has some basic structure, it also can be injected with new HTML so as to
            keep the structure of each content unique, according to the nature of the content in
            question.
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1vh',
            maxWidth: '80%',
            textAlign: 'justify',
            alignSelf: 'center',
          }}
        >
          <Typography variant='h4' style={{ color: Colors.hyperlinkBlue }}>
            3. MUI Theming, react-router-dom
          </Typography>
          <TriforceDivider color={Colors.hyperlinkBlue} />
          <Typography>
            I am personally a big fan of dark mode when it comes to any UI and as such it was my go
            to when choosing the options for{' '}
            <strong style={{ color: Colors.balanceTurqoise }}>MUI Theme</strong>. When setting up
            the application, it is really important to set up the mode (light/dark) as well as any{' '}
            <strong>baseline CSS </strong>you will be using throughout it. This will signficantly
            decrease the amount of styling you have to do for each component and will bring
            uniformity across your front-end. More specifically, in terms of MUI, it will allow for
            any subsequent components you use from it to automatically adapt to the styling
            requirements of the current mode you are using.
          </Typography>

          <Typography>
            Once that was done, what I focused on next was using the{' '}
            <strong style={{ color: Colors.balanceTurqoise }}>MUI Appbar</strong> component along
            with <strong style={{ color: Colors.idleYellow }}>react-router-dom</strong> to create
            some basic navigation for the website. This allowed me to split my work for this website
            into chunks according to each screen I had to individually work with.
          </Typography>

          <Typography>
            Below you can find the color palette that I oftenly use for my applications, including
            this website. You can copy individual colors to the clipboard by clicking on them or the
            entire array by clicking on the <strong>Copy Palette</strong> button.
          </Typography>
          <div style={{ alignSelf: 'center' }}>
            <ColorPalette />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1vh',
            maxWidth: '80%',
            textAlign: 'justify',
            alignSelf: 'center',
          }}
        >
          <Typography variant='h4' style={{ color: Colors.hyperlinkBlue, textAlign: 'center' }}>
            4. Content Architecture
          </Typography>
          <TriforceDivider color={Colors.hyperlinkBlue} />
          <Typography>
            The technicalities of each page will not be discussed as they are fairly unique to this
            website, however there will be a mention of some notable features that I think are worth
            mentioning. This feature in particular has its own section due to its importance. In a
            previous section I had mentioned the ContentPage component, which is paramount for
            showing screens like the one you are seeing now! The way I have designed this system is
            by automatically generating content based on the route in which it exists. For example,
            in your current url, you will see the route:
          </Typography>

          <div style={{ alignSelf: 'center' }}>
            <Code>/archives/Personal-Website</Code>
          </div>

          <Typography>
            If you take a look at the other content on this website you will see that they follow
            the exact same pattern. The latter end of the route (the title of the content) is always
            capitalized on the first letter and any spaces are denoted by &ldquo;-&ldquo;. This is
            because of the way they are stored within the JSON files (in this case a .ts) of the
            website. Below is a snippet of how this page in particular is being represented in code.
          </Typography>

          <div style={{ alignSelf: 'center', textAlign: 'start' }}>
            <Code language='json'>{JSON.stringify(archives[0], null, 2)}</Code>
          </div>
          <Typography>
            Every single page that is to be displayed through the Archives, either as a preview of
            the thumbnail or the actual page itself is defined through this JSON structure, allowing
            for easy editing of the title, thumbnail, coloring, tags etc. of each page. For any
            content which cannot easily be defined through the standard structure of the page
            component, a separate .tsx file is used. This is done so that each page can exhibit some
            new and interesting component I have been working on (such as the color palette you saw
            above!) that are unique to each post.
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1vh',
            maxWidth: '80%',
            textAlign: 'justify',
            alignSelf: 'center',
          }}
        >
          <Typography variant='h4' style={{ color: Colors.hyperlinkBlue, textAlign: 'center' }}>
            5. Deployment & Final Remarks
          </Typography>
          <div style={{ alignSelf: 'center' }}>
            <TriforceDivider color={Colors.hyperlinkBlue} />
          </div>
          <Typography>
            {' '}
            For the deployment of this website I used the service provided by{' '}
            <strong
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.white,
              }}
              onClick={() => window.open('https://vercel.com/dashboard')}
            >
              Vercel
            </strong>
            , which allowed me to hook up my Github repository with the production build (as such
            anything that gets pushed to main is automatically production!). Getting a custom domain
            name was a bit tricky as it would initially not work properly in my case. It basically
            requires some back and forth between your domain provider (in my recommended case,{' '}
            <strong
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.brillianceCoral,
              }}
              onClick={() => window.open('https://aws.amazon.com/route53/')}
            >
              Amazon Route 53
            </strong>
            ) and your Vercel project settings, in order to properly set up your DNS certificates.
            Here is a quick quide on how to do it (and a generally useful link to{' '}
            <strong
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.hyperlinkBlue,
              }}
              onClick={() =>
                window.open('https://vercel.com/docs/concepts/projects/domains/add-a-domain')
              }
            >
              Vercel docs
            </strong>
            ).
          </Typography>
          <Typography>
            That is about it for now, I hope you have enjoyed the first post on this here blog,
            please stay tuned in for more (even non-programming related) content! :))
          </Typography>
          <Typography>~ Filippos</Typography>
        </div>
        <TriforceDivider upward color={Colors.hyperlinkBlue} />
      </div>
    </div>
  ),
};

export default { ...content };
