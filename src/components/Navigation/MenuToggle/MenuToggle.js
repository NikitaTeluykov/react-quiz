import classes from './MenuToggle.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";


const MenuToggle = props => {
    const cls = [
        classes.MenuToggle
    ]

    const icon = () => {
        if(props.isOpen) {
            cls.push(classes.open)
            return <FontAwesomeIcon className={cls.join(' ')}
                                    icon={faTimes}
                                    onClick={props.onToggle}
            />
        }
        else{
            return <FontAwesomeIcon className={cls.join(' ')}
                                    icon={faBars}
                                    onClick={props.onToggle}
            />
        }
    }

    return (
        <>
            {icon()}
        </>
    )
}

export default MenuToggle