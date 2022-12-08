import AdminLogin from '../../../assets/reset/admin/login.png';
import AdminRegister from '../../../assets/reset/admin/register.png';
import AdminForgotPass from '../../../assets/reset/admin/forgotPass.png';
import AdminHome from '../../../assets/reset/admin/home.png';
import AdminContent from '../../../assets/reset/admin/content.png';
import AdminTags from '../../../assets/reset/admin/tags.png';
import AdminStaff from '../../../assets/reset/admin/staff.png';
import AdminVideos from '../../../assets/reset/admin/videos.png';
import AdminDocuments from '../../../assets/reset/admin/documents.png';
import AdminSettings from '../../../assets/reset/admin/settings.png';

import MobileLoading from '../../../assets/reset/mobile/loading.png';
import MobileLanding from '../../../assets/reset/mobile/landing.png';
import MobileSignup from '../../../assets/reset/mobile/signup.png';
import MobilePersonal from '../../../assets/reset/mobile/personal.png';
import MobileGoals from '../../../assets/reset/mobile/goals.png';
import MobilePaymentPlan from '../../../assets/reset/mobile/paymentplan.png';
import MobileStripe from '../../../assets/reset/mobile/stripe.png';
import MobileLevel from '../../../assets/reset/mobile/level.png';
import MobileMeal from '../../../assets/reset/mobile/meal.png';
import MobileUnits from '../../../assets/reset/mobile/units.png';

import MobileLogin from '../../../assets/reset/mobile/login.png';
import MobileOTC from '../../../assets/reset/mobile/otc.png';
import MobilePlanner from '../../../assets/reset/mobile/planner.png';
import MobileTrain from '../../../assets/reset/mobile/train.png';
import MobileEat from '../../../assets/reset/mobile/eat.png';
import MobileThrive from '../../../assets/reset/mobile/thrive.png';
import MobileShine from '../../../assets/reset/mobile/shine.png';
import MobileSettings from '../../../assets/reset/mobile/settings.png';

import MobileCategory from '../../../assets/reset/mobile/category.png';
import MobileFilters from '../../../assets/reset/mobile/filters.png';

import MobileContent from '../../../assets/reset/mobile/content.png';
import MobileStaff from '../../../assets/reset/mobile/staff.png';
import MobileArrange from '../../../assets/reset/mobile/arrange.png';
import MobileVideo from '../../../assets/reset/mobile/video.png';
import MobileCongratulations from '../../../assets/reset/mobile/congratulations.png';

import MobileProfile from '../../../assets/reset/mobile/profile.png';
import MobileAccount from '../../../assets/reset/mobile/account.png';
import MobileHistory from '../../../assets/reset/mobile/history.png';
import MobileSubscription from '../../../assets/reset/mobile/subscription.png';
import MobileAbout from '../../../assets/reset/mobile/about.png';
import MobileFAQ from '../../../assets/reset/mobile/FAQ.png';
import MobileDocument from '../../../assets/reset/mobile/document.png';

import NodeLogo from '../../../assets/home/logos/node.png';
import MongoLogo from '../../../assets/home/logos/mongo.png';
import NodeMailerLogo from '../../../assets/home/logos/nodemailer.png';
import ExpressLogo from '../../../assets/home/logos/express.png';
import StripeLogo from '../../../assets/home/logos/stripe.png';
import JSLogo from '../../../assets/home/logos/javascript.png';

export const logos = [NodeLogo, MongoLogo, NodeMailerLogo, ExpressLogo, StripeLogo, JSLogo];

export const adminImages = [
  { img: AdminLogin, title: 'Login', subtitle: 'Here the admins can log in.' },
  {
    img: AdminRegister,
    title: 'Register',
    subtitle:
      'The registration form for the application. In order to register, one must enter a randomly generated 6 digit code which is sent manually by a superadmin through the website API.',
  },
  {
    img: AdminForgotPass,
    title: 'Forgot Password',
    subtitle:
      'If admins have forgotten their password they can retrieve it by replicating the 6 digit code they get sent to their email from the server.',
  },
  {
    img: AdminHome,
    title: 'Home',
    subtitle:
      'The home screen should display a dashboard of content statistics as well as a list of interactable links with all the online tools that are being used in the application (Stripe, MongoDB etc.) ',
  },
  {
    img: AdminContent,
    title: 'Content',
    subtitle:
      'Admins can create a Content item from scratch by combining tags and videos they have predefined. These Content items appear immediately on the mobile users screens.',
  },
  {
    img: AdminTags,
    title: 'Tags',
    subtitle:
      'Admins can define tags with which content can be identified through, for example, the difficulty level etc.',
  },
  {
    img: AdminStaff,
    title: 'Staff',
    subtitle:
      'A list of all Admin and Superadmin users appears here, sorted by the section in which they work in. Superadmins can assign sections to staff or delete their accounts from here.',
  },
  {
    img: AdminVideos,
    title: 'Videos',
    subtitle:
      'Admins can upload videos with custom thumbnails here. These videos can then be used to define Content items.',
  },
  {
    img: AdminDocuments,
    title: 'Documents',
    subtitle:
      'Admins have the capability of changing some less volatile information from here such as FAQs or the legal documents displayed on the mobile application.',
  },
  {
    img: AdminSettings,
    title: 'Settings',
    subtitle:
      'Finally, admins have full control over their account through the settings, they can change their password, email, profile picture, bio and so much more.',
  },
];

