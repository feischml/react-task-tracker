import PropTypes from 'prop-types'

const Button = ({color, text, onAddTask}) => {

    return (
        <button 
            onClick={onAddTask}
            style={{backgroundColor: color}} 
            className='btn'>{text}
        </button>
    )
}

Button.defaultProps = {
    color: 'red',
    text: 'Add'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button
