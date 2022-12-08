import Login from '../../../assets/learningarcade/login.png';
import ForgotPassword from '../../../assets/learningarcade/forgotPassword.png';
import Register from '../../../assets/learningarcade/register.png';
import Home from '../../../assets/learningarcade/home.png';
import LightMode from '../../../assets/learningarcade/home_light_mode.png';
import Navbar from '../../../assets/learningarcade/navbar.png';
import Editor from '../../../assets/learningarcade/editor.png';
import QuestionModal from '../../../assets/learningarcade/question_modal.png';
import Settings from '../../../assets/learningarcade/settings.png';
import Games from '../../../assets/learningarcade/games.png';
import NewGame from '../../../assets/learningarcade/new_game.png';
import Lobby from '../../../assets/learningarcade/lobby.png';
import Question1 from '../../../assets/learningarcade/question_1.png';
import Question1Author from '../../../assets/learningarcade/question_1_author.png';
import QuestionResult from '../../../assets/learningarcade/question_result.png';
import Report from '../../../assets/learningarcade/report.png';

export const images = [
  {
    img: Login,
    title: 'Login',
    subtitle: 'The screen where students can login using their university credentials.',
  },
  {
    img: ForgotPassword,
    title: 'Forgot Password',
    subtitle:
      'Students can change their password by insertig their email address and receiving a one time link.',
  },
  {
    img: Register,
    title: 'Register',
    subtitle:
      'Students who want to opt-in to their program they can use this screen to enter their credentials and create an account.',
  },
  {
    img: Home,
    title: 'Home',
    subtitle:
      'The Home page displays some starting instructions for those who have newly joined as well as a welcome message.',
  },
  {
    img: LightMode,
    title: 'Dark Mode/Light Mode',
    subtitle:
      'By using Material UI themes, the application is fully capable of switching between dark and light mode.',
  },
  {
    img: Navbar,
    title: 'Navbar',
    subtitle:
      'The Navbar was created using the Drawer component which allows visibility for mobile users.',
  },
  {
    img: Editor,
    title: 'Editor',
    subtitle:
      'Users can create new content (currently only the quiz prototype) by using the editor.',
  },
  {
    img: QuestionModal,
    title: 'Question Editing',
    subtitle:
      'Questions for each quiz can be individually edited. There is functionality in place for when users want to display math, they can do so by including text in LaTeX. The application will automatically detect this and display it correctly.',
  },
  {
    img: Settings,
    title: 'Settings',
    subtitle:
      'Currently the only Settings which exist regard the user being visible in public Leaderboards. This feature was included after considering feedback from a group study.',
  },
  {
    img: Games,
    title: 'Games',
    subtitle:
      'The games tab is for joining lobbies by using the unique code or for starting a new game.',
  },
  {
    img: NewGame,
    title: 'New Game',
    subtitle: 'A user can start a session using any quiz they are the author of.',
  },
  {
    img: Lobby,
    title: 'Lobby',
    subtitle:
      'The first stage of the Quiz session is simply a lobby where authors can wait for players to join. All joined players are displayed on the Leaderboard. They can start the game by pressing the Start button.',
  },
  {
    img: Question1,
    title: 'Question - Student View',
    subtitle:
      'Users can pick any of the answers displayed and lock in. If there was a timer set for the question, users cannot lock in after the timer runs out. Notice how math is correctly displayed on this screen.',
  },
  {
    img: Question1Author,
    title: 'Question - Author View',
    subtitle:
      'Authors can see how many submissions there have been, which specific users have submitted, what the distribution of the answers was and more.',
  },
  {
    img: QuestionResult,
    title: 'Reveal Answer',
    subtitle:
      'When an author presses Reveal Answer at this stage, everyone gets a notification displaying the correct answer for the given question.',
  },
  {
    img: Report,
    title: 'Quiz Report',
    subtitle:
      'Once all questions have been shifted through, users are greeted with a goodbye screen in which they can see their rank and score in the Leaderboard compared to other users. Authors at this point can either create permanent txt files of the logs/statistis obtained from this game or can use the visual component which displays high level information about the quiz session to understand what went well and what did not.',
  },
];