export const mobileImages = [
  {
    img: MobileLoading,
    title: 'Loading',
    subtitle: 'Loading screen that mobile users see upon entering.',
  },
  {
    img: MobileLanding,
    title: 'Landing',
    subtitle:
      'The landing page of the app. Users can opt for a free 7-day trial or login from here.',
  },
  {
    img: MobileSignup,
    title: 'Signup',
    subtitle:
      'Users are prompted to give their email and password as well as whether they would like to receive newsletters.',
  },
  {
    img: MobilePersonal,
    title: 'Personal Information',
    subtitle: 'Users are prompted to enter their name.',
  },
  {
    img: MobileGoals,
    title: 'Goals',
    subtitle: 'Users are asked what their purpose is for using Reset.',
  },
  {
    img: MobilePaymentPlan,
    title: 'Payment Plan',
    subtitle:
      'Users are asked to choose what payment plan they wish for after their trial is over.',
  },
  {
    img: MobileStripe,
    title: 'Stripe',
    subtitle: 'Stripe is used for handling all transactions.',
  },
  {
    img: MobileLevel,
    title: 'Level',
    subtitle:
      'Users are asked what level of difficulty they would like to see for their content. The content they see is automatically filtered by this.',
  },
  {
    img: MobileMeal,
    title: 'Meals',
    subtitle:
      'Users are asked what dietary preferences they have. This affects the type of meals that will appear in the Eat section.',
  },
  {
    img: MobileUnits,
    title: 'Units',
    subtitle: 'Users are asked whether they would like to have their units in metric or imperial.',
  },
  {
    img: MobileLogin,
    title: 'Login',
    subtitle: 'Users can login by inputting their email.',
  },
  {
    img: MobileOTC,
    title: 'Forgot Password',
    subtitle:
      'Users who have forgotten their password can gain access to their account by filling out an OTC.',
  },
  {
    img: MobilePlanner,
    title: 'Planner',
    subtitle:
      'The main page. This is essentially a calendar where a user can see every Content they have arranged and for when.',
  },
  {
    img: MobileTrain,
    title: 'Train',
    subtitle: 'A page displaying the Train subsections.',
  },
  {
    img: MobileEat,
    title: 'Eat',
    subtitle: 'A page displaying the Eat subsections',
  },
  {
    img: MobileThrive,
    title: 'Thrive',
    subtitle: 'A page displaying the Thrive subsections',
  },
  {
    img: MobileShine,
    title: 'Shine',
    subtitle: 'A page displaying the Shine subsections',
  },
  {
    img: MobileSettings,
    title: 'Settings',
    subtitle: 'A page displaying the application Settings.',
  },
  {
    img: MobileCategory,
    title: 'Category',
    subtitle:
      'When a section and a category have been picked, all the content for that category is displayed.',
  },

  {
    img: MobileFilters,
    title: 'Filters',
    subtitle: 'Users can filter that content using the filters drawer.',
  },
  {
    img: MobileContent,
    title: 'Content',
    subtitle:
      'When clicking on Content information regarding it will appear. Users can choose to arrange the selected content for later or to begin it now.',
  },
  {
    img: MobileStaff,
    title: 'Staff',
    subtitle: 'When clicking on the name of a Staff, users are redirected to their profile.',
  },
  {
    img: MobileArrange,
    title: 'Arrange',
    subtitle:
      'Users can look at their planner from here as well as choose when they want a Content item to be arranged for.',
  },
  {
    img: MobileVideo,
    title: 'Video Player',
    subtitle: 'The custom made videoplayer which displays the Content videos.',
  },
  {
    img: MobileCongratulations,
    title: 'Congratulations!',
    subtitle:
      'When a Content item has been watched fully, a congratulations screen with confetti is displayed. Yay!',
  },
  {
    img: MobileProfile,
    title: 'Profile Settings',
    subtitle: 'Users can edit the information they had entered during their registration here.',
  },
  {
    img: MobileAccount,
    title: 'Account Settings',
    subtitle:
      'Users can change all account information such as passwords, emails etc. here. Users can also delete their accounts.',
  },
  {
    img: MobileHistory,
    title: 'History',
    subtitle:
      'A history of previous activity for a user account can be viewed here. This is useful for when trying to find a Content item you have completed previously.',
  },
  {
    img: MobileSubscription,
    title: 'Subscription Settings',
    subtitle: 'Users can change their subscription method, plan ',
  },
  {
    img: MobileAbout,
    title: 'About',
    subtitle: 'The about page of the application, formatted similarly to the categories.',
  },
  {
    img: MobileFAQ,
    title: 'FAQ',
    subtitle: 'Some frequently asked questions.',
  },
  {
    img: MobileDocument,
    title: 'Documents',
    subtitle: 'Legal Documents can be viewed in this page.',
  },
];
