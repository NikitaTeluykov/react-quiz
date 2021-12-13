import classes from './Drawer.module.css'
import {Component} from "react";
import BackDrop from "../../UI/BackDrop/BackDrop";
import {NavLink} from "react-router-dom";

const links = [
    {
        to: '/',
        label: 'Список',
        exact: true
    },
    {
        to: '/auth',
        label: 'Авторизация',
        exact: true
    },
    {
        to: '/quiz-creator',
        label: 'Создать тест',
        exact: false
    }
]

export default class Drawer extends Component {
    clickHandler = ()=> {
        this.props.onClose();
    }

    renderLinks() {
        return links.map((link, index)=> {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : ""
                            };
                        }}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]

        if(!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {
                            this.renderLinks()
                        }
                    </ul>
                </nav>
                {this.props.isOpen && <BackDrop onClick = {this.props.onClose} />}
            </>
        )
    }
}