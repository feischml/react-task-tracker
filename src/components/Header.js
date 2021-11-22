import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title, onAddTask, showAddTask }) => {
    return (<header>
                <h1>{title}</h1>
                <Button 
                    color={ !showAddTask ? 'green' : 'red'}
                    text={ !showAddTask ? 'Add Task' : 'Close' }
                    onAddTask={onAddTask}
                    showAddTask={showAddTask}>
                </Button>
            </header>
    )
}

Header.defaultProps = {
    title: 'Title'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
