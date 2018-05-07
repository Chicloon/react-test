import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'
// import * as FontAwesome from 'react-icons/lib/fa'

const renderLanguages = languages => (
  <List.List>
    {languages.map(language => (
      <List.Item
        icon="plus"
        key={`language-${language}`}
        description={language}
      />
    ))}
  </List.List>
)
const renderSocial = social => {  
  return (
    <List.List>
      {
        social.map(el=> (
          <List.Item key={`social-${el.label}`}>        
            <List.Content>
              <a href={el.link} target="_blank">
                <List.Icon size="big" name={el.label === "web" ? "globe": el.label} />
              </a>
            </List.Content>
          </List.Item>
          )
        )
      } 
    </List.List>       
  )
}

const Profile = ({ profile }) => {
  const { city, languages, social } = profile

  return (
    <React.Fragment>
      <List>
        <List.Header>
          <h3>Профиль</h3>
        </List.Header>
        <List.Item>
          <List.Icon name="home" size="big" />
          <List.Content>
            <List.Header>Город </List.Header>
            <List.Description>{city}</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="talk" size="big" />
          <List.Content>
            <List.Header>Знание языков</List.Header>
            {renderLanguages(languages)}
          </List.Content>
          <List.Content>
            <List.Header>Ссылки</List.Header>
            {renderSocial(social)}
          </List.Content>
        </List.Item>
      </List>
    </React.Fragment>
  )
}

Profile.proptypes = {
  profile: PropTypes.shape({   
    city: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    social: PropTypes.array.isRequired,
  }).isRequired,
}

export default Profile
