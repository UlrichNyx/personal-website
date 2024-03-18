import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Code from '../../../comps/Code';
import LogoSlider from '../../../comps/LogoSlider';
import { logos } from '../../../assets/home/logos/logos';
import ContentPreview from '../../../comps/ContentPreview';
import { archives } from '../../../content/Archives';
import Screenshot from '../../../assets/amichallenger.png';
import Nyan from '../../../assets/home/nyan.gif';

const content = {
  description:
    `Over the Christmas break I worked on a project which I had been thinking of for a while now. I have been playing League of Legends for a good part of my life now.
     After so many years of play I have managed to reach a somewhat professional level of gameplay, peaking at around 700 LP Grandmaster a couple of years ago. All throughout my time climbing in Master+
     I had a few burning questions which were simple (but tedious) to answer. Am I Challenger Yet? How many games until I get Challenger? How many consecutive wins do I need? Another thing that had grasped my interest during this time,
     were the various applications that built around RIOT's API in order to offer statistical analysis tools for player comprehension or in-game overlays which gave slight tactical advantages. This interesting intersection between App development and competitive games is what scratched a curiosity in the back of my head.
     Statistical analysis combined with the complex characteristics of a game such as that of League of Legends. For the purposes of this post, I will keep things simple and only talk about the novel elements I introduced in my development pipeline.`,
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        gap:'3vh',
        justifyContent: 'center',
        alignItems:'center',
        maxWidth:'98vw'
      }}
    >
      <Typography variant='h4' style={{ color: Colors.idleYellow, paddingTop:'5vh' }}>
           The New Stack
      </Typography>
      <Typography> Knowing that I wanted to challenge myself a bit with this project, I forced myself to use tools I have not used before and dropped my obsession with MaterialUI for another visual component framework.</Typography>
      <Typography> Most of the characteristics of my stack have remained the same however. If you are curious as to what they are then I got just the right thing for you!</Typography>

      <ContentPreview
                  {...archives[0]}
                  target='archives'
                  archive
                  onClick={() => window.open('https://www.fkont.com/archives/Personal-Website')}
                />
      <LogoSlider logos={['ChakraUI', 'Google Analytics', 'Riot Games API', 'Ko-fi']}/>
      
      <div style={{display:'flex', flexDirection:'row'}}>
            <div
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.balanceTurqoise,
              }}
              onClick={() => window.open('https://chakra-ui.com/')}
            >
              <Typography>ChakraUI</Typography>
            </div>
            <Typography style={{textDecoration:'none', color:'white', marginLeft:5}}>{' '}- Which served as my new visual component framework. </Typography>
      
        </div>

        <div style={{display:'flex', flexDirection:'row'}}>
            <div
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.idleYellow,
              }}
              onClick={() => window.open('https://analytics.google.com/')}
            >
              <Typography>Google Analytics</Typography>
            </div>
            <Typography style={{textDecoration:'none', color:'white', marginLeft:5}}>{' '}- Which allowed me to gain insights on my tool&#39;s traffic and usage. </Typography>
      
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
            <div
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.dndRed,
              }}
              onClick={() => window.open('https://developer.riotgames.com/')}
            >
              <Typography>Riot Games API</Typography>
            </div>
            <Typography style={{textDecoration:'none', color:'white', marginLeft:5}}>{' '}- Which provided me with the necessary data to work with. </Typography>
      
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
            <div
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.hyperlinkBlue,
              }}
              onClick={() => window.open('https://ko-fi.com/')}
            >
              <Typography>Ko-fi</Typography>
            </div>
            <Typography style={{textDecoration:'none', color:'white', marginLeft:5}}>{' '}- Which allowed me to keep the service running. </Typography>
      
        </div>
        <div style={{marginTop:'5vh'}}/>
        <Typography> ChakraUI was a framework that I became aware of because of the wonderful <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.idleYellow, textDecoration:'underline'}} onClick={() => window.open('https://www.craftz.dog/')}>Takuya Matsuyama</span>.</Typography>
        <Typography> As for Ko-fi, it is a similar donation service to that of <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.brillianceCoral, textDecoration:'underline'}} onClick={() => window.open('https://www.patreon.com/')}>Patreon</span> which I learned about from the almighty <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.idleYellow, textDecoration:'underline'}} onClick={() => window.open('https://piratesoftware.wiki/wiki/Thor')}>Jason Thor Hall</span>.</Typography>
        <Typography> Both are equally amazing content creators in their own unique way so I would definitely recommend checking them out!</Typography>
        <Typography>Another part which was relatively novel to me was setting up AWS from front to back. Throughout the DevOps process I used a multitude of AWS tools namely:</Typography>
        <Typography> <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.blurple, textDecoration:'underline'}} onClick={() => window.open('https://aws.amazon.com/route53/')}>Route53</span> was used in order to register the website&#39;s domain.</Typography>
        <Typography> <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.dndRed, textDecoration:'underline'}} onClick={() => window.open('https://aws.amazon.com/certificate-manager/')}>Certificate Manager</span> was used to create a proper SSL certificate.</Typography>
        <Typography> <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.vsBlue, textDecoration:'underline'}} onClick={() => window.open('https://aws.amazon.com/vpc/')}>VPC</span> which allowed for IPv4 and IPv6 connections.</Typography>
        <Typography> <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.idleYellow, textDecoration:'underline'}} onClick={() => window.open('https://aws.amazon.com/ec2/')}>EC2</span> was used in order to keep the server running, set up load balancers etc.</Typography>
        
        <Typography> I even used <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.onlineGreen, textDecoration:'underline'}} onClick={() => window.open('https://aws.amazon.com/aws-cost-management/aws-billing/')}>Billing and Cost Management</span>  to set up a budget alert.</Typography>

        <Typography>Finally the node.js package I used which facilitated the app running as a background process in a production environment was pm2.</Typography>
        <Typography>In fact, setting it up was super easy, all you have to do is install it and then just hit:</Typography>

        <Code>
          {'>   '}
        pm2 start app.js
        </Code>
        <Typography variant='h4' style={{ color: Colors.idleYellow, paddingTop:'5vh' }}>
          The Calculations
      </Typography>
      <Typography>In terms of the backend, there are 2 primary data that are being fetched corresponding to 4 API calls from the RIOT API.
      </Typography>
      <Typography>The first API call is a <span style={{color: Colors.onlineGreen, fontWeight:'bold'}}>GET</span> request is for getting the corresponding LP Target for each server (the respective cutoff for Challenger)</Typography>
      <Code>{'https://${server}.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=${api_key}'}</Code>
      <Typography>Here you can see the variables that we need to specify in order for the Riot API to correctly fetch our data.</Typography>
      <Typography>The server variable refers to the chosen server that the player is in, EUNE, EUW, NA etc.</Typography>
      <Typography>The api_key variable refers to the unique API key which is distributed by Riot for individual projects which you can get from the developer portal.</Typography>
      <Typography>The LP Target is extracted essentially by getting the lowest player in Challenger of that server and displaying their current LP.</Typography>
      
      <Typography>As for the comparison of the player with that LP Target, it is broken down into multiple steps:</Typography>
      <Typography>First we must fetch the puuid corresponding to the summoner name provided by the user:</Typography>
      <Code>{'https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${api_key}'}</Code>
      <Typography>Here, gameName corresponds to their summoner name while tagLine refers to their unique tag next to their name. For example, my own complete summoner name is: Suicunê #EUNE</Typography>
      <Typography>Note that the #EUNE has nothing to do with the servers, it is a tagLine that is chosen by the player at the moment of creation of their name.</Typography>
      <Typography>Another thing to note here is that this API call as well as the rest of them use the european servers of RIOT by default. This is a deliberate choice because my server is currently hosted at a european EC2 instance.</Typography>
      <Code>{'https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${api_key}'}</Code>
      <Typography>After we fetch the puuid of the associated Riot account, we will now need to fetch the corresponding League of Legends account.</Typography>
      <Code>{'https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${api_key}'}</Code>
      <Typography>Finally, now that we have the summoner name, we can fetch the player&#39;s ranked data, including their current LP, tier and division.</Typography>

      <Typography>From here on out, the calculation is fairly simple. I have translated each division to the equivalent of 400 LP (as it takes 100 LP to move up by one division).</Typography>
      <Typography>In other words, in order for a player to reach Master tier starting from the lowest tier (Iron IV), they would need to accumulate is: </Typography>
        <Typography style={{fontWeight:'bold'}}> 4 (the number of divisions per tier) * 100 (the lp needed to climb up a division) * 7 (the total number of tiers) = 2800 LP.</Typography>
      <Typography>Therefore, the TOTAL LP that a player would need to reach challenger is 2800 LP + The LP Target. </Typography>
      <Typography>The percentage displayed on the screen is simply the percentage difference of the summoner&#39;s current LP against the LP Target.</Typography>
      <img src={Screenshot} style={{maxWidth:'90vw', borderRadius:4}}/>
      <Typography>That is really all there is to the application! Nice and simple and effective.</Typography>
      <Typography>Here I would like to mention how easy it was to integrate Google Analytics into the website (it is literally a simple copy paste of an HTML element)!</Typography>
      <Typography>Google never ceases to impress I guess :))</Typography>
      <Typography variant='h4' style={{ color: Colors.idleYellow, paddingTop:'5vh' }}>
           Final Words
      </Typography>
      <Typography>There of course is a lot that can be improved on the web-app as well as the DevOps side.</Typography> 
      <Typography>After deploying the service on an EC2 instance I realised that this could very easily have fit in a serverless way using <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.idleYellow, textDecoration:'underline'}} onClick={() => window.open('https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/begin')}>AWS Lambda</span> so that is something to look forward to!</Typography>
      <Typography>There are also a bunch of other improvements I can think of. Namely:</Typography>
      <Typography>The user could log in using their Riot account and have their results cached automatically.</Typography>
      <Typography>The search bar could display numerous results to aid in inputting your summoner name faster.</Typography>
      <Typography>More assets could be fetched from Riot such as summoner icon, a level display etc.</Typography>
      <Typography>More statistics could be displayed like forecasts of how many games would be needed at the current win rate etc.</Typography>
      <Typography>The website could also very easily be transferred to react native in order to create mobile apps.</Typography>
      <Typography>There are a few more things I wanna say.</Typography>
      <Typography>Firstly, I want to commend Riot&#39;s developer support for being diligent and responsive while they were getting my product authorized.</Typography>
      <Typography>Secondly, I wanna mention the inspiration that I drew from other services that use RIOT API. Services such as <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.idleYellow, textDecoration:'underline'}} onClick={() => window.open('https://www.op.gg/')}>op.gg</span>, <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.idleYellow, textDecoration:'underline'}} onClick={() => window.open('https://u.gg/')}>u.gg</span>, <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.idleYellow, textDecoration:'underline'}} onClick={() => window.open('https://porofessor.gg/')}>Porofessor</span> and more!</Typography>
      <Typography>Here is where I am currently standing as a League player (brought to you by op.gg) </Typography>
      <iframe style={{borderRadius:4, borderColor:Colors.idleYellow, alignSelf:'center'}} src="https://www.op.gg/summoners/eune/Suicun%C3%AA-EUNE" width="90%" height="585" scrolling="no"></iframe>
      <Typography>Do check on this page for more updates in the future. Especially for something very special which I will add here below.</Typography>
      <img src={Nyan} style={{borderRadius:4}}/>
      <Typography>What could it possibly be? :3</Typography>
        <div style={{marginTop:'5vh'}}/>
      <Button
          variant='contained'
          style={{
            color: Colors.white,
            backgroundColor: Colors.idleYellow,
            textTransform: 'none',
            alignSelf:'center'
          }}
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => window.open('https://amichallengeryet.com/')}
        >
          {' '}
          Am I Challenger Yet?
        </Button>
    </div>
  ),
};

/*


      <Typography>As you may have gathered, Am I Challenger Yet? is a very simple and straightforward tool which basically allows you to enter your Summoner Name and in return a calculation takes place which shows your current distance from Challenger.</Typography>
      
      <iframe style={{borderRadius:4, borderColor:Colors.idleYellow, alignSelf:'center'}} src="https://www.op.gg/summoners/eune/Suicun%C3%AA-EUNE" width="90%" height="585" scrolling="no"></iframe>
*/


export default { ...content };
