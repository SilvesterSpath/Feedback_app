import PropTypes from 'prop-types'

function Header({bgColor, textColor, text}) {
  const headerStyle = {
    backgroundColor: 'black', color: 'red'
  }
  
  console.log(text);
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>Feedback UI</h2>
        <p>{text}</p>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header