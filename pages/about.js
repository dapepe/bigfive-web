import { Fragment } from 'react'
import { Code } from '../components/alheimsins'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from '../routes'

const users = [
  {
    avatar: '/static/maccyber.png',
    name: 'Jonas Maccyber Enge',
    nick: {
      name: 'maccyber',
      link: 'https://github.com/maccyber'
    },
    description: 'generally a nice guy',
    dev: true
  },
  {
    avatar: '/static/zrrrzzt.png',
    name: 'Geir Gåsodden',
    nick: {
      name: 'zrrrzzt',
      link: 'https://github.com/zrrrzzt/'
    },
    description: 'generally a nice guy',
    dev: true
  },
  {
    avatar: '/static/elimg.png',
    name: 'Eli Marianne Huseby',
    nick: {
      name: 'elimh',
      link: 'http://blekksprutene.no/'
    },
    description: 'generally a nice woman'
  },
  {
    avatar: '/static/person.png',
    name: 'Eduardo Calle',
    nick: {
      name: 'nieled',
      link: 'https://riseup.net/'
    },
    description: 'generally a nice guy'
  }
]

const Users = ({ users }) => (
  <div className='about'>
    { users.map(user => (
      <div key={user.nick.name} className='info'>
        <div>
          <span className='avatar'>
            <img alt='Avatar' width='80' height='80' src={user.avatar} />
          </span>
        </div>
        <div className='text'>
          <div className='name'>
            {user.name}
          </div>
          <div className='nick'>
            <a href={user.nick.link}>@{user.nick.name}</a>
          </div>
          <div className='description'>
            <i>{user.description}</i>
          </div>
        </div>
      </div>
    ))}
    <style jsx>
      {`
        .about {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .info {
          display: flex;
          flex-direction: row;
          padding: 10px 0px;
          align-items: center;
          justify-content: center;
        }
        .text {
          text-align: left;
          padding-left: 20px;
        }
        .avatar {
          border-radius: 100%;
          display: inline-block;
          overflow: hidden;
          border: 1px solid #eee;
          line-height: 0;
          vertical-align: top;
        }
        .nick a {
          color: #ff0080
        }
        .name {
          display: inline-block;
          font-size: 18px;
          font-weight: 700;
        }
      `}
    </style>
  </div>
)

const Header = ({ name }) => (
  <h2>
    <Link route={'#' + name}>
      <a id={name}>{name}</a>
    </Link>
    <style jsx>
      {`
        h2 a {
          color: unset;
          text-transform: capitalize;
        }
      `}
    </style>
  </h2>
)

export default () => {
  const dev = users.filter(user => user.dev)
  const trans = users.filter(user => !user.dev)
  return (
    <Fragment>
      <Header name='developers' />
      <Users users={dev} />
      <Header name='translators' />
      <Users users={trans} />
      <Header name='privacy' />
      <p>First, we collect, store, and use information you share on our website.</p>
      <p>We <i>store</i> the following data <Code>choosen language, test answers, Datetime of submitted test</Code>. Your IP, browser info and fingerprint is <i>not</i> stored</p>
      <p>We also use Google Analytics to measure traffic to our site and how users interact with our site. The Google Analytics terms specify that no personally identifiable information may be collected through the Google Analytics software.</p>
      <p><a href='mailto:jonas.enge@gmail.com' rel='noopener' target='_blank'>Contact</a>
        <FaExternalLinkAlt size='8' style={{ verticalAlign: 'top' }} /> us if you want to see an example of stored data or want it deleted.</p>
      <p>We don’t sell your personal data to anyone. Never have, never will.</p>
      <p>If you have any questions about this Privacy Policy, please <a href='mailto:jonas.enge@gmail.com' rel='noopener' target='_blank'>contact</a> us.</p>
    </Fragment>
  )
}
