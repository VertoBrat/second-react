import {Component} from "react";
import classes from './Layout.module.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {

    state = {
        menu: false
    }

    onToggleHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    onCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>

                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.onCloseHandler}
                />
                <MenuToggle
                    isOpen={this.state.menu}
                    onToggle={this.onToggleHandler}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout
